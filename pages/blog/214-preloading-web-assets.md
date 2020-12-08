---
title: "Preloading Web Assets"
date: 2020-12-08
headerImage: "assets/img/fractal.jpg"
keywords: ["performance", "techniques"]
---

Preloading data is useful yet perhaps underused web development technique. When it comes to performance, the best work is the one you don't have to do. The second best is the one you can do ahead of time.

[Preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) achieves exactly this as it gives the browser a hint to begin loading and evaluating script as soon as possible. In my use case, I used preloading to speed up the worker architecture of my application by loading them immediately when the first view is shown and the user has to log in.

## Wrapping the idea of preloading as a script

Although I often use webpack in my projects, in this particular case I found it most useful to wrap the behavior as a small script to invoke after the main build has completed. Note that I use [modulepreload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/modulepreload) as [suggested by Jason Miller](https://web.dev/module-workers/).

To get to the point, consider the script below:

```javascript
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// This script writes preload links for workers within the built
// source to tell the browser that it should load them beforehand.
// That avoids work later on.
function writePreloads() {
  const cwd = process.cwd();
  // The assumption here is that we're processing
  // build/index.html.
  const indexPath = path.join(cwd, "build", "index.html");
  const indexFile = fs.readFileSync(indexPath, {
    encoding: "utf8",
  });
  // In my case, I wanted to preload workers so I choose those
  // from the output and then add related links to the document
  // head.
  const workerFiles = glob.sync(
    path.join(cwd, "build", "static", "js", "*.worker.js")
  );
  const modifiedIndexFile = indexFile.replace(
    "</head>",
    workerFiles
      .map((p) => path.relative(path.join(cwd, "build"), p))
      .map(
        (p) => `<link rel="modulepreload" href="/${p}" />`
      )
      .join("") + "</head>"
  );

  fs.writeFileSync(indexPath, modifiedIndexFile);
}

if (require.main === module) {
  writePreloads();
} else {
  module.exports = writePreloads;
}
```

If you end up using the script, make sure to install [glob](https://www.npmjs.com/package/glob) as a dependency to your project. The code could be generalized further and I only wanted to give you a basic idea so you can adjust it to your needs.

It's good to note that it's not idempotent by design so if you run it multiple times, it will add the tags multiple times as well. One way to avoid the problem would be to use something like [cheerio](https://www.npmjs.com/package/cheerio) to detect the case or rely on a pure JavaScript based check.

T> For those interested, it's possible to wrap the behavior within a webpack plugin. I've written in detail how to do this in [the plugins chapter](https://survivejs.com/webpack/extending/plugins/) of my webpack book.

## When to use?

Preloading/prefetching is a powerful technique and it can be useful in the following cases:

- When inspecting the application and especially its networking behavior, you realize some of the work should occur sooner. This can happen with workers you want to run as soon as possible for example. That's when preloading will come in handy.
- If you detect that the user intends to navigate to another page, you could prefetch it. Solutions like [guess.js](https://guess-js.github.io/) can be helpful here.

You shouldn't use the techniques for each asset as that would defeat the point. Consider it as a means of prioritization of work.

## Conclusion

I hope you find the technique useful. At least in my use case it made a definite difference as we were able to move loading earlier in the process to avoid work later.

T> Ivan Akulov has [explained the difference between preloading, prefetching and other options](https://3perf.com/blog/link-rels/) in detail over at his blog.
