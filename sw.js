self.addEventListener("install", e => {
  console.log("Service Worker instalado ✨");
});

self.addEventListener("fetch", e => {
  // versión mini, sin cache todavía
});