---
title: 'Next.js - Framework for server-rendered React apps - Interview with Arunoda Susiripala'
date: 2017-08-11
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

I started working with JavaScript while I was studying at university. After this I had my first introduction to open source - I got involved with Joomla and Status.net as a part of Google Summer of Code.

My work started to turn towards Meteor-related projects next and I founded kadira.io, a performance monitoring solution for Meteor. At Kadira, I started React Storybook with my colleagues, but eventually we needed to shut down Kadira.

In late 2016, I discovered Next.js and started contributing to it. After Kadira's formal shutdown, I joined ZEIT to maintain Next.js and take it further.

## How would you describe *Next.js* to someone who has never heard of it?

I think everyone is familiar with the concept of JavaScript fatigue. Basically, creating a web app with JavaScript is often hard with all of the packages and options that we have today. React, webpack, Redux, React Router and many more libraries and tools are often used and require effort to learn.

In comparison, writing a simple PHP app can be as easy as just creating some files and deploying them.

With Next.js we enable developers to build JavaScript apps with a simpler workflow like in the PHP example. Just create some files that export React components and deploy your app. No need to set up webpack or do any special routing or state management.

Next.js also does server side rendering by default, among many other performance optimizations.

## How does *Next.js* work?

Let me show you with an example.

We first create our project and initialize an npm package.json:

```sh
mkdir hello-next
cd hello-next
npm init -y
```

Then we install *Next.js* and the React dependencies and create a `pages` directory:

```sh
npm install --save next react react-dom
mkdir pages
```

In the pages directory, we create a file at `pages/index.js` with the following content:

```jsx
import Link from 'next/link'

export default () => (
  <div>
    <p>Welcome, this is the home page.</p>
    <Link href="/about"><a>About Page</a></Link>
  </div>
)
```

We also make a file called `pages/about.js` containing this code:

```js
export default () => (
  <div>This is the about page.</div>
)
```

We add a script for the development server to the `package.json`:

```json
{
  "scripts": {
    "dev": "next"
  }
}
```

Finally we run that script to start the development server:

```sh
npm run dev
```

The app will be started on https://localhost:3000. Any changes to pages and content will be updated instantly in the browser by webpack's hot module replacement (HMR).

This is just the beginning. You can do a lot with *Next.js*. You can even customize the base webpack and Babel configuration too.
I suggest visiting the [Next.js repo](https://github.com/zeit/next.js) for more info.

## How does *Next.js* differ from the other solutions?

Here I'll focus on comparing *Next.js* with two other solutions for building React apps.

**1. Custom webpack and Babel setup**

Here you need to maintain your own configurations and update them for new versions of your dependencies. If you manage multiple apps, upgrading the dependencies and updating all configurations everywhere will be a real problem.

If you use Next.js, you don't need to worry about these configurations. It comes along with sane defaults but also allows you to customize as needed.

**2. Create React App (CRA)**

Create React App is Facebook's official solution for building React apps without build configuration. It works well for what it does. It doesn't, however, deal with routing, so you need to deal with this on your own. Furthermore, you can't customize as much of the webpack and Babel configurations. Server side rendering is also very difficult to do.

For some apps, Create React App is a good solution.

But with Next.js, you'll get server side rendering for free and no need to worry about routing. The built-in routing system is file system-based and custom routes can be set up for dynamic pages.

Since the routing is built into the framework, we can do very cool things like:

* Server side rendering by default
* Automatic code splitting
* Simple data fetching solution for pages

Basically, you can build a decent web app without worrying about configuration, routing and state management.

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
