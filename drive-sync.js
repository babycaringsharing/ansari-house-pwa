/**
 * ANSARI HOUSE – Google Drive Cloud Backup & Sync Patch
 * drive-sync.js
 *
 * Features:
 *  1. Real Google OAuth2 via GIS (Google Identity Services)
 *  2. Google Drive API v3 backup upload / list / download / delete
 *  3. Sandbox Cloud Simulator (fully offline, localStorage-based)
 *  4. UI injection: replaces fake "Sign In with Google" button
 *  5. Custom Client ID configuration panel
 *  6. Self-contained DB restore (no dependency on bundle internals)
 */

/* ═══════════════════════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
═══════════════════════════════════════════════════════════════════════════ */
function AH_showToast(type, message) {
  document.getElementById('ah-drive-toast')?.remove();
  const colors = {
    success: { border: '#10b981', glow: 'rgba(16,185,129,0.25)', icon: '✅' },
    error:   { border: '#ef4444', glow: 'rgba(239,68,68,0.25)',  icon: '❌' },
    info:    { border: '#7c3aed', glow: 'rgba(124,58,237,0.25)', icon: '⏳' },
  };
  const c = colors[type] || colors.info;
  const t = document.createElement('div');
  t.id = 'ah-drive-toast';
  t.style.cssText = `
    position:fixed; top:1.2rem; left:50%; transform:translateX(-50%) translateY(-16px);
    background:rgba(8,12,22,0.97); border:1.5px solid ${c.border};
    color:#f0f4ff; font-family:'Inter',-apple-system,sans-serif;
    font-size:0.84rem; font-weight:800; padding:0.75rem 1.25rem;
    border-radius:0.875rem; box-shadow:0 8px 32px rgba(0,0,0,0.7),0 0 20px ${c.glow};
    z-index:9999999; display:flex; align-items:center; gap:0.5rem;
    opacity:0; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
    max-width:min(88vw,420px); pointer-events:none;
  `;
  t.innerHTML = `<span style="font-size:1.05rem;flex-shrink:0">${c.icon}</span><span style="line-height:1.35">${message}</span>`;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.transform = 'translateX(-50%) translateY(0)';
    t.style.opacity   = '1';
  });
  setTimeout(() => {
    t.style.transform = 'translateX(-50%) translateY(-16px)';
    t.style.opacity   = '0';
    setTimeout(() => t.remove(), 300);
  }, 3600);
}

