/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52d9d63f8b5f57a0ade2e278bc382875"
  },
  {
    "url": "assets/css/0.styles.7d1f317b.css",
    "revision": "d3dd4465ac0023589794954404e4110e"
  },
  {
    "url": "assets/img/admin_login.e3892fd8.jpg",
    "revision": "e3892fd863799e8b12e06a4e34480b4d"
  },
  {
    "url": "assets/img/admin_panel.ef2891bb.jpg",
    "revision": "ef2891bbc95a8ff72daa84e3a5e6d05c"
  },
  {
    "url": "assets/img/answer.20059c35.png",
    "revision": "20059c35878805ef78c19bac3f3f58ef"
  },
  {
    "url": "assets/img/compare.30a2b117.png",
    "revision": "30a2b117990d336441d06a9984a46eff"
  },
  {
    "url": "assets/img/json.acfdf933.png",
    "revision": "acfdf933390edc794fd394efd14821a6"
  },
  {
    "url": "assets/img/login.ad20f014.png",
    "revision": "ad20f0146611f1232c5d10d70e1f9438"
  },
  {
    "url": "assets/img/query_without_token.0322f13d.jpg",
    "revision": "0322f13d9acfc836fcda369f3f18a4e6"
  },
  {
    "url": "assets/img/registration.e28ea9d0.png",
    "revision": "e28ea9d0b9163bfda1d4d47216e2bc8f"
  },
  {
    "url": "assets/img/schema.aee7481b.png",
    "revision": "aee7481bd12907700b7416b16fa9e13f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.908747c1.png",
    "revision": "908747c150137dccfa1f583de60b2518"
  },
  {
    "url": "assets/img/text_list.feea6b7e.jpg",
    "revision": "feea6b7e8e609a20cc2c53efa81e580e"
  },
  {
    "url": "assets/img/user_list.988a68ba.jpg",
    "revision": "988a68ba0a61b1908481b0fac08e0586"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.9f95bcea.js",
    "revision": "c75aad72b17e49d4b15996b43d37148f"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.536adca7.js",
    "revision": "ad0b25d3ae296f69653989857f67284f"
  },
  {
    "url": "assets/js/14.0f80e116.js",
    "revision": "31b1cd5faa9685fc7dc8a48e27b5765a"
  },
  {
    "url": "assets/js/15.b9293569.js",
    "revision": "92e7f62cc4977a7e275c65c1e01977d4"
  },
  {
    "url": "assets/js/16.0eccf095.js",
    "revision": "03425cc06aa6cdbb21bc0b7afaa0a137"
  },
  {
    "url": "assets/js/17.cd9c5131.js",
    "revision": "86c7ccfdfbbf0d7893f7b63224b5dff7"
  },
  {
    "url": "assets/js/18.b0f1a7b7.js",
    "revision": "608fd1d85c677b3986dadf75c71079b0"
  },
  {
    "url": "assets/js/19.5d38faac.js",
    "revision": "e5dfc4f71631dc5c6f04a33d450e7638"
  },
  {
    "url": "assets/js/2.05bd0282.js",
    "revision": "6e385980e1361a82053c75467019136d"
  },
  {
    "url": "assets/js/20.30d32d34.js",
    "revision": "a2e259f29292f34796ff35dad619e138"
  },
  {
    "url": "assets/js/21.e0d69867.js",
    "revision": "f7813bd479133191895defc8b62cab5f"
  },
  {
    "url": "assets/js/22.6e5f53ba.js",
    "revision": "1332b617180a3a27b32cd3eba87ab129"
  },
  {
    "url": "assets/js/23.b829b688.js",
    "revision": "36a1f386fd5273d972b5deb55c0bb3f7"
  },
  {
    "url": "assets/js/24.b8b6de91.js",
    "revision": "f4bb2e57c52647b73dfbe1a2fed3a7f0"
  },
  {
    "url": "assets/js/26.d055c4e2.js",
    "revision": "72ceaebfab60dab1c69530cf4a1c6117"
  },
  {
    "url": "assets/js/3.2c7262d3.js",
    "revision": "893e8bd89cb0b1bb12821eefdd0f7e7c"
  },
  {
    "url": "assets/js/4.47bd8645.js",
    "revision": "1f5d106ae36de262c9dc9e3d06fd3da8"
  },
  {
    "url": "assets/js/5.f72562e6.js",
    "revision": "1a956503b64741c3f5b92dd57c9992c0"
  },
  {
    "url": "assets/js/6.bd61b622.js",
    "revision": "e46d1a15d85befb20515948df81dbce7"
  },
  {
    "url": "assets/js/7.6b463537.js",
    "revision": "258a39b8bdd92332ab098c4ed83d649d"
  },
  {
    "url": "assets/js/8.41a96ea7.js",
    "revision": "9e76e554525db01fa2088c8714e67270"
  },
  {
    "url": "assets/js/9.4ed8c080.js",
    "revision": "4119d9ce5fe2ca70e543b1e6e733a4fc"
  },
  {
    "url": "assets/js/app.c482dfde.js",
    "revision": "6e91a6f39779c9208f7764b385454dd2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "085048b4c66e32f2548e94909199f642"
  },
  {
    "url": "design/index.html",
    "revision": "23e4f6398039403f16aa1ac52c7798ba"
  },
  {
    "url": "index.html",
    "revision": "7770a4c4b485060809f06d11a7e3acc8"
  },
  {
    "url": "intro/index.html",
    "revision": "5e9f53b2abb253b1030b4327b361de6e"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b73c6fd697be55c0eb1285fdee65ca69"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3d452cca74e4e1451d567a96b90197fb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0fc90b32d4ed8d0bc686facd1ebaf450"
  },
  {
    "url": "software/index.html",
    "revision": "c1cdbd9dbfabc43156d66064be82f3b0"
  },
  {
    "url": "test/index.html",
    "revision": "225e4ad371accd48d9fc196ff94cbadd"
  },
  {
    "url": "use cases/index.html",
    "revision": "ec0d9914252cbbf93dc3ea5cca2aa05e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
