const CACHE_NAME = "aaashop-v1";

const urls = [
  "index.html",
  "manifest.json",
  "logo.png",
  "about.html",
  "contact.html"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(urls);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});
