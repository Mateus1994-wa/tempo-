self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("Seja Bem vindo-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone-192.png",
        "icone-512.png",
        "manha.jpg",
        "tarde.jpg",
        "noite.jpg",
        "madrugada.jpg",
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});



