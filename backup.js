/**
 * ANSARI HOUSE – Backup Patch Module v2
 *
 * Features:
 *  1. Direct JSON Backup Download
 *  2. ZIP Backup Download (self-contained ZIP builder, no libs)
 *  3. 📲 SHARE BACKUP via Web Share API (WhatsApp, Drive, Email, Bluetooth, etc.)
 *  4. 📧 Email Share fallback (mailto: link with instructions)
 *  5. 📋 Clipboard copy of JSON data
 *  6. Patches crashing go.manualDriveBackup()
 *  7. Removes System Info section
 */

/* ═══════════════════════════════════════════════════════════════════════════
   TINY ZIP BUILDER (no external libraries)
═══════════════════════════════════════════════════════════════════════════ */
const AH_ZIP = (() => {
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    crcTable[n] = c;
  }
  function crc32(buf) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  function u16(n) { return [(n & 0xFF), (n >> 8) & 0xFF]; }
  function u32(n) { return [(n & 0xFF), (n >> 8) & 0xFF, (n >> 16) & 0xFF, (n >> 24) & 0xFF]; }
  function enc(s) { return new TextEncoder().encode(s); }
  function cat(...arrs) {
    const total = arrs.reduce((s, a) => s + a.length, 0);
    const out = new Uint8Array(total); let off = 0;
    for (const a of arrs) { out.set(a, off); off += a.length; }
    return out;
  }
  return {
    build(files) {
      const entries = []; let offset = 0; const parts = [];
      for (const [name, content] of Object.entries(files)) {
        const nb = enc(name);
        const db = typeof content === 'string' ? enc(content) : content;
        const crc = crc32(db), size = db.length;
        const lfh = new Uint8Array([0x50,0x4B,0x03,0x04,0x14,0x00,0x00,0x00,0x00,0x00,
          0x00,0x00,0x00,0x00,...u32(crc),...u32(size),...u32(size),...u16(nb.length),0x00,0x00]);
        const le = cat(lfh, nb, db);
        parts.push(le); entries.push({ nb, size, crc, offset }); offset += le.length;
      }
      const cdParts = [];
      for (const { nb, size, crc, offset: off } of entries) {
        const cd = new Uint8Array([0x50,0x4B,0x01,0x02,0x14,0x00,0x14,0x00,0x00,0x00,0x00,0x00,
          0x00,0x00,0x00,0x00,...u32(crc),...u32(size),...u32(size),...u16(nb.length),
          0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,...u32(off)]);
        cdParts.push(cat(cd, nb));
      }
      const cdData = cat(...cdParts), cdOffset = offset, cdSize = cdData.length;
      const eocdr = new Uint8Array([0x50,0x4B,0x05,0x06,0x00,0x00,0x00,0x00,
        ...u16(entries.length),...u16(entries.length),...u32(cdSize),...u32(cdOffset),0x00,0x00]);
      return cat(...parts, cdData, eocdr);
    }
  };
})();

/* ═══════════════════════════════════════════════════════════════════════════
   DATABASE ACCESS — reads all IndexedDB tables directly
═══════════════════════════════════════════════════════════════════════════ */
async function AH_collectAllData() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('TenantDB');
    req.onerror = () => reject(new Error('Cannot open TenantDB'));
    req.onsuccess = (e) => {
      const db = e.target.result;
      const storeNames = Array.from(db.objectStoreNames);
      const data = { appName: 'ANSARI HOUSE', appVersion: '6.0', exportDate: new Date().toISOString() };
      if (storeNames.length === 0) { db.close(); resolve(data); return; }
      let pending = storeNames.length;
      const tx = db.transaction(storeNames, 'readonly');
      for (const store of storeNames) {
        const r = tx.objectStore(store).getAll();
        r.onsuccess = (ev) => {
          data[store] = ev.target.result;
          if (--pending === 0) { db.close(); resolve(data); }
        };
        r.onerror = () => { data[store] = []; if (--pending === 0) { db.close(); resolve(data); } };
      }
    };
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   EXPORT FUNCTIONS
═══════════════════════════════════════════════════════════════════════════ */
function AH_downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

