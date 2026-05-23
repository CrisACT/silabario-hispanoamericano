/* ============================================
   SERVICE WORKER — Silabario Interactivo
   Estrategia: Cache-First para assets, Network-First para index.html
   ============================================ */

const CACHE_NAME = 'silabario-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/components.css',
  '/css/animations.css',
  '/js/silabario-data.js',
  '/js/illustrations-data.js',
  '/js/lessons-data.js',
  '/js/speech.js',
  '/js/progress.js',
  '/js/games.js',
  '/js/lesson-view.js',
  '/js/mascot.js',
  '/js/app.js',
];

/* ─── Instalar: precachear assets estáticos ─── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

/* ─── Activar: limpiar cachés viejas ─── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ─── Fetch: Cache-First para assets, Network-First para navegación ─── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Dejar pasar requests externos (Font Awesome CDN, OpenMoji CDN)
  if (url.origin !== location.origin) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          // Cachear imágenes externas (OpenMoji) para uso offline
          if (response.ok && (url.hostname.includes('openmoji') || url.hostname.includes('cdnjs'))) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // Para archivos de assets locales: Cache-First
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/css/') ||
    url.pathname.startsWith('/js/')
  ) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }))
    );
    return;
  }

  // Para navegación (index.html): Network-First con fallback a caché
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match('/index.html'))
  );
});
