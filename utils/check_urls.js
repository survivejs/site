/* eslint-disable no-console */
"use strict";
var express = require("express");
var serveStatic = require("serve-static");
var BrokenLinksChecker = require("bs-broken-links-checker").BrokenLinksChecker;
var portfinder = require("portfinder");

main();

function main() {
  portfinder.getPort(function(err, port) {
    if (err) {
      return console.error(err);
    }

    var app = express();
    app.use(serveStatic("build/"));

    var server = app.listen(port, function(err) {
      if (err) {
        return console.error(err);
      }

      var brokenLinksChecker = new BrokenLinksChecker({
        logger: {
          level: "warn",
        },
        onDone: function() {
          server.close();
        },
      });

      brokenLinksChecker.start("http://localhost:" + port);
    });
  });
}
