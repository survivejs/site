---
title: '“SurviveJS — Webpack” v2.1 and “SurviveJS — Maintenance” v0.9'
date: 2017-11-17
headerImage: 'assets/img/no-pressure.jpg'
keywords: ['maintenance', 'release-notes', 'webpack']
---

What do you do when you realize a book has become too big? You split it of course. The [webpack book](/webpack/) began to feel this way after [the previous release](../survivejs-webpack-20/) and this is the reason why I started to write [a new book about maintenance](/maintenance/) with [Artem Sapegin](https://github.com/sapegin).

## Overview of the Situation

I've been collaborating with Artem since I wrote my first React book and he was the ideal collaborator for the new effort as we both have experience with maintaining and developing JavaScript projects of different sizes. Writing the book has been a chance for us to gather our knowledge into one place and learn in the process.

Maintenance feels like an undervalued topic, and it's one of the main reasons why we decided to write the book in the first place. It's easy to start a project but how can you ensure its success? Normally a project spends most of its lifetime in maintenance mode so putting the focus on this topic has value.

## Book Improvements — “SurviveJS - Webpack” v2.1

We began writing the book by moving secondary topics to the maintenance book from the webpack one. This cleaned up the structure of the book and allowed me to make it easier to approach.

The webpack book is more to the point now although it's still a long book (~370 pages). I am happy with the results, though, as now it feels like the book can be extended again.

During this process, I've applied simplifications based on my [training experiences](/training/) this year. I updated the book to webpack 3 and added tons of small tips and tricks here and there. A few editorial tweaks have been made to ensure the book reads well and fits the PDF format nicely.

I've listed the main changes below:

* The *Packages* part has been eliminated. The chapter focused on consuming packages remains in the book while the rest of the content has been moved to the maintenance book.
* The code has been formatted using Prettier. There are still trailing commas to keep the diffs simple.
* The *Automatic Browser Refresh* chapter has been renamed as *webpack-dev-server* to reflect its content better.
* The linting chapters have been rewritten and moved to the maintenance book.
* The *Analyzing Build Statistics* chapter has been renamed as *Build Analysis* chapter.
* The *Bundling Libraries* chapter has been reworked and moved to the maintenance book.
* The *Library Output* chapter has been dropped as webpack documentation and the maintenance book cover the topic well.
* The *Customizing ESLint* appendix has been moved to the maintenance book.
* The *Hot Module Replacement with React* appendix has been dropped as the official documentation covers the topic well.
* The CSS Modules portions have been moved to an appendix as it's secondary content.
* The book structure has been simplified and streamlined where possible so it's easier to get into the topic. At the same time I added more tips and tricks where it makes sense.

I still have content planned for the webpack book, but even in its current state, it's better, and more focused, than the old one. If you have ideas on what specific topics to cover, [let me know at GitHub](https://github.com/survivejs/webpack-book/issues).

In total 309 commits went to the book since the last release. You can find the [changes at GitHub](https://github.com/survivejs/webpack-book/compare/v2.0.22...v2.1.0). Remember to use the "Files changed" tab as it gives you a good overview of what's happening with the book.

You can find the book below:

* [“SurviveJS — Webpack” - Free online edition](/webpack/preface/)
* [“SurviveJS — Webpack” - Leanpub edition (digital)](https://leanpub.com/survivejs-webpack/)

T> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. I support his work this way given mine builds on top of his. Literally, most of the income goes to webpack developers now!

## New Book - “SurviveJS — Maintenance” v0.9

[The maintenance book](/maintenance) has roughly 150 pages in its current state, and it covers topics including packaging, code quality, infrastructure, documentation, and future. It's a light, inspirational read and it contains plenty of techniques you can apply in your daily work.

Given a large part of the content was split from the webpack book, [the Leanpub edition of the maintenance book](https://leanpub.com/survivejs-maintenance) will be provided for free to those that bought the previous (v2.0) version of the webpack book or earlier.

The current version of the book is missing some content, and the book is still shaping up. For this reason, it is important that you [give feedback on the GitHub issue tracker](https://github.com/survivejs/maintenance-book/issues).

You can find the book below:

* [“SurviveJS — Maintenance” - Free online edition](/maintenance/preface/)
* [“SurviveJS — Maintenance” - Leanpub edition (digital)](https://leanpub.com/survivejs-maintenance/)

T> The book profit is split between Artem and me. We use the funds to develop further content based on demand.

## What Next?

I want to push the maintenance book to a content complete state and produce a paperback version of it. The book price will go up gradually as it gets closer to completion.

I have a set of tweaks planned for the webpack book, and there's a [React book](/react/) to update as well.

T> Given I am based in Vienna these days, this has meant it's easy for me to do [JavaScript training](https://survivejs.com/training/) across Europe. I also consult occasionally so contact me if you are interested in either offering.

## Conclusion

I hope you enjoy the new book and find the webpack book improvements useful! It took a lot of work to get here, and there's still more to come. Thank you for your support!

Both books have specific chat channels at Gitter if you want to discuss the topics directly:

* [Maintenance book Gitter channel](https://gitter.im/survivejs/maintenance)
* [Webpack book Gitter channel](https://gitter.im/survivejs/webpack)

You can also [ask questions at my AmA](https://github.com/survivejs/ama/issues).

T> We will arrange [a React conference in Finland (end of April, 2018)](https://react-finland.fi/). Perhaps I will see some of you there!
