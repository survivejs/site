var path = require("path");
var _common = require("./_common");

module.exports = function clinic() {
  return {
    title: "SurviveJS - Clinic",
    layouts: {
      index: function() {
        return require("../layouts/ClinicIndex.jsx").default;
      }
    }
  };
};
