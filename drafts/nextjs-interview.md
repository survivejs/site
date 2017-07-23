---
title: 'Next.js - Framework for server-rendered React apps - Interview with Arunoda Susiripala'
date: 2017-xx-xx
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/ab13df38843556b57f7d2f6fe78003cf?s=200" alt="Arunoda Susiripala" class="author" width="100" height="100" />
</span>

</p>

I started working with JavaScript when I was stydying at the university. Then I involved with Joomla and Status.net as a part of Google Summer of Code. That's my introduction to Open Source. Then I started working with Meteor related projects and founded kadira.io. (It was a performance monitoring solution for Meteor).

At that time, I started React Storybook with my colleagues at Kadira.
Then we had to shutdown Kadira. 

In late 2016, I discovered Next.js and started to contributing to it. After we formally shutdown Kadira, I joined ZEIT to maintain Next.js and take it further.

## How would you describe *Next.js* to someone who has never heard of it?

I think everyone familiar with the concept of JavaScripr fatigue. Basically, creating a web app with JavaScript is hard. You need to learn about React, Webpack, Redux, React Router and the list goes on.

But creating a simple PHP app is pretty simple. You just create some files and deploy them.

With Next.js we let developers to build apps just like they might do that with PHP. Just create some pages by exporting a React component and deploy your app. No need to setup Webpack or do any special routing and state management. 

It support Server Side Rendering by default. It's also highly optimized for modern day web performance.

## How does *Next.js* work?

Let me show you that with an example.

First we need to create a npm project with:

```
mkdir hello-next
cd hello-next
npm init -y
```

Then we install Next.js and react

```
npm install --save next react react-dom
```

Then we create a directory called `pages` and add the following content to a file called "pages/index.js"

```jsx
import Link from 'next/link'

export default () => (
  <div>
    <p>Welcome, This is the Home page</p>
    <Link href="/about"><a>About Page</a></Link>
  </div>
)
```

After that add following content into a file called "pages/about.js"

```js
export default () => (
  <div>This is the about page.</div>
)
```

Now add the folling NPM script to the `package.json`.

```
{
  "scripts": {
    "dev": "next"
  }
}
```

Finally run `npm run dev` and you can see the app started on 'https://localhost:3000'. 
You can edit pages and the content will be updated instantly using webpack HMR.

This is just the beginning. You can do a lot with Next.js. You can even customize the base Webpack and Babel configuration too.
I suggest to visit [Next.js repo](https://github.com/zeit/next.js) for more info.

## How does *Next.js* differ from the other solutions?

Here I'll primarly focus on other solution for building React apps. I'd like to compare with two solutions.

**1. Custom Webpack, Babel setup**

Here you need to maintain your own configurations. And you need to update them as underline projects changes. If you manage multiple apps, this will be a real problem.

If you use Next.js you don't need to worry about these configurations. We comes with decent deaults and allow you to customize as needed.

**2. Create React App (CRA)**

CRA is the React's official solution for above. It's works well. But still, you need to deal with Routing on your own. You can't customize the configurations. 
And it's very difficult to do server side rendering.

For some apps, CRA is a good solution.

But if you go with Next.js, you'll get server side rendering and no need to worry about Routing.
We've a built in file system based routing system and a custom routing setup for dynamic pages.
Since the routing it built into the framework, we can do very cool things like:

* Server Side rendering by default.
* Automatic code splitting
* A simple data fetching solution for pages.

Basically, you can build a decent web app without worrying about Configurations, routing and state management.

## Why did you develop *Next.js*?

It was built to develop ZEIT's webapp https://zeit.co. I didn't work at ZEIT at that time. It was primarly built by [@nkzawa](https://twitter.com/nkzawa?lang=en).
Since it was a success, ZEIT released it as an open source project.

After that, we develop features as they needed to continue to build https://zeit.co and the community helps us to fix bugs and requesting and developing new features.

## What next?

We try to make Next.js as simple and lean as possible. We don't try to implement many features.
Instead we want to build a very solid infrasture and encourage to reuse existing libraries and frameworks on top of Next.js.

We are going to ship Next.js 3.0 with dynamic import and static HTML exporting support pretty soon.
After that, our focus is on improving overall stability and reduce the dev and production build time of the app.

## What does the future look like for *Next.js* and web development in general? Can you see any particular trends?

I think we'll see more rich web apps in the future thanks to recent performance improvements on browsers. Web Assembly will be something huge. We'll be able to develop web apps using solid tools available for desktop and server side apps.
Basically a webapps will completely obsolete Desktop apps.

With Next.js we'll always try to allow developers to build fast web apps without worrying too much about different APIs and configurations.

## What advice would you give to programmers getting into web development?

First learn the basics well. For an example for the front-end web development, learn HTML, CSS and JavaScript correctly.
Then focus on couple of frameworks you'll like and develop a carrier on top of them.

This space is changing so rapidly, so always look for what's new and keep in touch with them.

But don't try to change frameworks because they are new and cool. Only do that, if your current framework doesn't work well or you can find more jobs with the new framework.

## Who should I interview next?

I think JavaScript is huge area. I don't have specific person to mention.
May be you can look at the GitHub trending page.

## Any last remarks?

As a project maintainer on GitHub, I'd love people search internet and the existing issues before creating new issues.
If that's a new issue, always provide a way to reproduce the issue. (Better if that's a GitHub repo.)

That'll save us a ton of time and we can really fix legitimate issues and add new features.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

* Learn Next.js - https://learnnextjs.com/

Thanks for the interview Arunoda!
