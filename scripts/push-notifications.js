(function() {

  navigator.serviceWorker.register('/service-worker.js');

  function subscribe() {
    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
        console.log('pushing now enabled!');
        console.log('curl --header "Authorization: key=AIzaSyBTuyGYpgaO1dyMeMr3xwlTJ1QB97XBv34" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\\"registration_ids\\":[\\"' + subscription.subscriptionId + '\\"]}"');
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
