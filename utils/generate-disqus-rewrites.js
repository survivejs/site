/* eslint-disable no-console */
// TODO: generalize
const headers = require("../redirects/webpack");

const prefix = "https://survivejs.com/webpack/";
let result = "";
Object.keys(headers).forEach(k => {
  const v = headers[k];

  if (v.startsWith("http")) {
    result += prefix + k + "/, " + v + ",\n";
  } else if (v.startsWith("/")) {
    result += prefix + k + "/, https://survivejs.com" + v + ",\n";
  } else {
    result += prefix + k + "/, " + prefix + v + ",\n";
  }
});

console.log(result);
