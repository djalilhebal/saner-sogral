const cacheName = 'sensible-sogral-v1';
const filesToCache = [
  './',
  './index.html',
  './index.css',
  './index.min.js',
  './images/duck-black.svg',
];

self.addEventListener('install', (installEvent) => {
  console.log('[Service Worker] Install');
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  )
});
