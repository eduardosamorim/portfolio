'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "028b6c88fc0d5b56686dbbb2c39a396c",
"assets/AssetManifest.bin.json": "66a25baa3e6978220c31989d185fa219",
"assets/AssetManifest.json": "6ceb3c737d16c90e9f4856d096ce4eea",
"assets/assets/line.png": "50c295964ed314248e60a88a51f33eee",
"assets/assets/lleft.png": "544a834902df4faa60240b87bb3cd4c4",
"assets/assets/lright.png": "43d0ae737b59d92884ad02e07356d40b",
"assets/assets/na.png": "6ab30470a8c58fac0b1ae4c1af3ea49f",
"assets/assets/square.png": "32c79b2828f4043a32542bb303d5b853",
"assets/assets/svg/appLogo.png": "db29cad67638255ff5b66385938906d9",
"assets/assets/svg/externalLink.svg": "8192b9938a05ad4951f40457d563d947",
"assets/assets/svg/folder.svg": "21d06f307775812c56fbdaffae58576b",
"assets/assets/svg/github.svg": "d1baddb890c4751b001ae93bf9c5ce7a",
"assets/assets/svg/instagram.svg": "a5740599830b320c560d589a6ac0eb80",
"assets/assets/svg/linkedIn.svg": "b031a1bad55a5f7c3bdb7e343f9bf159",
"assets/assets/svg/profilePic.jpg": "f9b4f2a894ed3dd04da9c101e2eccd49",
"assets/assets/svg/stackoverflow.svg": "21d490f697a76cef4b5b6d5bff0d3aaf",
"assets/assets/svg/tetris.svg": "ffdf8ca0f81d0cf0bf3dffb17314d97b",
"assets/assets/svg/tetrisLogo.svg": "b1ab421c898f9a9b24fd585f26afe07c",
"assets/assets/svg/twitter.svg": "7c3b9ed87796d5f03c6b6c9ee913d1da",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/fonts/MaterialIcons-Regular.otf": "ae9e83c6c7b987db41727244348a701e",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "3991a01e630e1cfc0621ce91f14b097c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d7b92395a6ec502e8fa77a8c45a10671",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/android-icon-192x192.png": "eef6818ccc76007bc19889123ea109ff",
"icons/android-icon-36x36.png": "97fddde43d95dcb0f7198df0290f0ef8",
"icons/android-icon-48x48.png": "c9fb200a24a89d792f90e8b261cd8ca3",
"icons/android-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/android-icon-96x96.png": "c579f8f3e23abd9f5e6c1ef7f7cd9bb9",
"icons/apple-icon-114x114.png": "f7e0b581da8ab30e9c3f72777af2cd1c",
"icons/apple-icon-120x120.png": "0524a5a0988e6b5d1da93524b8367897",
"icons/apple-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/apple-icon-152x152.png": "1e806f71360050ac8da71d354133ad71",
"icons/apple-icon-180x180.png": "3322f05ad4f76dc18fa67c9ef46e2cd3",
"icons/apple-icon-57x57.png": "6f4016850f9f244d1194e513a5b94d95",
"icons/apple-icon-60x60.png": "21c0c9df904a52563bb2a4d7404336ba",
"icons/apple-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/apple-icon-76x76.png": "415af589f62f1b8ca78773d9256f63b6",
"icons/apple-icon-precomposed.png": "1cc667e26ddc791e2838eeb673463166",
"icons/apple-icon.png": "1cc667e26ddc791e2838eeb673463166",
"icons/favicon-16x16.png": "d7b92395a6ec502e8fa77a8c45a10671",
"icons/favicon-32x32.png": "5be85aa48085c43bf5563ac88413a8cb",
"icons/favicon-96x96.png": "4af6da443a456293f82d0de48a2315ca",
"icons/favicon.ico": "29fce6af89ea4a496397a61fffac1797",
"icons/icons8-j-key-stickers-16.png": "408617023566b59726fdc7098e1a8d6e",
"icons/icons8-j-key-stickers-32.png": "891b9524f208ba2296f3f3debc4e21fb",
"icons/icons8-j-key-stickers-96.png": "5deca21cdd01d18c79005b3a24bf4b5f",
"icons/ms-icon-144x144.png": "41287e8f327e450be735855b1495e94f",
"icons/ms-icon-150x150.png": "dff72e05bb35dfd56b263b0eef42f20f",
"icons/ms-icon-310x310.png": "53e7602ba9391a60a30d540a41aa83c0",
"icons/ms-icon-70x70.png": "a3342fe44afab33b0fd78895a2403266",
"index.html": "3254759ec26227e23d10625206213813",
"/": "3254759ec26227e23d10625206213813",
"main.dart.js": "07e542a46028129e246f012d5324745a",
"manifest.json": "c155cebc892c849bbcf235c302c5cb85",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
