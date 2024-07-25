// public-src-js-app.js

var deferredPrompt;

if (!window.Promise) {
    window.Promise = promise;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('service worker registered!');

    });
    window.addEventListener('beforeinstallprompt', function(event) {
        console.log('beforeinstallprompt fired');
        event.preventDefault();
        deferredPrompt = event;
        return false;
    })
}