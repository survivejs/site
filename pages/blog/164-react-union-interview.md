---
title: "React Union - React for CMSs and Portals - Interview with Tomáš Konrády"
date: 2018-12-02
headerImage: "assets/img/react-union.jpg"
keywords: ["interview", "react"]
---

React has uses beyond application development. One of the perhaps surprising use cases is to integrate it within a Content Management System (CMS) such as WordPress.

To get a better idea of how this could work out, I am interviewing [Tomáš Konrády](https://twitter.com/konnnyy).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/db0a1034827780a9e20cc4f50cb604a8?s=200" alt="Tomáš Konrády" class="author" width="100" height="100" />
</span>

I am frontend developer at [Lundegaard](https://lundegaard.eu) in Prague, living in Hradec Králové. Recently I have started to fell in love with open-source and the Ramda library. The result of that is a few projects.

</p>

First of them is the [ramda-extension](https://github.com/tommmyy/ramda-extesion) where our core team of Ramdists created point-free utility functions composed with only Ramda functions. Second open-source project is a [React Union](https://github.com/lundegaard/react-union), the topic of this interview.

In my spare time, I either draw, play a guitar or exercise with a kettlebell.

## How would you describe _React Union_ to someone who has never heard of it?

Purpose of the React Union project is to help with developing React applications that are situated in JavaScript unfriendly environments. What do I mean by these? For us, in Lundegaard, it is a Java CMS backend. For others, it can be any non-JavaScript CMS such as WordPress or Drupal.

React Union project consists of three parts:

- `<Union />` component - `Union` component is responsible for assembling one logical virtual DOM from physically distributed HTML fragments.
- react-union-scripts is our SDK for developing large applications.
- Boilerplates provide starting points for projects and they also show how to use the component and the scripts together.

## How does _React Union_ work?

Assume, that code below is the output of your server:

```html
<html>
  <body>
    Generated content by CMS.

    <div id="news-feed"></div>
    <script
      data-union-widget="news-feed"
      data-union-container="news-feed"
    ></script>

    Generated content by CMS with nonpredictable markup...

    <div class="app-container">
      <div id="customers-chat"></div>
      <script
        data-union-widget="customers-chat"
        data-union-container="customers-chat"
      ></script>
    </div>

    <script src="js/app.bundle.js"></script>
  </body>
</html>
```

Pay attention to the `script` tags with `data-union-widget` attribute. The tag describes which application should be rendered at which place in document (described by `data-union-container` attribute).

Now let's look at our index file in which the `Union` components are used:

```jsx
import { Union } from "react-union";

const routes = [
  {
    name: "news-feed",
    getComponent: done => (
      import("./containers/NewsFeed").then(done),
    )
  },
  {
    name: "customers-chat",
    getComponent: done => (
      import("./containers/CustomersChat").then(done),
    )
  },
];

const App = () => <Union routes={routes} />;

export default App;
```

`Union` component scans the HTML for our `script` tags - we call them _widget descriptors_. Then, combined with the route definition above, they will become React containers.

The component utilizes portals under the hood so we can be sure that even though the components are physically rendered in different parts in real DOM, `Union` will assemble one logical virtual DOM for us. Then we can provide one context to all of our containers. We can share the application state, theme preferences, etc. to all of our containers.

OK, why all the fuzz, why not to render the component directly?

Let's imagine that we don't have control over the response from the server. For example, it can be a result of a CMS, where administrators can drag and drop whatever application or a widget to their views. We do not know in advance what our apps should be rendered.

To sum up, the `Union` component allows us to define what React containers can users use in their system. The component will ensure that the right component will be rendered in the right place.

I described just one single use case how `Union` could be used. But there is more you can do. For example, you can [pass data from a server](https://react-union.org/union-component-widget-descriptors#3-passing-data) or even [share common data](https://react-union.org/union-component-common-data-descriptors) across all rendered containers.

## How does _React Union_ differ from other solutions?

I don't think that there are many other solutions available. I know just about [react-habitat](https://github.com/DeloitteDigitalAPAC/react-habitat). The library is focused on isolated components that neither share context nor state.

But there are surely ways of how to achieve the same (and better):

1. "Just" change the backend technology entirely for technology that allows you prerender.
2. Turn your CMS into a data source - we call this a headless CMS.

But sometimes there is no budget to change backend technology, or you and that is where React Union shines.

## Why did you develop _React Union_?

At my work, there are half of backend programmers certified Liferay developers. They specialize in development for that platform. Liferay is the complex environment written in Java, and a big part of it is CMS. Our clients love using it, and our backend developers have both great inside and knowledge about it.

Neither clients nor backend developers will stop to use Liferay soon.

But I am JavaScript developer, and I don't care what backend technology is used. In advance, Liferay takes about 10 minutes to start. :)

I wanted to use a solution that is agnostic to the CMS platform. The React Union is the result of that.

## What next?

Dynamic rendering of components is one thing, but state management in CMS environments is the second and maybe more complex one. In Lundegaard we love Redux (yes, we are going to use it even though React hooks are on the way :)). As a result, we started to opensource the [`redux-tools`](https://github.com/lundegaard/redux-tools) - our solution to modular Redux. It is the younger brother of React Union that we use alongside.

## What does the future look like for _React Union_ and web development in general? Can you see any particular trends?

Yes, there are trends — both good and bad ones.

Among the good ones, I consider the focus on the overall performance of web applications. We can speak either about the whole philosophy of the Progressive Web Applications or about the direction the React library is heading with focus on responsible GUIs.

The next big thing is undoubtedly WebAssembly (WA). I think once WA will be well supported across browsers than there will start to sublime new remarkable ways and technologies in which we will develop with native performance.

I have to say I am not a big fan of neither TypeScript nor Flow. Those two solutions are the way how to bring the static typing into JavaScript world. But I am aware that I stay behind the smaller group of JavaScript developers with the same opinion.

But I would recommend to everyone from the other group of developers to take a look into Clojure and ClojureScript world. In there they understand (for a long time) that static typing is not the silver bullet for safe apps without bugs.

## What advice would you give to programmers getting into web development?

I would recommend them to dig into basics. It is essential to genuinely know HTML, CSS, and JavaScript before they start to add any of frameworks or libraries into their skill set.

## Who should I interview next?

- [Scott Sauyet aka CrossEye](https://github.com/CrossEye) - One of the core members of Ramda. What are the plans according to the Ramda library? :)
- [Brent Jackson aka jxnblk](https://github.com/jxnblk) - Creator of my most favorite css-in-js libraries - styled-system and rebass - I would like to know what new project is going to release.
- [Rich Hickey](https://twitter.com/richhickey) - Creator of Clojure - I am interested what would he say about TypeScript or [FantasyLand](https://github.com/fantasyland/fantasy-land).

## Any last remarks?

I want to thank all members of our small team that develop React-union project for their hard work! Namely [aizerin](https://github.com/aizerin), [jamescoq](https://github.com/jamescoq), and [wafflepie](https://github.com/wafflepie).

## Conclusion

Thanks for the interview Tomáš! I am not a WordPress developer but I can see how React Union could come in handy in that context and others.

T> [Learn more about React Union at the project site](https://react-union.org/). See also [React Union on GitHub](https://github.com/lundegaard/react-union).
