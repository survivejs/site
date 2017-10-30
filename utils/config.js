try {
  module.exports = require("./site-config");
} catch (e) {
  module.exports = {
    email: process.env.CF_EMAIL,
    key: process.env.CF_KEY,
  };
}
