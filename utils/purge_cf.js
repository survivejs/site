'use strict';
var url = require('url');

var _ = require('lodash');
var request = require('request');
var config = require('./config');

var API_ROOT = 'https://api.cloudflare.com/client/v4/';

main();

function main() {
  getZones(config, function(err, res) {
    if(err) {
      return console.error(err);
    }

    var zone = _.findWhere(res, {
      name: 'survivejs.com'
    })

    if(zone && zone.id) {
      purgeCache(_.assign(config, {
        zoneId: zone.id,
        files: [
          'http://survivejs.com/assets/main.css'
        ]
      }), function(err, res) {
        if(err) {
          return console.error(err);
        }

        console.log('purged cache', res);
      })
    }
    else {
      console.error('no zone found!');
    }
  });
}

function getZones(config, cb) {
  request({
    url: url.resolve(API_ROOT, 'zones'),
    headers: {
      'X-Auth-Email': config.email,
      'X-Auth-Key': config.key
    },
    json: true
  }, function(err, res) {
    if(err) {
      return cb(err);
    }

    cb(null, res.body.result);
  });
}

function purgeCache(config, cb) {
  request({
    url: url.resolve(API_ROOT, 'zones/' + config.zoneId + '/purge_cache'),
    method: 'delete',
    headers: {
      'X-Auth-Email': config.email,
      'X-Auth-Key': config.key
    },
    body: {
      files: config.files
    },
    json: true
  }, function(err, res) {
    if(err) {
      return cb(err);
    }

    cb(null, res.body);
  });
}
