---
title: "DSS - Deterministic Style Sheets - Interview with Giuseppe Gurgone"
date: 2018-09-05
headerImage: "assets/img/dss.png"
keywords: ["interview", "styling", "cssinjs"]
---

CSS is perhaps one of the most controversial parts of web development. For some, it's the favorite, for some the least pleasant part. As a result, many solutions have appeared around it to make it more palatable to web developers.

To learn more about one, this time we'll learn about [DSS](https://dss-lang.com/), a solution by [Giuseppe Gurgone](https://twitter.com/giuseppegurgone).

## Can you tell a bit about yourself?

![Giuseppe Gurgone|100|100|author](assets/img/interviews/giuseppe.jpg)

My name is Giuseppe, and I am a front-end engineer from Sicily, Italy. In the past I worked for Yelp on their frontend core team, I am a core team member of SUIT CSS and co-author of a CSS-in-JS library called styled-jsx. If it wasn't clear, I like to build front-end infrastructure and CSS libraries. 😅

## How would you describe _DSS_ to someone who has never heard of it?

DSS - Deterministic Style Sheets - is a superset of CSS that can be compiled to atomic CSS classes.

In addition to producing incredibly small bundles, atomic CSS classes can be exploited to bring deterministic styles resolution to CSS.

For the ones who are not familiar with the concept, deterministic styles resolution means that styles resolve and affect an element based on their application order rather than cascade or their source files order.

```html
<!-- text is green -->
<p class="red green">hi there SurviveJS friends</p>

<!-- text is red -->
<p class="green red">hi there SurviveJS friends</p>
```

In my opinion this way of using styles is more powerful and predictable, and apparently I am not the only one who thinks that:

> This is definitely how I _thought_ css worked when I first read the spec in ~2002/3 - **[Nicole Sullivan 💎 (@stubbornella) - July 19, 2018](https://twitter.com/stubbornella/status/1019986406293114880)**

## How does _DSS_ work?

DSS is similar to CSS Modules, and it is language agnostic.

You write styles in regular `.css` files and then compile those with the [DSS compiler](https://dss-lang.com/usage/#dss-compiler) to produce a single tiny bundle of atomic CSS classes that you include in your application via `link` tag.

Like CSS Modules, for each CSS file, the DSS compiler produces a JSON file (or JS module) which maps the original selectors to their corresponding atomic CSS classes.

```css
.foo {
  margin-top: 30px;
  color: black;
  font-size: 10px;
}
.bar {
  color: green;
  font-size: 345px;
}
```

```json
{
  "foo": [
    "dss_marginTop-30px",
    "dss_color-black",
    "dss_fontSize-10px"
  ],
  "bar": ["dss_color-green", "dss_fontSize-345px"]
}
```

Above is what you `import` in your templates when you want to use the DSS styles. You can then consume those styles using a helper that merges the atomic CSS classes arrays right to left like `Object.assign` does in JavaScript.

```js
// DSS also comes with a webpack loader if you are using it in JavaScript.
import styles from "./my-component.css";
import classNames from "dss-classnames";

document.body.innerHTML = `<div class="${classNames(
  styles.foo,
  styles.bar
)}">hi</div>`;
```

Above produces:

```html
<div
  class="dss_marginTop-30px dss_color-green dss_fontSize-345px"
>
  hi
</div>
```

Merging is done (right to left) using the first occurrence of a property, e.g., `dss_color` and ignoring the others.

Thanks to the low specificity and naming scheme of the atomic CSS classes, DSS can guarantee that styles are resolved in application order, i.e., deterministically!

Note that the `classnames` helper can be implemented in any language.

## How does _DSS_ differ from other solutions?

DSS is just proper old static CSS compiled to atomic CSS classes. Many love atomic CSS classes based solutions like [Basscss](http://basscss.com/), [Tachyons](https://tachyons.io/), and [Tailwind CSS](https://tailwindcss.com/). While I like how productive such approaches make me, I think that having to do the compiler job and memorize all those class names is a bit inconvenient.

By compiling CSS to atomic classes, DSS allows me to write as many declarations as I want without penalizing the size of the final bundle. So I get to write the CSS I already know, e.g., `margin-top: 25px` and a compiler makes sure that it is compiled to atomic CSS and deduped if there are multiple occurrences of that declaration. It is a win-win situation.

Ah, and you also get deterministic style resolution. 🕶

## Why did you develop _DSS_?

Mainly because I use CSS Modules at work and I am a bit frustrated about the fact that you can still write overly specific CSS selectors. If you import the CSS files in the wrong order, you can easily screw up your application (👋 cascade).

In addition to that with atomic CSS your application bundle size grows logarithmically, i.e., at some point, you can keep adding CSS, but the file size of your CSS bundle won't change (increase).

In the end, I wanted to bring some of the good ideas from CSS-in-JS to static CSS land (and make Alex Russell happy).

> So my advice for folks who want to do the CSS-in-JS thing is to find a system that compiles the rulesets out and bottoms out at class set/unset. - **[Alex Russell (@slightlylate) - August 3, 2018](https://twitter.com/slightlylate/status/1025528324368490496)**

## What next?

I would love to add source maps support for better debuggability in development, add automatic shorthand properties unwrapping and abstract the atomification library so that it can be used at runtime too, you know for dynamic styles.

But most importantly it would be amazing if people could try it out and provide feedback!

## What does the future look like for _DSS_ and web development in general? Can you see any particular trends?

I don't know what is the future of DSS like since the project is still at the validation stage. The principles behind it have been proven to be reliable by other similar solutions (e.g., [CSS Blocks](https://css-blocks.com/)) therefore the future of it might depend on my marketing skills and the ability to make other people aware of its existence. :)

For what concerns web development I think that the future is about building a smaller, simpler and more robust set of APIs and primitives on top of the DOM that will act as the `normalize.css` for the Web Platform. React Native is doing this for native platforms and React Native for Web is a first attempt to build a web framework to build better web applications.

For what I know we could even [go back to DreamWeaver](https://medium.com/@velmu/is-it-time-to-reconsider-dreamweaver-34d442e5c278) though.

We will also see a mix of web technologies and native code thanks to WebAssembly - [we already do that at work](https://pspdfkit.com/blog/2017/webassembly-a-new-hope/).

## What advice would you give to programmers getting into web development?

The beginning is probably the best and more exciting part of a programmer career. At this stage, you probably don't or can't have strong opinions and are less likely to scope creep which is a great thing. Don't let the lack of experience or knowledge intimidate you, roll with it, get things done, break things and learn as you go.

While you do that, also review your code and "try harder" constantly.

## Who should I interview next?

Nicolas Gallagher about React Native for Web, @electrobabe and @evatrostlos because they are starting [Women && Code](https://twitter.com/electrobabe/status/1034134991846998017) in Vienna.

## Any last remarks?

- If you use React and any `className` helper I made an awesome Babel plugin for you: [babel-plugin-classnames](https://github.com/giuseppeg/babel-plugin-classnames).
- I also developed a little tool to check the file size of your CSS bundle and what it would be like if styles were compiled to atomic CSS classes. Check out [atomic-css-stats](https://www.npmjs.com/package/atomic-css-stats).

## Conclusion

Thanks for the interview, Giuseppe! I can see DSS solves a key pain point of CSS and I hope developers find it.

You can learn more at [DSS homepage](https://dss-lang.com). Check [the project also on GitHub](https://github.com/giuseppeg/dss) and [play with DSS online](https://dss-lang.com/static/playground/).
