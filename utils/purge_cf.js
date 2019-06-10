/* eslint-disable no-console */
"use strict";
var CloudFlareAPI = require("cloudflare4");

var config = require("./config");

main();

function main() {
  var api = new CloudFlareAPI(config);

  api
    .zoneGetAll({
      name: "survivejs.com",
    })
    .then(function(zones) {
      var zone = zones[0];

      api
        .zonePurgeCacheBy(zone.id, {
          files: [
            "https://survivejs.com/assets/main.css",
            "https://survivejs.com/webpack_react/*",
            "https://survivejs.com/webpack/*",
            "https://survivejs.com/react/*",
            "https://survivejs.com/favicon.png",
            "https://survivejs.com/favicon.ico",
            // "https://survivejs.com/",
          ],
        })
        .then(function(ok) {
          console.log("purged main.css and content");
        })
        .catch(function(err) {
          console.error(err);
        });
    })
    .catch(function(err) {
      console.error(err);
    });
}
