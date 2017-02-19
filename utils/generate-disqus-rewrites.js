// TODO: generalize
const headers = require('../sections/webpack')().redirects;

const prefix = 'https://survivejs.com/webpack/';
let result = '';
Object.keys(headers).forEach((k) => {
  const v = headers[k];

  result += prefix + k + '/, ' + prefix + v + ',\n';
});

console.log(result);