/* ═══════════════════════════════════════════════════════════════════════════
   SELF-CONTAINED DB RESTORE  (raw IndexedDB, no bundle dependency)
═══════════════════════════════════════════════════════════════════════════ */
async function AH_restoreData(data, mode) {
  if (!data || data.appName !== 'ANSARI HOUSE') throw new Error('Invalid backup file format');

  return new Promise((resolve, reject) => {
    const req = indexedDB.open('TenantDB');
    req.onerror = () => reject(new Error('Cannot open TenantDB'));
    req.onsuccess = async (e) => {
      const db = e.target.result;
      const allStores = Array.from(db.objectStoreNames);
      const backupStores = ['tenants', 'payments', 'liftBills', 'waterBills', 'miscFolders', 'miscDocuments'];
      const stores = backupStores.filter(s => allStores.includes(s));

      try {
        if (mode === 'replace') {
          // Clear all then bulk-add
          const tx = db.transaction(stores, 'readwrite');
          for (const s of stores) {
            await new Promise((res, rej) => {
              const r = tx.objectStore(s).clear();
              r.onsuccess = res; r.onerror = rej;
            });
            for (const record of (data[s] || [])) {
              await new Promise((res, rej) => {
                const r = tx.objectStore(s).put(record);
                r.onsuccess = res; r.onerror = rej;
              });
            }
          }
          await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
          db.close();
          resolve({ success: true });
        } else {
          // Merge: only add records whose id does not exist
          let added = 0;
          for (const s of stores) {
            const incoming = data[s] || [];
            if (!incoming.length) continue;
            const tx = db.transaction([s], 'readwrite');
            const store = tx.objectStore(s);
            // Get all existing keys
            const existingKeys = await new Promise((res, rej) => {
              const r = store.getAllKeys();
              r.onsuccess = () => res(new Set(r.result));
              r.onerror = rej;
            });
            for (const record of incoming) {
              if (!existingKeys.has(record.id)) {
                await new Promise((res, rej) => {
                  const r = store.add(record);
                  r.onsuccess = res;
                  r.onerror = () => res(); // skip duplicates silently
                });
                added++;
              }
            }
            await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
          }
          console.log(`✅ Merge complete: ${added} new records added.`);
          db.close();
          resolve({ success: true });
        }
      } catch (err) {
        db.close();
        reject(err);
      }
    };
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   GOOGLE GIS OAUTH
═══════════════════════════════════════════════════════════════════════════ */
let _tokenClient = null;
let _pendingTokenCb = null;

function AH_getClientId() {
  return localStorage.getItem('ah_custom_client_id') ||
    '125196931265-b5uo8q9773ep6q6obs2am8tq5ig1ornq.apps.googleusercontent.com';
}

function AH_initGIS() {
  if (!window.google?.accounts?.oauth2) return;
  _tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: AH_getClientId(),
    scope: 'https://www.googleapis.com/auth/drive.file email profile openid',
    callback: (resp) => {
      if (resp.error) {
        AH_showToast('error', 'Google Auth error: ' + resp.error);
        _pendingTokenCb = null;
        return;
      }
      if (resp.access_token) {
        const expiry = Date.now() + (resp.expires_in || 3600) * 1000;
        sessionStorage.setItem('ah_gdrive_token', resp.access_token);
        sessionStorage.setItem('ah_gdrive_expiry', expiry);
        if (_pendingTokenCb) { _pendingTokenCb(resp.access_token); _pendingTokenCb = null; }
      }
    }
  });
}

function AH_getToken() {
  const t = sessionStorage.getItem('ah_gdrive_token');
  const e = parseInt(sessionStorage.getItem('ah_gdrive_expiry') || '0');
  return (t && e > Date.now()) ? t : null;
}

function AH_requestToken(cb) {
  _pendingTokenCb = cb;
  if (!_tokenClient) {
    AH_waitForGIS(() => {
      AH_initGIS();
      if (_tokenClient) _tokenClient.requestAccessToken({ prompt: '' });
      else AH_showToast('error', 'Google Sign-In not available in this browser');
    });
  } else {
    _tokenClient.requestAccessToken({ prompt: '' });
  }
}

function AH_ensureToken(cb) {
  const t = AH_getToken();
  if (t) { cb(t); return; }
  AH_requestToken(cb);
}

function AH_waitForGIS(cb, tries = 0) {
  if (window.google?.accounts?.oauth2) { cb(); return; }
  if (tries > 50) { AH_showToast('error', 'Google Identity Services failed to load'); return; }
  setTimeout(() => AH_waitForGIS(cb, tries + 1), 200);
}

async function AH_fetchUserEmail(token) {
  try {
    const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: 'Bearer ' + token }
    });
    if (r.ok) {
      const d = await r.json();
      if (d.email) {
        localStorage.setItem('authorized_email', d.email);
        return d.email;
      }
    }
  } catch (_) {}
  return null;
}

/* ═══════════════════════════════════════════════════════════════════════════
   GOOGLE DRIVE API HELPERS
═══════════════════════════════════════════════════════════════════════════ */
async function AH_driveUpload(token, jsonStr, filename) {
  const boundary = 'AH_BOUNDARY_' + Date.now();
  const meta = JSON.stringify({ name: filename, mimeType: 'application/json' });
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n` +
    `--${boundary}\r\nContent-Type: application/json\r\n\r\n${jsonStr}\r\n` +
    `--${boundary}--`;

  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': `multipart/related; boundary=${boundary}`
    },
    body
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error('Drive upload failed (' + res.status + '): ' + txt.slice(0, 120));
  }
  return await res.json();
}

async function AH_driveList(token) {
  const q = encodeURIComponent("name contains 'ANSARI_HOUSE_BACKUP' and trashed = false");
  const fields = encodeURIComponent('files(id,name,createdTime,size)');
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${q}&orderBy=createdTime+desc&fields=${fields}&pageSize=30`,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  if (!res.ok) throw new Error('Could not list Drive files: ' + res.status);
  const data = await res.json();
  return data.files || [];
}

