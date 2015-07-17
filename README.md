# SurviveJS - Site

This is the source of [survivejs.com](survivejs.com).

## Development

Make sure you have dependent projects checked out in adjacent directories (i.e. `/webpack_react` and so on) and that you have Antwar available as a global install (`npm i antwar-cli -g`). There's some glitch in Antwar preventing it to work locally so it has to go this way sadly. If you hit `npm start`, it will open the project in development mode. Open `localhost:8000` at browser and tweak as you want. All features, such as RSS or commenting, aren't available in the development version.

`npm run build` generates a static build. It can be deployed by hitting `npm run deploy`. Especially before considerable changes it can be a good idea to check out the build result before deploying.

## License

The site is available under MIT. So as long as there's proper attribution you can reuse the content. Ideally you would contribute your improvements back but that's not absolutely necessary.
