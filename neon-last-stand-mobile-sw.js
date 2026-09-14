const CACHE='neon-mobile-v2';
const FILES=['./','./neon-last-stand-mobile.html','./neon-last-stand-mobile.webmanifest','./neon-last-stand-icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(saved=>saved||fetch(event.request))));
