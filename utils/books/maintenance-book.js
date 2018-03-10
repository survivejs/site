// This parses webpack book manuscript and converts it into a lookup
// useful for linking
const parseChapters = require("./parse-chapters");

const maintenanceUrl = require("../../antwar.config.js").paths.maintenance.url;

let cache = {};

if (Object.keys(cache).length > 0) {
  module.exports = () => cache;
} else {
  module.exports = () => {
    const ret = parseChapters(
      maintenanceUrl,
      "./books/maintenance-book/manuscript",
      "maintenance"
    );

    cache = ret;

    return ret;
  };
}
