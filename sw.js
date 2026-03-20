self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('fr-FR.json') || event.request.url.includes('localization')) {
    event.respondWith(
      new Response('{}', {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );
  }
});
