'use strict';
var CloudFlareAPI = require('cloudflare4');

var config = require('./config');

main();

function main() {
  var api = new CloudFlareAPI(config);

  api.zoneGetAll({
    name: 'survivejs.com'
  }).then(function(zones) {
    var zone = zones[0];

    api.zonePurgeCacheBy(zone.id, {
      files: [
        'http://survivejs.com/assets/main.css',
        'http://survivejs.com/webpack_react/*',
        'http://survivejs.com/webpack/*',
        'http://survivejs.com/react/*',
        'http://survivejs.com/assets/img/favicon.png',
        'http://survivejs.com/favicon.ico',
        'http://survivejs.com/'
      ]
    }).then(function(ok) {
      console.log('purged main.css and content');
    }).catch(function(err) {
      console.error(err);
    });
  }).catch(function(err) {
    console.error(err);
  });
}
