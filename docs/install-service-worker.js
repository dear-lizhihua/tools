"use strict";

/* eslint-env browser */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/tools/service-worker.js", {
    scope: "/tools/",
  });
}
