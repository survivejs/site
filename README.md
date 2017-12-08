# SurviveJS - Site

This is the source of [https://survivejs.com/](https://survivejs.com/).

## Development

**You need [git-lfs](https://github.com/git-lfs/git-lfs) to clone this repository.**

First, clone this repository and the book ones:

```
git clone https://github.com/survivejs/site
git clone https://github.com/survivejs/webpack-book site/webpack-book
git clone https://github.com/survivejs/react-book site/react-book
git clone https://github.com/survivejs/maintenance-book site/maintenance-book
```

Then, you need to build each project (it is needed to build the site):

```
cd site/react-book/project_source
npm install
./build_all.js
```

Now going back to the `site` project, you need to install the dependencies:

```
cd ../../site
npm install
```

Finally, you can start the development server:

```
npm start
```

Now you can go to [http://localhost:3000](http://localhost:3000).

## Deployment

After you modify `antwar.config.js` to configure your deploy settings, you need to generate a static build:

```
npm run build
```

And after you checked out the build, you can deploy it with:

```
npm run deploy
```

## License

The site content is available under [CC BY-NC-ND license](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode). So as long as there's a proper attribution you can reuse the content. Ideally you would contribute your improvements back but that's not absolutely necessary.

The site source is available under [MIT license](./LICENSE).
