importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst() // loads from cache first, good if you rely alot on images
    // new workbox.strategies.NetworkFirst() // loads from network first, good if you rely on apis or other dynamic data
);
console.log('hello world')