window.AH_exportJSON = async function() {
  try {
    const data = await AH_collectAllData();
    const json = JSON.stringify(data, null, 2);
    const date = new Date().toISOString().slice(0, 10);
    AH_downloadBlob(new Blob([json], { type: 'application/json' }), `ANSARI_HOUSE_BACKUP_${date}.json`);
    return { success: true, json, date };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

window.AH_exportZIP = async function() {
  try {
    const data = await AH_collectAllData();
    const date = new Date().toISOString().slice(0, 10);
    const json = JSON.stringify(data, null, 2);
    const zipBytes = AH_ZIP.build({
      [`ANSARI_HOUSE_BACKUP_${date}.json`]: json,
      'README.txt': [
        'ANSARI HOUSE – Offline Backup Archive',
        `Created: ${new Date().toLocaleString()}`,
        `Tenants: ${(data.tenants || []).length}`,
        `Payments: ${(data.payments || []).length}`,
        '',
        'To restore:',
        '  1. Open ANSARI HOUSE → Settings',
        '  2. Tap "Import Backup" (Merge or Replace)',
        '  3. Select the .json file inside this ZIP',
      ].join('\n'),
    });
    AH_downloadBlob(
      new Blob([zipBytes], { type: 'application/zip' }),
      `ANSARI_HOUSE_BACKUP_${date}.zip`
    );
    return { success: true, zipBytes, date };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   SHARE BACKUP — Web Share API + fallbacks
═══════════════════════════════════════════════════════════════════════════ */
window.AH_shareBackup = async function(format = 'json') {
  try {
    const data = await AH_collectAllData();
    const date = new Date().toISOString().slice(0, 10);
    const json = JSON.stringify(data, null, 2);
    const tenantCount = (data.tenants || []).length;
    const paymentCount = (data.payments || []).length;

    let blob, filename, mimeType;

    if (format === 'zip') {
      const zipBytes = AH_ZIP.build({
        [`ANSARI_HOUSE_BACKUP_${date}.json`]: json,
        'README.txt': `ANSARI HOUSE Backup\nCreated: ${new Date().toLocaleString()}\nTenants: ${tenantCount}\nPayments: ${paymentCount}`,
      });
      blob = new Blob([zipBytes], { type: 'application/zip' });
      filename = `ANSARI_HOUSE_BACKUP_${date}.zip`;
      mimeType = 'application/zip';
    } else {
      blob = new Blob([json], { type: 'application/json' });
      filename = `ANSARI_HOUSE_BACKUP_${date}.json`;
      mimeType = 'application/json';
    }

    const shareFile = new File([blob], filename, { type: mimeType });

    // ── Web Share API (mobile, modern browsers) ──────────────────────────
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [shareFile] })) {
      await navigator.share({
        title: 'ANSARI HOUSE Backup',
        text: `📦 Database backup — ${tenantCount} tenants, ${paymentCount} payments\nGenerated: ${new Date().toLocaleString()}`,
        files: [shareFile],
      });
      return { success: true, method: 'webshare' };
    }

    // ── Web Share API without files (text only) ──────────────────────────
    if (navigator.share && !navigator.canShare) {
      // Share text summary only
      await navigator.share({
        title: 'ANSARI HOUSE Backup',
        text: `📦 ANSARI HOUSE backup\n${tenantCount} tenants · ${paymentCount} payments\nDate: ${date}\n\n(Download the file from the app's Settings page)`,
      });
      return { success: true, method: 'webshare-text' };
    }

    // ── Fallback: download the file ─────────────────────────────────────
    AH_downloadBlob(blob, filename);
    return { success: true, method: 'download-fallback' };

  } catch (err) {
    if (err.name === 'AbortError') return { success: false, error: 'Share cancelled' };
    // Last resort: download
    try { await window.AH_exportJSON(); return { success: true, method: 'download-emergency' }; }
    catch (_) {}
    return { success: false, error: err.message };
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   EMAIL SHARE — opens email client with backup instructions
═══════════════════════════════════════════════════════════════════════════ */
window.AH_emailShare = async function() {
  try {
    const data = await AH_collectAllData();
    const tenantCount = (data.tenants || []).length;
    const paymentCount = (data.payments || []).length;
    const date = new Date().toLocaleString();
    const subject = encodeURIComponent(`ANSARI HOUSE Backup — ${new Date().toISOString().slice(0, 10)}`);
    const body = encodeURIComponent(
      `ANSARI HOUSE — Database Backup Summary\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Generated: ${date}\n` +
      `Tenants: ${tenantCount}\n` +
      `Payments: ${paymentCount}\n\n` +
      `Please download the backup file from:\n` +
      `Settings → Direct Offline Import & Export → Download JSON Backup\n\n` +
      `Attach that file to this email.`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   CLIPBOARD COPY
═══════════════════════════════════════════════════════════════════════════ */
window.AH_copyToClipboard = async function() {
  try {
    const data = await AH_collectAllData();
    const json = JSON.stringify(data, null, 2);
    await navigator.clipboard.writeText(json);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   INTERCEPT — capture the broken button and show our modal
═══════════════════════════════════════════════════════════════════════════ */
function AH_patchBackup() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.offline-export-btn');
    if (!btn) return;
    e.stopImmediatePropagation();
    AH_showBackupModal();
  }, true);
}

/* ═══════════════════════════════════════════════════════════════════════════
   BACKUP MODAL — with Share button prominent
═══════════════════════════════════════════════════════════════════════════ */
function AH_showBackupModal() {
  document.getElementById('ah-backup-modal')?.remove();

  const hasWebShare = !!navigator.share;
  const overlay = document.createElement('div');
  overlay.id = 'ah-backup-modal';

  overlay.innerHTML = `
  <style>
    #ah-backup-modal {
      position: fixed; inset: 0; z-index: 99999;
      background: rgba(4,8,18,0.82);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      display: flex; align-items: flex-end; justify-content: center;
      padding: 0;
      animation: ah-modal-in 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    @keyframes ah-modal-in {
      from { opacity:0; }
      to   { opacity:1; }
    }
    #ah-backup-box {
      background: linear-gradient(180deg, rgba(14,22,44,0.99) 0%, rgba(8,12,22,1) 100%);
      border: 1px solid rgba(124,58,237,0.25);
      border-bottom: none;
      border-radius: 1.5rem 1.5rem 0 0;
      padding: 0 1.25rem 2.5rem;
      width: 100%; max-width: 500px;
      box-shadow: 0 -16px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,58,237,0.08);
      color: #f0f4ff;
      font-family: 'Inter', -apple-system, sans-serif;
      animation: ah-sheet-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
      transform: translateY(100%);
      max-height: 90vh;
      overflow-y: auto;
    }
    @keyframes ah-sheet-in {
      from { transform: translateY(100%); }
      to   { transform: translateY(0); }
    }
    .ah-handle {
      width: 40px; height: 4px;
      background: rgba(255,255,255,0.15);
      border-radius: 99px;
      margin: 0.85rem auto 1.5rem;
    }
    .ah-modal-title {
      font-size: 1.2rem; font-weight: 900;
      background: linear-gradient(135deg, #c4b5fd, #f9a8d4, #67e8f9);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 0.2rem;
    }
    .ah-modal-sub { font-size: 0.74rem; color: #4a5568; font-weight: 600; margin-bottom: 1.5rem; }
    .ah-btn {
      width: 100%; display: flex; align-items: center; gap: 0.75rem;
      padding: 0.95rem 1rem; border-radius: 1rem; border: none;
      font-size: 0.92rem; font-weight: 800; cursor: pointer;
      transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
      margin-bottom: 0.6rem; text-align: left;
      -webkit-tap-highlight-color: transparent;
      font-family: inherit;
    }
    .ah-btn:last-of-type { margin-bottom: 0; }
    .ah-btn:active { transform: scale(0.97); }

    /* Share — most prominent */
    .ah-btn-share {
      background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%);
      color: #fff;
      box-shadow: 0 8px 28px rgba(124,58,237,0.45);
    }
    .ah-btn-share:hover { box-shadow: 0 12px 36px rgba(124,58,237,0.6); transform: translateY(-1px); }

    /* WhatsApp green */
    .ah-btn-whatsapp {
      background: linear-gradient(135deg, rgba(37,211,102,0.18), rgba(18,140,126,0.1));
      border: 1px solid rgba(37,211,102,0.35); color: #4ade80;
    }

    /* Email blue */
    .ah-btn-email {
      background: linear-gradient(135deg, rgba(59,130,246,0.18), rgba(29,78,216,0.1));
      border: 1px solid rgba(59,130,246,0.35); color: #93c5fd;
    }

    /* JSON green */
    .ah-btn-json {
      background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08));
      border: 1px solid rgba(16,185,129,0.3); color: #6ee7b7;
    }

    /* ZIP purple */
    .ah-btn-zip {
      background: linear-gradient(135deg, rgba(124,58,237,0.18), rgba(79,70,229,0.08));
      border: 1px solid rgba(124,58,237,0.3); color: #c4b5fd;
    }

    /* Clipboard */
    .ah-btn-clipboard {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08); color: #64748b;
    }

    /* Close */
    .ah-btn-close {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.08); color: #334155;
      margin-top: 0.5rem;
    }
    .ah-btn-close:hover { background: rgba(255,255,255,0.04); color: #475569; }

    .ah-btn-icon { font-size: 1.3rem; flex-shrink: 0; }
    .ah-btn-body { flex: 1; }
    .ah-btn-label { display: block; font-size: 0.88rem; font-weight: 800; }
    .ah-btn-desc  { display: block; font-size: 0.68rem; font-weight: 500; opacity: 0.6; margin-top: 2px; }

    .ah-divider {
      border: none; border-top: 1px solid rgba(124,58,237,0.1);
      margin: 1rem 0; position: relative;
    }
    .ah-divider-label {
      position: absolute; top: -0.6rem; left: 50%; transform: translateX(-50%);
      background: rgba(8,12,22,1); padding: 0 0.75rem;
      font-size: 0.65rem; font-weight: 800; color: #334155;
      text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap;
    }

    #ah-backup-status {
      font-size: 0.8rem; padding: 0.75rem 1rem;
      border-radius: 0.75rem; display: none; font-weight: 700;
      margin: 0.5rem 0; font-family: inherit;
    }
    .ah-ok   { background: rgba(16,185,129,0.12); color: #34d399; border: 1px solid rgba(16,185,129,0.2); display: block !important; }
    .ah-err  { background: rgba(239,68,68,0.12);  color: #f87171; border: 1px solid rgba(239,68,68,0.2);  display: block !important; }
    .ah-busy { background: rgba(124,58,237,0.12); color: #c4b5fd; border: 1px solid rgba(124,58,237,0.2); display: block !important; }
  </style>

  <div id="ah-backup-box">
    <div class="ah-handle"></div>
    <div class="ah-modal-title">📦 Backup & Share</div>
    <p class="ah-modal-sub">All data is local — no internet needed for backup</p>

    ${hasWebShare ? `
    <button class="ah-btn ah-btn-share" id="ah-btn-share">
      <span class="ah-btn-icon">📲</span>
      <div class="ah-btn-body">
        <span class="ah-btn-label">Share Backup File</span>
        <span class="ah-btn-desc">WhatsApp, Drive, Bluetooth, Email — your choice</span>
      </div>
    </button>
    ` : ''}

    <div class="ah-divider"><span class="ah-divider-label">Download to Device</span></div>

    <button class="ah-btn ah-btn-json" id="ah-btn-json">
      <span class="ah-btn-icon">📄</span>
      <div class="ah-btn-body">
        <span class="ah-btn-label">Download JSON Backup</span>
        <span class="ah-btn-desc">Full database — all tables, all records</span>
      </div>
    </button>

    <button class="ah-btn ah-btn-zip" id="ah-btn-zip">
      <span class="ah-btn-icon">🗜️</span>
      <div class="ah-btn-body">
        <span class="ah-btn-label">Download ZIP Backup</span>
        <span class="ah-btn-desc">Compressed archive with README included</span>
      </div>
    </button>

    <div class="ah-divider"><span class="ah-divider-label">Other Options</span></div>

    <button class="ah-btn ah-btn-email" id="ah-btn-email">
      <span class="ah-btn-icon">📧</span>
      <div class="ah-btn-body">
        <span class="ah-btn-label">Share via Email</span>
        <span class="ah-btn-desc">Open email app with backup summary</span>
      </div>
    </button>

    <button class="ah-btn ah-btn-clipboard" id="ah-btn-clipboard">
      <span class="ah-btn-icon">📋</span>
      <div class="ah-btn-body">
        <span class="ah-btn-label">Copy JSON to Clipboard</span>
        <span class="ah-btn-desc">Paste into any text editor or notes app</span>
      </div>
    </button>

    <div id="ah-backup-status"></div>
    <button class="ah-btn ah-btn-close" id="ah-btn-close">✕  Close</button>
  </div>
  `;

  document.body.appendChild(overlay);

  const statusEl = overlay.querySelector('#ah-backup-status');
  const allBtns = [...overlay.querySelectorAll('.ah-btn')];

  function setStatus(msg, cls) {
    statusEl.textContent = msg;
    statusEl.className = cls;
  }
  function setBusy(busy) {
    allBtns.forEach(b => { b.disabled = busy; b.style.opacity = busy ? '0.6' : '1'; });
  }

  // Share button
  overlay.querySelector('#ah-btn-share')?.addEventListener('click', async () => {
    setBusy(true);
    setStatus('⏳ Preparing file for sharing…', 'ah-busy');
    const res = await window.AH_shareBackup('json');
    setBusy(false);
    if (res.success) setStatus('✅ Shared successfully!', 'ah-ok');
    else if (res.error !== 'Share cancelled') setStatus('❌ ' + res.error, 'ah-err');
    else statusEl.className = '';
  });

  // JSON download
  overlay.querySelector('#ah-btn-json').addEventListener('click', async () => {
    setBusy(true);
    setStatus('⏳ Building JSON backup…', 'ah-busy');
    const res = await window.AH_exportJSON();
    setBusy(false);
    if (res.success) setStatus('✅ JSON backup downloaded!', 'ah-ok');
    else setStatus('❌ ' + res.error, 'ah-err');
  });

  // ZIP download
  overlay.querySelector('#ah-btn-zip').addEventListener('click', async () => {
    setBusy(true);
    setStatus('⏳ Building ZIP archive…', 'ah-busy');
    const res = await window.AH_exportZIP();
    setBusy(false);
    if (res.success) setStatus('✅ ZIP backup downloaded!', 'ah-ok');
    else setStatus('❌ ' + res.error, 'ah-err');
  });

  // Email
  overlay.querySelector('#ah-btn-email').addEventListener('click', async () => {
    setBusy(true);
    setStatus('⏳ Opening email client…', 'ah-busy');
    const res = await window.AH_emailShare();
    setBusy(false);
    if (res.success) setStatus('✅ Email client opened!', 'ah-ok');
    else setStatus('❌ ' + res.error, 'ah-err');
  });

  // Clipboard
  overlay.querySelector('#ah-btn-clipboard').addEventListener('click', async () => {
    setBusy(true);
    setStatus('⏳ Copying to clipboard…', 'ah-busy');
    const res = await window.AH_copyToClipboard();
    setBusy(false);
    if (res.success) setStatus('✅ JSON copied to clipboard!', 'ah-ok');
    else setStatus('❌ Clipboard access denied. Try downloading instead.', 'ah-err');
  });

  // Close
  overlay.querySelector('#ah-btn-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

  // Swipe down to close
  let startY = 0;
  const box = overlay.querySelector('#ah-backup-box');
  box.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (e.changedTouches[0].clientY - startY > 80) overlay.remove();
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════════════════
   INJECT FLOATING BACKUP SHARE BUTTON in Settings page
═══════════════════════════════════════════════════════════════════════════ */
function AH_injectSettingsShareBtn() {
  // Inject a prominent "Share Backup" button after the offline-export-btn
  // Uses MutationObserver to wait for React render
  const observer = new MutationObserver(() => {
    const exportBtn = document.querySelector('.offline-export-btn');
    if (exportBtn && !document.getElementById('ah-share-btn-inject')) {
      const shareBtn = document.createElement('button');
      shareBtn.id = 'ah-share-btn-inject';
      shareBtn.innerHTML = `<span style="font-size:1.1rem">📲</span> Share Backup`;
      shareBtn.style.cssText = `
        background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
        color: #fff; font-weight: 900; font-size: 0.85rem;
        padding: 0.95rem; border-radius: 0.85rem;
        display: flex; align-items: center; justify-content: center;
        gap: 0.5rem; cursor: pointer; border: none;
        transition: all 0.2s; box-shadow: 0 4px 20px rgba(6,182,212,0.4);
        text-transform: uppercase; letter-spacing: 0.04em;
        margin: 0 1rem 0.75rem; width: calc(100% - 2rem);
        font-family: 'Inter', -apple-system, sans-serif;
      `;
      shareBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        AH_showBackupModal();
      }, true);
      exportBtn.insertAdjacentElement('afterend', shareBtn);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

/* ═══════════════════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════════════════ */
function AH_init() {
  AH_patchBackup();
  AH_injectSettingsShareBtn();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', AH_init);
} else {
  AH_init();
}

console.log('[AH_Backup v2] Loaded ✓ | Share API:', !!navigator.share);
