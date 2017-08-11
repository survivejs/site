var path = require("path");
var _common = require("./_common");

module.exports = function workshop() {
  return {
    title: "SurviveJS - Workshop",
    layouts: {
      index: function() {
        return require("../layouts/WorkshopIndex.jsx").default;
      }
    }
  };
};
