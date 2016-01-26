# SurviveJS - Site

This is the source of [http://survivejs.com/](survivejs.com).

## Development

First, you need to clone this repository and the `webpack_react` one:

```
$ git clone https://github.com/survivejs/site
$ git clone https://github.com/survivejs/webpack_react
$ git clone https://github.com/survivejs/webpack_react_resources
```

Then, you need to build each `webpack_react` project (it is a needed requisite to build this site):

```
$ cd webpack_react/project_source
$ npm install
$ ./build_all.js
```

Now going back to the `site` project, you need to install the dependencies:

```
$ npm install
```

Finally, you can start the development server:

```
$ npm start
```

Now you can go to `http://localhost:8000`.

## Deployment

After you modify `antwar.config.js` to configure your deploy settings, you need to generate a static build:

```
$ npm run build
```

And after you checked out the build, you can deploy it with:

```
$ npm run deploy
```

## License

The site is available under MIT. So as long as there's proper attribution you can reuse the content. Ideally you would contribute your improvements back but that's not absolutely necessary.
