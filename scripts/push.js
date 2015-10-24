(function() {

  navigator.serviceWorker.register('/service-worker2.js');

  function subscribe() {
    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
        console.log(subscription.endpoint);

        // we should probably change the button text
        var theButton = document.querySelector('.the-button');
        theButton.textContent = 'Disable Push Notifications';
      });
    });
  }

  // first let's add a listener to the button
  var theButton = document.querySelector('.the-button');
  theButton.addEventListener('click', function() {
    subscribe();
  });

})();
