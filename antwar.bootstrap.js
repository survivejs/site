/* eslint-disable no-console */
const antwar = require("antwar");

const environment = process.argv[2];

// Patch Babel env to make HMR switch work
process.env.BABEL_ENV = environment;

antwar[environment]({
  environment,
  antwar: require("./antwar.config"),
  webpack: require("./webpack.config"),
})
  .then(() => {
    console.log("Server started at http://localhost:3000\n");
  })
  .catch(err => {
    console.error(err);

    process.exit(1);
  });
