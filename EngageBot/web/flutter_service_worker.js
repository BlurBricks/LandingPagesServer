'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c15ca7b7780467963213bb727f28a4a",
"assets/AssetManifest.bin.json": "d4db8cf7a5a9894c7fd5f32dee4466f2",
"assets/AssetManifest.json": "98dd1de77d0be6b86ff2713ec61ef121",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/about-mission-1_5x.webp": "16cbf095664f5aa55ab0f4853f76d0ec",
"assets/assets/images/accordion1-img2.webp": "a6ca06322e3c6054340d18dd04212fd1",
"assets/assets/images/atm.webp": "3e49699851682232f0ae2fb3226f413c",
"assets/assets/images/brandingimage.png": "30e5843721c0b16b13744618b57873a7",
"assets/assets/images/casestudyImg1.webp": "4c3fe98ffbeba5eb5fd158be7c77243d",
"assets/assets/images/casestudyImg2.webp": "f6382ec8251ceafdb8e503c01d9fb71a",
"assets/assets/images/casestudyImg3.webp": "eca84a0a84a0d53eadd1251a3e7c96bd",
"assets/assets/images/citibank_2.webp": "e5e0a3c327b6cc6317ba9356dd536124",
"assets/assets/images/clevertap.webp": "de02ef99675a2fec798d7768f483da74",
"assets/assets/images/companygram.png": "561181ca401d2f496079d8fd21c8bd32",
"assets/assets/images/companyworld.png": "2bfcb9f456525904ba1548fe1cc45e9b",
"assets/assets/images/customerpercentage.png": "808608dc7f7062b02ed3e368478086ef",
"assets/assets/images/dancing_lady.webp": "ae06de72e697635a6914fcee5dcec441",
"assets/assets/images/developers-v5-avatar.webp": "6475d9e2aafca5d33ebc276a8dbbeff7",
"assets/assets/images/developers-v5-productHero%2520(1).webp": "13380df6f96b725ce136f7c2d6d1cc98",
"assets/assets/images/developers-v5-productHero.webp": "13380df6f96b725ce136f7c2d6d1cc98",
"assets/assets/images/hero-img-1.webp": "6aa83ac8cc298be3f3996988a3a3a362",
"assets/assets/images/hero-img-2.webp": "70ba8bd1988ec08772a3a63952e0bf23",
"assets/assets/images/hero-img-3.webp": "31ff460e1f9a3a1524b3a7feea94bed7",
"assets/assets/images/heroimg.webp": "091d56265ba8b0f00a804e21aa01ec9c",
"assets/assets/images/homehero-about.webp": "afaab6a2a171064dbe03116ae8ac69e3",
"assets/assets/images/imagelogogup.png": "9f3186926fd181b55409424419e8af78",
"assets/assets/images/imagtaken.webp": "db508a89f63aa63aa4ae24d82c8e0c74",
"assets/assets/images/infographic-img.webp": "dae328f56dcb5395ec10c211cb13fbf5",
"assets/assets/images/integrationimage.png": "a91486e1588045aeb2ef7a36fe138e85",
"assets/assets/images/journey-bg.png": "a127a55e88edef426afb1bf87d50942c",
"assets/assets/images/message.png": "899db77bfbec9a7840af42bd4b02529d",
"assets/assets/images/messageicon.png": "c989f5fcf2fdc6c8640842ea3b8fb98e",
"assets/assets/images/messageicons.png": "3abe308e113943586937db2415b72463",
"assets/assets/images/ola_2.webp": "4b1ee1cccf1876745cec17b9dcce2604",
"assets/assets/images/peopleimage.webp": "20ab0f73faabc6e9048054de7be2c5d1",
"assets/assets/images/producthero.webp": "a30f93d4ada3bf1018957ccd3fbc79ed",
"assets/assets/images/propertyimage.png": "c7a39d39bbd630ac848a33fcb6ed99d8",
"assets/assets/images/retail.webp": "26ae654545f86a14d94b81788efe94e5",
"assets/assets/images/sidehug1.webp": "db0d303bd6f7fb79da2fc2a62a1b8611",
"assets/assets/images/sidehug2.webp": "e357b9b8d5951ab6bdf557a500d4f1e4",
"assets/assets/images/solheart.webp": "bbc8b7fcad0018bf08ed3d6b9da1188a",
"assets/assets/images/solpeople.webp": "09334562b15033601d5bb3f3b7dedc1b",
"assets/assets/images/solutionimg.webp": "5a8eaecf0860ef3a071127e7ac4eb8a7",
"assets/assets/images/solutionimg2.webp": "2f0baf46f22ce09c7bf750d0ff787061",
"assets/assets/images/tabimg.webp": "9f619e7a3a593d9a523757698cffa77d",
"assets/assets/images/upsell.png": "da679eab1a294a93ef8b85aaeabb1c97",
"assets/assets/images/v5-flipkart.webp": "58bd3eada8cee36d3e51caaef62cf43e",
"assets/assets/images/v5-home-gartner-image.jpeg": "8a1b4a6c41053c44f24274f401ec79dc",
"assets/assets/images/v5-netflix.webp": "fecbad01fd0c7740b627029e0bc5ee16",
"assets/assets/images/v5-nw-sh-1.jpeg": "672ea96359cdde61c1822e649931144a",
"assets/assets/images/v5-nw-sh-2.jpeg": "6c35b1815ad76bb64542adcc8a115ead",
"assets/assets/images/v5-nw-sh-3.jpeg": "388272667e22b47c37d0ee8e98eb6c20",
"assets/assets/images/v5-sidehugForm-1.webp": "2aa64f8c8329c457751ba0565613bd95",
"assets/assets/images/vegi.webp": "35d75f0a09938190b842c1322d0e0357",
"assets/assets/images/whatsapp.webp": "3d25a3478a7e6b260bc511206e73d22a",
"assets/assets/images/whatsappheroien.webp": "b38598a51f549ae767cb6f5fc14d2c32",
"assets/assets/images/worldicon.png": "f0b8e50cd3ebdd772f88a4311cbcdba3",
"assets/FontManifest.json": "1557b052678621f3acf41a296e427526",
"assets/fonts/MaterialIcons-Regular.otf": "6b6cfaa6706affb4f606be0b3fdf9c85",
"assets/NOTICES": "24e00d543018254e1b2b80d4e10ca1d3",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77afd5c8b83a0e9079d160ec70c894af",
"/": "77afd5c8b83a0e9079d160ec70c894af",
"main.dart.js": "02f3afca99b573430a5cf99fec8148ea",
"manifest.json": "1e0bdec9ab6f9f029a828639fa65f892",
"version.json": "3250e0724ac6f0cf6d60c33c9faa926e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
