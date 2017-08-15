---
title: 'SurviveJS - Webpack - v1.8'
date: 2017-02-18
headerImage: 'assets/img/bubble.jpg'
keywords: ['release-notes', 'webpack']
---

Compared to [the previous release](../survivejs-webpack-170) this one has gained more weight. The PDF version of the book is close to 400 pages due to new content and enhancements. There is still one chapter and two appendices to write, but the finish line is close!

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the Situation

My biggest goal this time around was to add certain missing content to the book. Initially I wanted to write an output related chapter, but instead that ended up becoming an entire part containing multiple chapters. I also added material on web workers while pushing the current content further based on feedback.

I still have to write a testing related chapter and cover i18n and debugging in short appendices. I will also add more material related to the fundamentals of webpack and likely rewrite the extension related chapters to use a package known as **webpack-defaults**. They will become more pragmatic as well.

The structure of the book evolved further and I took great care in figuring out short, but descriptive, names for parts of the book. Certain restructuring was made and the book should flow a little better than earlier.

T> If you have found the content useful, this would be a good time to contribute a testimonial. A sentence or two would go a long way. Contact me the way you see the most fitting. You can find a couple of channels at the site footer.

## Book Improvements - `1.8`

I continued the habit of silent releases and did a couple before I realized the book has moved too far content-wise to warrant one. But I'll likely continue with this habit yet again.

The highlight of the new release is the output related part. I cover output options of webpack there. I also put emphasis on multi-page setups and **Server Side Rendering**. Due to this the React chapter of the book disappeared and was split between the new content and HMR specific appendix.

The configuration style evolved yet again to accommodate for multi-page setups better. Now it's easier to compose than before.

You will find numerous smaller improvements. In addition to new content, the language of the book was improved. I introduced certain level of linting to my workflow and will continue to work on this as the major milestone gets closer.

In total 353 commits went to the book since the last release. You can find the [changes at GitHub](https://github.com/survivejs/webpack/compare/v1.7.0...v1.8.1). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

## What Next?

I will write a testing focused chapter, the missing appendices, and continue to cover issues highlighted by reader feedback. I expect to cover more fundamentals of webpack so you get a rough idea of webpack before actually starting to develop the configuration. After these steps I consider it feature complete.

## Conclusion

I hope you enjoy the changes. As usual, feedback is welcome. I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) and you can reach me through it easily.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his. Literally most of the income goes to webpack developers now!

T> You can [support webpack through open collective](https://opencollective.com/webpack) too.
