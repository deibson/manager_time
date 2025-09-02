// Define o nome do cache
const CACHE_NAME = 'manager-time-v1';
// Lista de ficheiros a serem guardados em cache
const urlsToCache = [
  './',
  './index.html'
];

// Evento de instalação: guarda os ficheiros em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento fetch: serve os ficheiros a partir do cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se o ficheiro estiver no cache, retorna-o
        if (response) {
          return response;
        }
        // Caso contrário, vai à rede buscar o ficheiro
        return fetch(event.request);
      }
    )
  );
});

