'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f121aa9cda7def690375b64a490d2e31",
"assets/AssetManifest.bin.json": "30a32499ba9c1f85a9f69102ea63001e",
"assets/AssetManifest.json": "1a590af37fc80db0bf458adc3f9697e2",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/atomate%2520copy.png": "a84397768ab2ed12eb66b8cb6b4dd485",
"assets/assets/images/atomate.png": "a84397768ab2ed12eb66b8cb6b4dd485",
"assets/assets/images/Blue-logo.png": "454badfca8db1ed601c8efc3a7d674f2",
"assets/assets/images/botttomimag.png": "1f6d1985d6cc54c7d560162991996ba2",
"assets/assets/images/client-experience.png": "3667a3704e0528ff600db13e5ca2503c",
"assets/assets/images/Client-Resources_520x520a.png": "f2de07a06cf4dc7a36954042f1216cf0",
"assets/assets/images/Digital-Signing-Resources_136x135c.png": "e30f4c06f2d5399420c66b8c819e96d9",
"assets/assets/images/ebookimage.png": "be7a96efb1773ef03e87fa480b4270f1",
"assets/assets/images/facebookimage.webp": "8773ad2ba029b3df9018b67e9221c3bc",
"assets/assets/images/FAQ-Icon_520x520a.png": "bc77681175d7c7fab22e5787dc5eeae7",
"assets/assets/images/fusedoce.png": "32ac5df0a0fc483d014ec8c244d0353b",
"assets/assets/images/FuseSign-Bot.png": "6a65bf4345ac0bbc1314d4493467a6e5",
"assets/assets/images/FuseSign-Features_136x135c.png": "469e688be56a2a60e04db8b4e6bd3e50",
"assets/assets/images/Help-Articles_520x520a.png": "26ed746e11e50277bbb080eed868d861",
"assets/assets/images/imageaps.png": "1680958bcbbc90c1c562c1b47d59ca12",
"assets/assets/images/laptopcheck.png": "3880be373f779eacb71f68120812ea7b",
"assets/assets/images/logofusesign.png": "ba43455a0c2c419b50d4a4856fed6680",
"assets/assets/images/logoimage.png": "02fd1a33de1600eb3705242d60b5fb78",
"assets/assets/images/logoveri5now.png": "b4462d32db425fcde56274934a0b77c6",
"assets/assets/images/McCULLOCH_RGB-Trimmed.png": "8f671342af1dff052e450dbc53b2120d",
"assets/assets/images/mgi-logo2.png": "2829ae244e805ea50f9be46a608b752e",
"assets/assets/images/Old-Dart-Business-Solutions-Logo.png": "5a63fa06ac5b16f9639f1245fbdb3cde",
"assets/assets/images/Partners-and-Integrations_136x135c.png": "4822db82c773cab1b723c1d6884e3aa1",
"assets/assets/images/Plans-and-Pricing_136x135c.png": "c89046402974d06988bf44480457e848",
"assets/assets/images/Prosperity.png": "b42c83fabb2e74620a12457d3fad2f62",
"assets/assets/images/robocomesoon.png": "be9d6169328c4168ce70ba9006c840b9",
"assets/assets/images/shapefooter.png": "14fb03a431801a5266aaaf312d57ed18",
"assets/assets/images/shapefooter1.png": "d688b819682e1d5bcd4a975b464df002",
"assets/assets/images/Vector.png": "7d05200b1790bb177b80ad5dc67113d9",
"assets/assets/images/verifynowlogo.png": "0d6dbe24913213d61a1d21ece121af29",
"assets/assets/images/Webinars-Events_520x520a.png": "ae96c3a682bfe14b9bcc8fa00f41f7e8",
"assets/assets/images/WhitePaper%2520Content%2520-%2520Copy.webp": "907ca3334a5b9946e58a0eb4d78e51d0",
"assets/FontManifest.json": "c2fdd73893eafafdd0c652a9075df207",
"assets/fonts/MaterialIcons-Regular.otf": "eee0065d86ca11805d8253dbff693e74",
"assets/NOTICES": "06d4ffcbe450415d04dff26f9cc9c289",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
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
"index.html": "35d397720f34d12d8c0cc994565dc9ee",
"/": "35d397720f34d12d8c0cc994565dc9ee",
"main.dart.js": "4ae90b3bfdaaead2c1280934c5e8d94c",
"manifest.json": "f164784e1a04283d80d82ad70df745e2",
"version.json": "5b694559fe3aef459ff3ed052105e6ee"};
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
