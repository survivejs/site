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
        'http://survivejs.com/assets/main.css'
      ]
    }).then(function(ok) {
      console.log('purged main.css');
    }).catch(function(err) {
      console.error(err);
    });
  }).catch(function(err) {
    console.error(err);
  });
}
