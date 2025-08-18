'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a58f91d49c2f789cfb334a1f7a06353",
"assets/AssetManifest.bin.json": "4f895a072e63b2f8777bcfe8aa130dcd",
"assets/AssetManifest.json": "8d3d01bea77e559ce2aa297eacac7349",
"assets/assets/animations/developing.json": "b4d68ae3231d1174e4134c5922ede850",
"assets/assets/fonts/InknutAntiqua-Black.ttf": "56c8bd5e251ff2fbd1d3f34800a52900",
"assets/assets/fonts/InknutAntiqua-Bold.ttf": "75173139fcad9ac83b9b52b3bc7ebbd7",
"assets/assets/fonts/InknutAntiqua-ExtraBold.ttf": "6df405cd01afd0362a9b2788496df3a9",
"assets/assets/fonts/InknutAntiqua-Light.ttf": "1131e152b0d8c7d7ef37f4f79a45b1da",
"assets/assets/fonts/InknutAntiqua-Medium.ttf": "0782277e5e312087e76fc8eaebb6f425",
"assets/assets/fonts/InknutAntiqua-Regular.ttf": "174da21c80975e95f76065b06ffb402d",
"assets/assets/fonts/InknutAntiqua-SemiBold.ttf": "598cfe46c83ab1e0386a7443b15a31b6",
"assets/assets/icons/email_icon.png": "39d384ce7964a1782efb4d1eb79ba4f7",
"assets/assets/icons/feature_1.png": "2c82ae07de1b7bf7c1c0fc433724852c",
"assets/assets/icons/feature_2.png": "ce53e2fe9d9292d2a58afb1e3ad9c176",
"assets/assets/icons/feature_3.png": "09c3b6ba597afc967c6138dd8cf127f0",
"assets/assets/icons/feature_4.png": "869c7d0eac6186adf950cdeceb4da622",
"assets/assets/icons/lock_icon.png": "be43121191600c4374e5c1bed485345a",
"assets/assets/icons/nav_home.png": "1267967684c8200a1a4377cda443ba6e",
"assets/assets/icons/nav_message.png": "f03d8a3ae5f5ff62eda625e323f00bef",
"assets/assets/icons/nav_profile.png": "00b3684df8791253cac7295af4cf9d97",
"assets/assets/icons/nav_shop.png": "4e5bd33f472fc57e2510f345802c7a1a",
"assets/assets/icons/notif_icon.png": "cc6122916c8f2fc2af75a48df9770e31",
"assets/assets/icons/phone_icon.png": "02a4dc69a88ec8d75bd0bb88bc8ea6c1",
"assets/assets/icons/search_icon.png": "26a3117510c3a106091bb690d25f5b33",
"assets/assets/icons/user_avatar.png": "2669195bd25cb4141cd5a39ea3840629",
"assets/assets/icons/user_icon.png": "abf53d4caad16bb0d0dbcaa380f32710",
"assets/assets/images/ecolearn1_icon.png": "a4431b5171eb82d5af82c120571e225a",
"assets/assets/images/ecolearn2_icon.png": "0aca1dd4dfc4495893f46295ef975e56",
"assets/assets/images/ecolearn3_icon.png": "0023ddfe013c01ed48661db2d27a130e",
"assets/assets/images/ecolearn4_icon.png": "23029b2483be152895b029a2ef3e218a",
"assets/assets/images/facebook_icon.png": "88dd4c8123d893c0ab6e30c76076f33b",
"assets/assets/images/google_icon.png": "ace373f19e4667d1b19845ac5dd45b35",
"assets/assets/images/produk1.png": "850993f39785452a41e7ac53905e0590",
"assets/assets/images/produk2.png": "cc838305bb06bad1068fc176a5bebada",
"assets/assets/images/produk3.png": "d02e23f11474a9fbb79b1a74e960835c",
"assets/assets/images/produk4.png": "5f1a8f8cf1582c0c54c54cffc48b1a46",
"assets/assets/splash.png": "0f1e3c81d82f355faf4b96f57313cf24",
"assets/FontManifest.json": "3064c51035f86ddd5fce9ade20d2983a",
"assets/fonts/MaterialIcons-Regular.otf": "2c6dbbda52b59bf553f35b78b0825ce5",
"assets/NOTICES": "8456e6ab265f59a3a86dab194cd42880",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e78ec2c1266b2026c8f08ad296431c09",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d80c0575fd06816e2e70d42321d303d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9bb015c268d95cc829e8ba475c9d19d",
"/": "f9bb015c268d95cc829e8ba475c9d19d",
"main.dart.js": "75794216946510493bd4b54a2de5489f",
"manifest.json": "617a71bbdc220f00ed127c75e277ebfb",
"version.json": "e0dc3faa50f14136d2e11570c400081b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
