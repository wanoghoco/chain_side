'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6197674f19f6bd8ac2bcb8f8bc735a45",
"version.json": "78cb3f6beaa7222da71f093f11d8deef",
"index.html": "a9a2fab6855479f3e7eb61da2b85d003",
"/": "a9a2fab6855479f3e7eb61da2b85d003",
"main.dart.js": "3efdfed67e4ba3222f81e8de37985047",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "d9e79bb58c1b0f90015d723f49084454",
"logo.png": "53003ee1199c8284d183f0a4811afd99",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f7f52386e5f54bc1a9de1ef7598063b",
"assets/AssetManifest.json": "563b1d310e4ccc3e0a82a3d485705238",
"assets/NOTICES": "a3961d8cf9e23c89cbe06b2d8552a04a",
"assets/FontManifest.json": "7f5791d1ead6f88f29333c0ac9ddbe89",
"assets/AssetManifest.bin.json": "a678fa618441d65d07196cf0be3f35a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "620d831f7a4ef535f45977000d79e752",
"assets/fonts/NunitoSans_7pt-Medium.ttf": "d7b72fa3e5f4ea251a8eb27381f60049",
"assets/fonts/NunitoSans_7pt-SemiBold.ttf": "35d5db5e910116b1f7c27d10d1c354ef",
"assets/fonts/MaterialIcons-Regular.otf": "aeb5f3baf72cbcf815281e985f5e171d",
"assets/fonts/NunitoSans_7pt-Regular.ttf": "b31d295edf1de6be9a475411bd8d07fe",
"assets/fonts/NunitoSans_7pt-Bold.ttf": "5eca7f02cd39e97bdb62f4fd6221c4ce",
"assets/assets/level_2.png": "8089db412cda7cc560010cc5b2996b29",
"assets/assets/quest.png": "25ee60aee60fd82cb1bd97b77905b28f",
"assets/assets/level_3.png": "e208549a230094a1bb59119bfd520733",
"assets/assets/level_1.png": "be63762f0c21e7d991a7fc9dbece8564",
"assets/assets/bot.png": "e23f8118cb83e6b0fb9c17ed4d8aae52",
"assets/assets/telegram_icon.png": "35fe1a4f02452e2090ec72b2c5421977",
"assets/assets/first_leader.png": "1c19dfe3a6994ccdec26f0ae23775826",
"assets/assets/level_4.png": "b95ce734ac34b3de82b4f0bc33f660bd",
"assets/assets/level_5.png": "12fd1c49fa2d05bfe2c70e566b5f77f7",
"assets/assets/calender.png": "02e3b21e4d78abba8759c71a8d92ba90",
"assets/assets/level_7.png": "2a1c1a0edd554b517671fbffa5fcdabe",
"assets/assets/level_6.png": "e854fe634b1cdf2af5282374075a663c",
"assets/assets/fire.png": "873eec2f7082b8bd4da2734f19325d28",
"assets/assets/whatsapp_icon_outlined.png": "2690a3d8b76498a1b92eaf5b8ea381cc",
"assets/assets/instagram_icon.png": "9d7555183dcac7ea49d4791f3d9250a4",
"assets/assets/chain_crop_symbol.png": "4994d01c90bd32d19800bd606788e7ee",
"assets/assets/fb.png": "139bfc6d5aa082ffbe4870c9dffec445",
"assets/assets/youtube_icon.png": "0c03b04e8d6b794ddf574becd38786c9",
"assets/assets/energy_limit.png": "c98d2720e0c895263e7f366ce39cdfea",
"assets/assets/tiktok_icon.png": "b433862725664b15086fdaac3ae9cd77",
"assets/assets/combo_icon4.png": "80efa722e2b9502283084d425e707551",
"assets/assets/third_leader.png": "26cf399dbf0bc27d91a59177d153dfc1",
"assets/assets/multitap.png": "8c9c1b18b97688d40304df447f24fe7e",
"assets/assets/boost_image.png": "da280046bfbfd0100b30c6bd5afae652",
"assets/assets/tapper.png": "16fd9e49adf63e3c098aa6526ea315df",
"assets/assets/splash_image.png": "2445f4b8583e5848e98cfb46966a1c8a",
"assets/assets/logo.png": "b3b2bd04a07ed3e34c259e956092b045",
"assets/assets/ref_icon.png": "836e7f3378326cb42d0f1a54166c02fb",
"assets/assets/gift_box.png": "64b3f9b4881c99ccc75f8c81e465c44f",
"assets/assets/bot/bot_8.png": "5a764a2b073eb4fec5b8e6b0eb283443",
"assets/assets/bot/bot_9.png": "efef739bb3283948ec72008e0be8e0f2",
"assets/assets/bot/bot_14.png": "386cfd0d87fa2c1f959f52ed2af87af3",
"assets/assets/bot/bot_1.png": "b3312a8a4cce16a519bb09c2b398b533",
"assets/assets/bot/bot_15.png": "a3bcc4dcb640ddaea90477578f0b64eb",
"assets/assets/bot/bot_2.png": "992bdc3f8f68e0f93714feec0925d882",
"assets/assets/bot/bot_3.png": "f5291b203b615a1de2e1e0d44abac2c8",
"assets/assets/bot/bot_12.png": "7713cfdc84d466401dfb7b80025e6627",
"assets/assets/bot/bot_7.png": "9d1e86baeb9e9dcae82167f19fc7573c",
"assets/assets/bot/bot_6.png": "8c78636bdfc88082d5f1abc191ef2f2b",
"assets/assets/bot/bot_13.png": "c360c0056890cef883b75ced4decb3ab",
"assets/assets/bot/bot_11.png": "dc08359ead64586714fc0622470002c0",
"assets/assets/bot/bot_4.png": "6ec552151fa7fe0beecc3b6466c33a13",
"assets/assets/bot/bot_5.png": "30cf1c5bfc3b6f95646bfa306c07bbdf",
"assets/assets/bot/bot_10.png": "6285afbb78695e4b16347761413586ea",
"assets/assets/game_2.png": "b7d6a87eb8c266e90434998ea4977aef",
"assets/assets/game_3.png": "d6a0ac75bc0118a9b7ce3a3d265b42dc",
"assets/assets/app_pie_chart.png": "91c8042b6e4180c3127b0f67d94ebd0e",
"assets/assets/recharging_speed.png": "19dcc7d89a6c5c3c2ec9d2d32823e3d3",
"assets/assets/fruit.png": "97f7a81ddd2376e8603380a5c8eaa75a",
"assets/assets/level_8.png": "2a1c1a0edd554b517671fbffa5fcdabe",
"assets/assets/game_1.png": "8870578236f732f757455e7d994892bd",
"assets/assets/level_9.png": "6842dd80427a7441e8d04fd97d17124a",
"assets/assets/game_4.png": "0f180714f214b5fe41a65e9f7df492bf",
"assets/assets/game_5.png": "670658e98369bd12f0064a635c3336aa",
"assets/assets/twitter_icon.png": "1f696d5e0a532d38e6632fdfdac40006",
"assets/assets/second_leader.png": "01f431a0486b221fb6a6b0b317675541",
"assets/assets/new_coin.png": "691d7c623e7883d4e62b4a8014206fa0",
"assets/assets/level_10.png": "f0548b83c03cb3d48cbdac34b7e86210",
"assets/assets/copy.png": "6be0f9f9ee29591d61c1468705abaa50",
"assets/assets/c_symbol.png": "e0be3349666745b5b730803530e334ef",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
