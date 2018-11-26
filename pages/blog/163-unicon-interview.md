---
title: 'Unicon - Wrangle SVGs from your favorite design tool - Interview with Travis Arnold'
date: 2018-11-26
headerImage: 'assets/img/unicorn.jpg'
headerSource: 'https://unsplash.com/photos/opkaRk20tAw'
keywords: ['interview', 'design']
---

So far design and development have been considered separate disciplines. Recently tooling has begun to appear to bridge this gap.

To understand more about the topic, I am interviewing [Travis Arnold](https://twitter.com/souporserious), the author of [Unicon]().

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/4dd6d33b34ec56b2ba39c947dcaa07dc?s=200" alt="Travis Arnold" class="author" width="100" height="100" />
</span>

Hello, my name is Travis Arnold. I've been designing and developing for over ten years. I started my career out as a graphic designer and eventually made my way into front-end development. Recently, I've been enjoying creating design systems and working on design tooling.

</p>

## How would you describe _Unicon_ to someone who has never heard of it?

Unicon is a set of tools to help designers and developers sync SVGs from their favorite design tool to their codebase.

## How does _Unicon_ work?

Unicon is split up into multiple packages to allow various use cases. I'll explain the main packages below:

#### [unicon](https://github.com/souporserious/unicon/tree/master/packages/unicon)

The **unicon** package, the core of the solution, is responsible for sourcing SVGs from any design tool. Right now there are tighter integrations for Figma and Sketch, and then an option to read a folder of SVGs for use with any other backbone of Unicon.

**unicon** is responsible for sourcing SVGs from any design tool. Right now there are tighter integrations for Figma and Sketch, and then an option to read a folder of SVGs for use with any other tool like Adobe Illustrator or any tool that can export SVG. In the future, I would like to have options for any design tool that has an available API that Unicon can integrate with.

In a simple use case, we can import one of three functions and gather raw SVG strings from our design tool of choice. Take a look at the following:

```js
import { getSvgsFromSketch } from "unicon";

getSvgsFromSketch("./path/to/illustrations.sketch").then(svgs => {
  // Now we can do whatever we want with the raw SVG data
});
```

Each function adheres to the same style and signature, with some extras needed for some instances like the Figma API needing [authentication](https://github.com/souporserious/unicon/tree/master/packages/unicon#setfigmatokenauthtoken-string).

#### [unicon-cli](https://github.com/souporserious/unicon/tree/master/packages/unicon-cli)

Next, we have a CLI tool to help automate sourcing the SVG data and creating a file of exports. A typical script could look like the following:

```bash
{
  "scripts": {
    "icons": "unicon figma 5X...2ge --name icons --transformer json"
  }
}
```

In this case, we are sourcing SVG data from a Figma file. We also pass a few [options](https://github.com/souporserious/unicon/tree/master/packages/unicon-cli#options) to specify the name of the generated file as well as how the data is transformed using the [`unicon-transformer-json`](https://github.com/souporserious/unicon/tree/master/packages/unicon-transformer-json) package.

#### [unicon-react](https://github.com/souporserious/unicon/tree/master/packages/unicon-react)

Finally, the `unicon-react` package allows rendering SVGs universally in React and React Native with the same component. It understands the JSON chunks created by the `unicon-cli` tool.

```jsx
import Graphic from "unicon-react";
import { Archive } from "./icons";
export default () => <Graphic source={Archive} scale={4} />;
```

## How does _Unicon_ differ from other solutions?

Like other solutions, Unicon works with exported SVGs. It does this by using the [`getSvgsFromFolder`](https://github.com/souporserious/unicon/tree/master/packages/unicon#folder) function, but I also wanted to support directly exporting from the tool itself if possible. Using the provided APIs from Figma and Sketch, Unicon can keep a small feedback loop between design and development.

## Why did you develop _Unicon_?

I was initially inspired by what [Github does to manage their icon set](https://blog.github.com/2018-04-12-driving-changes-from-designs/). I liked the approach of using Figma's API to power an icon system and keep it in sync. I had previously made a [webpack loader for Sketch](sketch-to-svg-json-loader), so I wanted to see if I could create something better that was more flexible and included all design tools.

## What next?

An official docs site is next on the list. I want to create as many real-world examples to make sure Unicon can fit multiple use cases. Eventually, I'd like to create an Electron app, so it's easier for people not as familiar with the CLI to manage their icon sets. Lastly, with the release of [Github actions](https://github.com/features/actions), I want to look into how Unicon workflows can be more automated.

## What does the future look like for _Unicon_ and web development in general? Can you see any particular trends?

In the future, I'd like Unicon to have even better support with design tools and possibly package management for illustrations. There seems to be a trend of design tools popping up right now with everyone racing to be the next tool that exports directly to production code. In the end, I think everyone is bringing great innovation to this space, and I couldn't be more excited to be a part of it.

## What advice would you give to programmers getting into web development?

Always be experimenting and trying out new projects. Web development is one of the best fields to be in, with such a low barrier to entry, you can make your opportunities. I highly recommend contributing to open source if you have the time. I've learned more than I could have ever imagined since I started sharing and collaborating more. It's also pretty fun getting feedback and working with people all over the world!

## Who should I interview next?

[Brent Jackson](http://jxnblk.com). I'm always impressed and inspired by the work he puts out.

## Any last remarks?

Thank you for this interview! I'm excited about the future of design tooling. I can't wait to see it continue to grow and get better.

## Conclusion

Thanks for the interview Travis! I expect to see a lot of action in the space as developers and designers figure out how to collaborate better.

T> [To learn more about Unicon, head to GitHub.](https://github.com/souporserious/unicon)
