(function() {
  self.addEventListener('push', function(event) {
    console.log('push received');
    self.registration.showNotification('Service Worker Example', {
      body: 'An example of what the body of a service worker could show. In a working app, you would want this to be dynamic, but you\'d just do that within your JavaScript. Cool!',
      icon: 'some-icon.png',
      tag: 'unique-identifier-of-some-sort'
    });
  });
})();
