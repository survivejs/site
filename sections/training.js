var path = require('path');
var _common = require('./_common');

module.exports = function training() {
  return {
    title: 'SurviveJS - Training',
    layouts: {
      index: function() {
        return require('../layouts/TrainingIndex.jsx').default;
      }
    }
  };
};
