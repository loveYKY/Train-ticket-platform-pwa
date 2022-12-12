/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { fetchUrl } from "./constant/index";
declare const self: ServiceWorkerGlobalScope;
var CACHE_NAME = "my-first-sw";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith("/_")) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.

const cacheList = [fetchUrl + "/rest/cities"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheList);
    })
  );
});
//在fetch事件里能拦截网络请求，进行一些处理
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request)
      .then((httpRes) => {
        //如果请求失败，则返回缓存中的资源
        if (
          !httpRes ||
          (httpRes.status !== 200 &&
            httpRes.status !== 304 &&
            httpRes.type !== "opaque")
        ) {
          return caches.match(event.request).then((response) => {
            if (response) {
              console.log('请求失败，则返回缓存中的资源')
              return response;
            } else {
              return httpRes;
            }
          });
        }
        //如果请求成功，则返回请求获得的数据
        else {
          console.log('请求成功')
          // 请求成功的话，将请求缓存起来。
          caches.open(CACHE_NAME).then(function (cache) {
            cache.add(event.request);
          });

          return httpRes;
        }
      })
      //请求报错，返回缓存
      .catch((error) => {
        return caches.match(event.request).then((response) => {
          if (response) {
            console.log('请求失败，则返回缓存中的资源')
            return response;
          } else {
            return error;
          }
        });
      })
  );
});

//先发起网络请求

// caches.match(event.request).then(function (response) {
//   // 如果匹配到缓存里的资源，则直接返回
//   if (response) {
//     return response;
//   }

//   // 匹配失败则继续请求
//   var request = event.request.clone(); // 把原始请求拷过来

//   //默认情况下，从不支持 CORS 的第三方网址中获取资源将会失败。
//   // 您可以向请求中添加 no-CORS 选项来克服此问题，不过这可能会导致“不透明”的响应，这意味着您无法辨别响应是否成功。
//   if (
//     request.mode !== "navigate" &&
//     request.url.indexOf(request.referrer) === -1
//   ) {
//     request = new Request(request, { mode: "no-cors" });
//   }

//   return fetch(request).then(function (httpRes) {
//     //拿到了http请求返回的数据，进行一些操作

//     //请求失败了则直接返回、对于post请求也直接返回，sw不能缓存post请求
//     if (
//       !httpRes ||
//       (httpRes.status !== 200 &&
//         httpRes.status !== 304 &&
//         httpRes.type !== "opaque") ||
//       request.method === "POST"
//     ) {
//       return httpRes;
//     }

//     // 请求成功的话，将请求缓存起来。
//     var responseClone = httpRes.clone();
//     caches.open(CACHE_NAME).then(function (cache) {
//       cache.put(event.request, responseClone);
//     });

//     return httpRes;
//   });
// })