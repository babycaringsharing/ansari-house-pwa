/**
 * ANSARI HOUSE – Service Worker v1
 * Enables offline-first PWA installation on Android
 */
const CACHE = 'ansari-house-v1';
const PRECACHE = [
  './',
  'index.html',
  'manifest.json',
  'theme-override.css',
  'backup.js',
  'drive-sync.js',
  'ansari_house_icon.png',
  'favicon.svg',
  'assets/index-CMSMpQKi.js',
  'assets/vendor-react-Co1__6Wa.js',
  'assets/vendor-dexie-BBE5do0Y.js',
  'assets/vendor-icons-CtWdggOv.js',
  'assets/index-Sj6wqcFK.css',
];

// Install: cache all core assets
self.addEventListener('install', evt => {
  self.skipWaiting();
  evt.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE).catch(() => {}))
  );
});

// Activate: clean old caches
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache first, fallback to network, SPA fallback to index.html
self.addEventListener('fetch', evt => {
  // Skip non-GET and external requests
  if (evt.request.method !== 'GET') return;
  const url = new URL(evt.request.url);
  if (url.origin !== self.location.origin) return;

  evt.respondWith(
    caches.match(evt.request).then(cached => {
      if (cached) return cached;
      return fetch(evt.request).then(resp => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE).then(cache => cache.put(evt.request, clone));
        }
        return resp;
      }).catch(() => {
        // SPA fallback: serve index.html for navigation requests
        if (evt.request.destination === 'document') {
          return caches.match('index.html');
        }
      });
    })
  );
});