async function AH_driveDownload(token, fileId) {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { Authorization: 'Bearer ' + token }
  });
  if (!res.ok) throw new Error('Could not download backup: ' + res.status);
  return await res.json();
}

async function AH_driveDelete(token, fileId) {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token }
  });
  if (res.status !== 204 && !res.ok) throw new Error('Could not delete file: ' + res.status);
  return true;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BACKUP ACTION
═══════════════════════════════════════════════════════════════════════════ */
async function AH_handleBackup() {
  AH_showToast('info', 'Collecting database records…');
  try {
    const data = await AH_collectAllData();
    const json = JSON.stringify(data, null, 2);
    const d = new Date();
    const dateStr  = d.toISOString().slice(0, 10);
    const timeStr  = d.toTimeString().slice(0, 5).replace(':', '-');
    const filename = `ANSARI_HOUSE_BACKUP_${dateStr}_${timeStr}.json`;
    const isSandbox = localStorage.getItem('sandbox_mode') === 'true';

    if (isSandbox) {
      const list = JSON.parse(localStorage.getItem('sandbox_cloud_backups') || '[]');
      list.unshift({ id: 'sb_' + Date.now(), name: filename, createdTime: d.toISOString(), size: json.length, data });
      localStorage.setItem('sandbox_cloud_backups', JSON.stringify(list));
      AH_showToast('success', '✅ Backup saved to Sandbox Cloud!');
    } else {
      AH_ensureToken(async (token) => {
        AH_showToast('info', 'Uploading to Google Drive…');
        try {
          await AH_driveUpload(token, json, filename);
          AH_showToast('success', '✅ Backup uploaded to Google Drive!');
        } catch (err) {
          AH_showToast('error', 'Upload failed: ' + err.message);
        }
      });
    }
  } catch (err) {
    AH_showToast('error', 'Backup failed: ' + err.message);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESTORE ACTION + MODAL
═══════════════════════════════════════════════════════════════════════════ */
async function AH_handleRestore() {
  const isSandbox = localStorage.getItem('sandbox_mode') === 'true';
  if (isSandbox) {
    const list = JSON.parse(localStorage.getItem('sandbox_cloud_backups') || '[]');
    AH_showRestoreModal(list, null, true);
  } else {
    AH_ensureToken(async (token) => {
      AH_showToast('info', 'Fetching backup list from Drive…');
      try {
        const list = await AH_driveList(token);
        AH_showRestoreModal(list, token, false);
      } catch (err) {
        AH_showToast('error', 'Failed to list backups: ' + err.message);
      }
    });
  }
}

function AH_showRestoreModal(backups, token, isSandbox) {
  document.getElementById('ah-restore-modal')?.remove();
  const overlay = document.createElement('div');
  overlay.id = 'ah-restore-modal';
  overlay.innerHTML = `
  <style>
    #ah-restore-modal{position:fixed;inset:0;z-index:99999;background:rgba(4,8,18,.87);backdrop-filter:blur(14px);display:flex;align-items:flex-end;justify-content:center}
    #ah-restore-box{background:linear-gradient(180deg,rgba(14,22,44,.99),rgba(8,12,22,1));border:1px solid rgba(124,58,237,.25);border-bottom:none;border-radius:1.5rem 1.5rem 0 0;padding:0 1.25rem 2.5rem;width:100%;max-width:500px;box-shadow:0 -16px 60px rgba(0,0,0,.7);color:#f0f4ff;font-family:'Inter',-apple-system,sans-serif;animation:ah-sheet-in .35s cubic-bezier(.34,1.56,.64,1) forwards;transform:translateY(100%);max-height:82vh;display:flex;flex-direction:column}
    @keyframes ah-sheet-in{from{transform:translateY(100%)}to{transform:translateY(0)}}
    .ah-handle{width:40px;height:4px;background:rgba(255,255,255,.15);border-radius:99px;margin:.85rem auto 1.4rem}
    .ah-restore-title{font-size:1.15rem;font-weight:900;background:linear-gradient(135deg,#c4b5fd,#f9a8d4,#67e8f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.2rem}
    .ah-restore-sub{font-size:.72rem;color:#8899bb;font-weight:600;margin-bottom:1.1rem}
    .ah-backup-list{overflow-y:auto;flex:1;padding-right:2px}
    .ah-bk-item{display:flex;align-items:center;padding:.8rem;border-radius:.75rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);margin-bottom:.55rem;gap:.6rem}
    .ah-bk-info{flex:1;min-width:0}
    .ah-bk-name{font-size:.75rem;font-weight:800;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .ah-bk-meta{font-size:.63rem;color:#8899bb;margin-top:2px}
    .ah-bk-actions{display:flex;gap:.35rem;flex-shrink:0}
    .ah-bk-btn{padding:.42rem .7rem;font-size:.65rem;font-weight:800;border-radius:.5rem;border:none;cursor:pointer;transition:all .2s;white-space:nowrap;font-family:inherit}
    .ah-bk-merge{background:rgba(6,182,212,.15);border:1.5px solid rgba(6,182,212,.3);color:#67e8f9}
    .ah-bk-replace{background:rgba(239,68,68,.15);border:1.5px solid rgba(239,68,68,.3);color:#fca5a5}
    .ah-bk-delete{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.15);color:#ef4444;width:30px;height:30px;padding:0;display:flex;align-items:center;justify-content:center;font-size:.8rem}
    .ah-empty-state{text-align:center;padding:2.5rem 0;color:#8899bb;font-size:.85rem;font-weight:700}
    .ah-close-btn{width:100%;margin-top:1rem;padding:.9rem;border-radius:1rem;border:1px solid rgba(255,255,255,.08);background:transparent;color:#64748b;font-weight:800;cursor:pointer;font-size:.88rem;font-family:inherit}
  </style>
  <div id="ah-restore-box">
    <div class="ah-handle"></div>
    <div class="ah-restore-title">☁️ Cloud Backups</div>
    <p class="ah-restore-sub">${isSandbox ? '🛡️ Sandbox Simulator' : '🔵 Google Drive'} · Select a backup to restore</p>
    <div class="ah-backup-list">
      ${backups.length === 0
        ? `<div class="ah-empty-state">📭 No cloud backups found.<br><span style="font-size:.72rem;font-weight:500">Upload a backup first using the ☁️ Backup button.</span></div>`
        : backups.map(b => {
            const dateStr = new Date(b.createdTime).toLocaleString();
            const sizeStr = b.size ? (b.size / 1024).toFixed(1) + ' KB' : '—';
            return `
            <div class="ah-bk-item" data-id="${b.id}" data-name="${encodeURIComponent(b.name)}">
              <div class="ah-bk-info">
                <div class="ah-bk-name" title="${b.name}">${b.name}</div>
                <div class="ah-bk-meta">${dateStr} · ${sizeStr}</div>
              </div>
              <div class="ah-bk-actions">
                <button class="ah-bk-btn ah-bk-merge">MERGE</button>
                <button class="ah-bk-btn ah-bk-replace">REPLACE</button>
                <button class="ah-bk-btn ah-bk-delete">🗑</button>
              </div>
            </div>`;
          }).join('')}
    </div>
    <button class="ah-close-btn">✕ Close</button>
  </div>`;

  document.body.appendChild(overlay);
  overlay.querySelector('.ah-close-btn').onclick = () => overlay.remove();
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  // Swipe to close
  let sy = 0;
  const box = overlay.querySelector('#ah-restore-box');
  box.addEventListener('touchstart', e => { sy = e.touches[0].clientY; }, { passive: true });
  box.addEventListener('touchend',   e => { if (e.changedTouches[0].clientY - sy > 80) overlay.remove(); }, { passive: true });

  overlay.querySelectorAll('.ah-bk-item').forEach(item => {
    const fileId  = item.dataset.id;
    const name    = decodeURIComponent(item.dataset.name);

    item.querySelector('.ah-bk-merge').onclick = async () => {
      if (!confirm(`ADD new records from "${name}" to your current data. Continue?`)) return;
      overlay.remove();
      AH_showToast('info', 'Downloading and merging…');
      try {
        const data = isSandbox
          ? JSON.parse(localStorage.getItem('sandbox_cloud_backups') || '[]').find(x => x.id === fileId)?.data
          : await AH_driveDownload(token, fileId);
        if (!data) throw new Error('Backup data not found');
        await AH_restoreData(data, 'merge');
        AH_showToast('success', '✅ Merged successfully! Reloading…');
        setTimeout(() => window.location.reload(), 1500);
      } catch (err) { AH_showToast('error', 'Merge failed: ' + err.message); }
    };

    item.querySelector('.ah-bk-replace').onclick = async () => {
      if (!confirm(`⚠️ DELETE all current data and replace with "${name}". Are you sure?`)) return;
      overlay.remove();
      AH_showToast('info', 'Downloading and replacing…');
      try {
        const data = isSandbox
          ? JSON.parse(localStorage.getItem('sandbox_cloud_backups') || '[]').find(x => x.id === fileId)?.data
          : await AH_driveDownload(token, fileId);
        if (!data) throw new Error('Backup data not found');
        await AH_restoreData(data, 'replace');
        AH_showToast('success', '✅ Restored successfully! Reloading…');
        setTimeout(() => window.location.reload(), 1500);
      } catch (err) { AH_showToast('error', 'Restore failed: ' + err.message); }
    };

    item.querySelector('.ah-bk-delete').onclick = async () => {
      if (!confirm(`Delete "${name}" from the cloud?`)) return;
      AH_showToast('info', 'Deleting backup…');
      try {
        if (isSandbox) {
          let list = JSON.parse(localStorage.getItem('sandbox_cloud_backups') || '[]');
          list = list.filter(x => x.id !== fileId);
          localStorage.setItem('sandbox_cloud_backups', JSON.stringify(list));
        } else {
          await AH_driveDelete(token, fileId);
        }
        AH_showToast('success', '✅ Backup deleted!');
        item.remove();
        if (!overlay.querySelector('.ah-bk-item')) {
          overlay.querySelector('.ah-backup-list').innerHTML = `<div class="ah-empty-state">📭 No cloud backups found.</div>`;
        }
      } catch (err) { AH_showToast('error', 'Delete failed: ' + err.message); }
    };
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   UI RENDER — injects custom UI under the Google Drive Cloud Backup section
═══════════════════════════════════════════════════════════════════════════ */
let _lastRenderState = '';

function AH_renderCloudUI() {
  // Find the Google Drive Cloud Backup section
  const h3 = Array.from(document.querySelectorAll('.settings-section-title'))
    .find(el => el.textContent.trim() === 'Google Drive Cloud Backup');
  if (!h3) return;

  const groupCard = h3.closest('.settings-section')?.querySelector('.settings-group-card');
  if (!groupCard) return;

  // Find and hide the original fake signin button
  const origBtn = groupCard.querySelector('.google-signin-btn');
  if (origBtn) origBtn.style.setProperty('display', 'none', 'important');

  const isSandbox      = localStorage.getItem('sandbox_mode') === 'true';
  const sandboxAuth    = localStorage.getItem('ah_sandbox_authorized') === 'true';
  const realToken      = AH_getToken();
  const isSignedIn     = isSandbox ? sandboxAuth : !!realToken;
  const email          = localStorage.getItem('authorized_email') || 'Not configured';
  const stateKey       = `${isSandbox}|${isSignedIn}|${email}`;

  // Skip re-render if nothing changed
  if (document.getElementById('ah-gdrive-ui') && _lastRenderState === stateKey) return;
  _lastRenderState = stateKey;

  // Remove old wrapper
  document.getElementById('ah-gdrive-ui')?.remove();

  const ui = document.createElement('div');
  ui.id = 'ah-gdrive-ui';
  ui.style.padding = '0 0 0.25rem';

  if (isSignedIn) {
    // ── Signed-in state ─────────────────────────────────────────────────
    ui.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem;padding:.6rem .85rem;background:${isSandbox ? 'rgba(245,158,11,.08)' : 'rgba(16,185,129,.08)'};border:1.5px solid ${isSandbox ? 'rgba(245,158,11,.25)' : 'rgba(16,185,129,.25)'};border-radius:.75rem">
        <div>
          <div style="font-size:.72rem;font-weight:800;color:${isSandbox ? '#fbbf24' : '#34d399'}">${isSandbox ? '🛡️ Sandbox Mode Active' : '☁️ Google Drive Connected'}</div>
          <div style="font-size:.65rem;color:#8899bb;margin-top:2px">${email}</div>
        </div>
        <button id="ah-signout-btn" style="background:transparent;border:1px solid rgba(239,68,68,.3);color:#f87171;font-size:.67rem;font-weight:800;padding:.35rem .65rem;border-radius:.5rem;cursor:pointer;font-family:inherit;flex-shrink:0;margin-left:.5rem">SIGN OUT</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:.5rem">
        <button id="ah-backup-btn" style="display:flex;align-items:center;justify-content:center;gap:.4rem;background:linear-gradient(135deg,#06b6d4,#3b82f6);color:#fff;border:none;padding:.82rem;border-radius:.85rem;font-weight:800;font-size:.82rem;cursor:pointer;box-shadow:0 4px 16px rgba(6,182,212,.3);min-height:48px;font-family:inherit;transition:all .2s">☁️ Backup Now</button>
        <button id="ah-restore-btn" style="display:flex;align-items:center;justify-content:center;gap:.4rem;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;border:none;padding:.82rem;border-radius:.85rem;font-weight:800;font-size:.82rem;cursor:pointer;box-shadow:0 4px 16px rgba(124,58,237,.3);min-height:48px;font-family:inherit;transition:all .2s">🔄 Restore</button>
      </div>
    `;
    ui.querySelector('#ah-signout-btn').onclick = () => {
      sessionStorage.removeItem('ah_gdrive_token');
      sessionStorage.removeItem('ah_gdrive_expiry');
      localStorage.removeItem('ah_sandbox_authorized');
      _lastRenderState = '';
      AH_showToast('success', '🔑 Signed out successfully');
      setTimeout(() => window.location.reload(), 900);
    };
    ui.querySelector('#ah-backup-btn').onclick  = AH_handleBackup;
    ui.querySelector('#ah-restore-btn').onclick = AH_handleRestore;

  } else {
    // ── Signed-out state ─────────────────────────────────────────────────
    const customId = localStorage.getItem('ah_custom_client_id') || '';
    ui.innerHTML = `
      <button id="ah-signin-btn" style="width:100%;margin-bottom:.65rem;min-height:50px;display:flex;align-items:center;justify-content:center;gap:.5rem;background:${isSandbox ? 'linear-gradient(135deg,#7c3aed,#ec4899)' : 'linear-gradient(135deg,#1d4ed8,#3b82f6)'};border:none;color:#fff;font-family:inherit;font-weight:900;font-size:.88rem;cursor:pointer;border-radius:1rem;box-shadow:0 6px 20px ${isSandbox ? 'rgba(124,58,237,.4)' : 'rgba(59,130,246,.4)'};letter-spacing:.02em;transition:all .25s">
        ${isSandbox ? '🔑 Simulated Sign In (Sandbox)' : '<svg style="width:18px;height:18px;fill:#fff" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> Sign In with Google'}
      </button>
      ${!isSandbox ? `
        <div style="text-align:right;margin-bottom:.65rem">
          <a href="#" id="ah-toggle-config" style="color:#64748b;font-size:.68rem;font-weight:700;text-decoration:none">⚙️ Custom Client ID</a>
        </div>
        <div id="ah-config-panel" style="display:none;margin-bottom:.65rem;padding:.85rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.75rem">
          <div style="font-size:.62rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem">Google OAuth Client ID</div>
          <input id="ah-client-id-input" type="text" placeholder="Paste your Client ID from Google Cloud Console" value="${customId}" style="width:100%;padding:.55rem .65rem;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.1);border-radius:.5rem;color:#f0f4ff;font-size:.73rem;margin-bottom:.5rem;outline:none;font-family:inherit">
          <div style="font-size:.62rem;color:#64748b;margin-bottom:.6rem">Create a Web client in Google Cloud Console with <code style="background:rgba(255,255,255,.08);padding:1px 4px;border-radius:3px">http://localhost:8080</code> as authorized origin.</div>
          <div style="display:flex;gap:.4rem">
            <button id="ah-save-id" style="flex:1;height:34px;font-size:.7rem;font-weight:800;border:none;border-radius:.5rem;background:#7c3aed;color:#fff;cursor:pointer;font-family:inherit">Save</button>
            <button id="ah-reset-id" style="flex:1;height:34px;font-size:.7rem;font-weight:800;border:1px solid rgba(255,255,255,.08);border-radius:.5rem;background:transparent;color:#64748b;cursor:pointer;font-family:inherit">Reset</button>
          </div>
        </div>
      ` : ''}
    `;
    ui.querySelector('#ah-signin-btn').onclick = () => {
      if (isSandbox) {
        localStorage.setItem('ah_sandbox_authorized', 'true');
        AH_showToast('success', '🔑 Sandbox sign-in successful!');
        _lastRenderState = '';
        setTimeout(() => AH_renderCloudUI(), 500);
      } else {
        AH_requestToken(async (token) => {
          AH_showToast('info', 'Verifying account…');
          await AH_fetchUserEmail(token);
          AH_showToast('success', '☁️ Signed in to Google!');
          _lastRenderState = '';
          setTimeout(() => AH_renderCloudUI(), 500);
        });
      }
    };
    if (!isSandbox) {
      const configLink  = ui.querySelector('#ah-toggle-config');
      const configPanel = ui.querySelector('#ah-config-panel');
      if (configLink) configLink.onclick = (e) => { e.preventDefault(); configPanel.style.display = configPanel.style.display === 'none' ? 'block' : 'none'; };
      ui.querySelector('#ah-save-id')?.addEventListener('click', (e) => {
        e.preventDefault();
        const val = ui.querySelector('#ah-client-id-input').value.trim();
        if (!val) { AH_showToast('error', 'Enter a valid Client ID'); return; }
        localStorage.setItem('ah_custom_client_id', val);
        _tokenClient = null; // force re-init with new ID
        AH_initGIS();
        AH_showToast('success', '✅ Client ID saved!');
        configPanel.style.display = 'none';
      });
      ui.querySelector('#ah-reset-id')?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('ah_custom_client_id');
        ui.querySelector('#ah-client-id-input').value = '';
        _tokenClient = null;
        AH_initGIS();
        AH_showToast('success', 'Reset to default Client ID');
        configPanel.style.display = 'none';
      });
    }
  }

  // Insert custom UI right before the orig button (already hidden)
  if (origBtn) {
    origBtn.parentNode.insertBefore(ui, origBtn);
  } else {
    groupCard.appendChild(ui);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   MUTATION OBSERVER — re-renders UI when React re-mounts settings page
═══════════════════════════════════════════════════════════════════════════ */
(function AH_DriveSync_Init() {
  // Init GIS once it's available
  AH_waitForGIS(() => AH_initGIS());

  // Watch for React DOM changes (route changes, re-renders)
  const obs = new MutationObserver(() => AH_renderCloudUI());
  obs.observe(document.body, { childList: true, subtree: true });

  // Also run immediately in case we're already on the settings page
  AH_renderCloudUI();

  // React to sandbox toggle changes immediately
  document.addEventListener('change', (e) => {
    if (e.target?.type === 'checkbox') {
      _lastRenderState = ''; // force re-render
      setTimeout(AH_renderCloudUI, 80);
    }
  });

  console.log('[AH_DriveSync v2] Loaded ✓ | GIS ready:', !!window.google?.accounts?.oauth2);
})();
