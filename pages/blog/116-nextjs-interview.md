---
title: "Next.js - Framework for server-rendered React apps - Interview with Arunoda Susiripala"
date: 2017-08-15
headerImage: "assets/img/next.jpg"
keywords: ["interview", "react", "webpack"]
editors: ["bebraw", "karlhorky"]
---

Building universal web applications combining server side rendering with front-end is popular these days. The approach is not without its problems, though. Now you have the extra challenge of managing code so that it works on the both sides. Due to the differences between them, you will run into a series of problems.

[next.js](https://github.com/zeit/next.js/) was developed to handle these concerns for React. To understand the approach, I'm interviewing [Arunoda Susiripala](https://twitter.com/arunoda) this time.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/ab13df38843556b57f7d2f6fe78003cf?s=200" alt="Arunoda Susiripala" class="author" width="100" height="100" />
</span>

I started working with JavaScript while I was studying at university. After this I had my first introduction to open source - I got involved with Joomla and Status.net as a part of Google Summer of Code.

</p>

My work started to turn towards Meteor-related projects next, and I founded kadira.io, a performance monitoring solution for Meteor. At Kadira, I started React Storybook with my colleagues, but eventually, we needed to shut down Kadira.

In late 2016, I discovered Next.js and started contributing to it. After Kadira's shutdown, I joined ZEIT to maintain Next.js and take it further.

## How would you describe _Next.js_ to someone who has never heard of it?

I think everyone is familiar with the concept of JavaScript fatigue. Creating a web app with JavaScript is often hard with all of the packages and options that we have today. React, webpack, Redux, React Router and many more libraries and tools are often used and require effort to learn.

In comparison, writing a simple PHP app can be as easy as just creating some files and deploying them.

With Next.js we enable developers to build JavaScript web apps with more straightforward workflow like in the PHP example. Just create some files that export React components and deploy your app. No need to set up webpack or do any special routing or state management.

Next.js also does server side rendering by default, among many other performance optimizations.

## How does _Next.js_ work?

Let me show you with an example.

We first create our project and initialize an npm package.json:

```bash
mkdir hello-next
cd hello-next
npm init -y
```

Then we install _Next.js_ and the React dependencies and create a `pages` directory:

```bash
npm install --save next react react-dom
mkdir pages
```

In the pages directory, we create a file at `pages/index.js` with the following content:

```jsx
import Link from "next/link";

export default () => (
  <div>
    <p>Welcome, this is the home page.</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);
```

We also make a file called `pages/about.js` containing this code:

```javascript
export default () => <div>This is the about page.</div>;
```

We add a script for the development server to the `package.json`:

```json
{
  "scripts": {
    "dev": "next"
  }
}
```

Finally, we run that script to start the development server:

```bash
npm run dev
```

The app will be started on `https://localhost:3000`. Any changes to pages and content will be updated instantly in the browser by webpack's Hot Module Replacement (HMR).

Above is just the beginning. You can do a lot with _Next.js_. You can even customize the base webpack and Babel configuration too.

T> I suggest visiting the [Next.js repo](https://github.com/zeit/next.js) for more info.

## How does _Next.js_ differ from other solutions?

Here I'll focus on comparing _Next.js_ with two other solutions for building React apps.

**1. Custom webpack and Babel setup**

Here you need to maintain your configurations and update them for new versions of your dependencies. If you manage multiple apps, upgrading the dependencies and updating all configurations everywhere will be a real problem.

If you use Next.js, you don't need to worry about these configurations. It comes along with sane defaults but also allows you to customize as needed.

**2. Create React App (CRA)**

Create React App is Facebook's official solution for building React apps without build configuration. It works well for what it does. It doesn't, however, deal with routing, so you need to handle this on your own. Furthermore, you can't customize as much of the webpack and Babel configurations. Server side rendering is also complicated to do.

For some apps, Create React App is a good solution.

With Next.js, you'll get server side rendering for free and no need to worry about routing. The built-in routing system is file system-based, and custom routes can be set up for dynamic pages.

Since the routing is built into the framework, we can do very cool things like:

- Server side rendering by default
- Automatic code splitting
- Simple data fetching solution for pages

You can build a decent web app without worrying about configuration, routing and state management.

## Why did you develop _Next.js_?

I didn't work at ZEIT at the time it was built - it was primarily developed by [@nkzawa](https://twitter.com/nkzawa) to develop [ZEIT's web app](https://zeit.co). Because it was a success, ZEIT released it as an open source project.

Since then, features are developed when they are needed to continue building https://zeit.co, and the community helps by fixing bugs and requesting and developing new features.

## What next?

We try to keep _Next.js_ as simple and lean as possible. We avoid implementing too many features. Instead, we aim to build a robust infrastructure and encourage reuse of existing libraries and frameworks on top of Next.js.

We just released _Next.js_ 3.0 with dynamic imports and static HTML exporting support. The next topics we will focus on are improving overall stability and reducing the dev and production build time of the app.

## What does the future look like for _Next.js_ and web development in general? Can you see any particular trends?

I think we'll see more rich web apps in the future thanks to recent performance improvements in browsers. Web Assembly will have an enormous impact on the industry. Solid tooling will allow development of web apps available for both desktops and servers. Effects like these will lead to web apps to completely obsoleting desktop apps.

Our goal with Next.js will always be to allow developers to build fast web apps without too much hassle with different APIs and configurations.

## What advice would you give to programmers getting into web development?

First of all, learn the basics well. For example, with front-end web development, learn the ins and outs of HTML, CSS, and JavaScript. Then focus on a couple of frameworks you like and develop a career on top of them.

The industry is changing very rapidly, so always look for what's new and stay updated.

Don't switch frameworks because there's something new and cool. Only do that if your current framework doesn't work well or if the new one increases your job opportunities.

## Who should I interview next?

JavaScript has a huge ecosystem. I don't have a specific person to mention. The GitHub trending page may have some interesting people to interview.

## Any last remarks?

As a project maintainer on GitHub, I appreciate it when developers search the web and the existing issues before creating new issues. If it's a new issue, always provide a way to reproduce the issue (often better as a GitHub repo).

That saves us a ton of time so that we can fix legitimate problems and still add new features.

## Conclusion

Thanks for the interview Arunoda! I think it's great to see projects like Next.js pushing the envelope and finding better ways to develop universal web applications.

Check out [next.js GitHub](https://github.com/zeit/next.js/) and [Learn Next.js](https://learnnextjs.com/) to understand the topic better.
