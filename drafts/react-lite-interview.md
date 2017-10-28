---
title: 'react-lite - Implementation of React optimized for small size - Interview with Jade'
date: 2017-11-06
headerImage: '(link: https://pbs.twimg.com/profile_images/917638078428200960/1actdWEa_bigger.jpg) pbs.twimg.com/profile_images…'
keywords: ['interview', 'reactjs', 'react-lite']
---

TODO: @guyingjie129

## Can you tell a bit about yourself?

<p>
    <span class="author">
        <img src="(link: https://www.gravatar.com/avatar/6fb24e2afa559b2a27d848fe38a9c820?s=200) gravatar.com/avatar/6fb24e2…" alt="Jade" class="author" width="100" height="100" />
    </span>
</p>

My Chinese name is GuYingjie(古映杰), and people call me Jade in English. I live in Shanghai and work for Ctrip as a front-end architect. I am the author of *react-lite*.

At Ctrip, we are a big fans of React. We use react and react-native in many projects. My main job is to improve the toolchain and infrastructure around React, so that our engineers can develop web app using React more productively and happily.

I like being a part of the open source community. *react-lite* is one of my open source projects, and there are also other interesting projects in my github, such as [factor-network](https://github.com/Lucifier129/factor-network), which is two machine learning algorithms impemented in less than 400 lines code of JavaScript. It works well playing flappy-bird and recognizing MNIST handwritten digit database.

## How would you describe *react-lite* to someone who has never heard of it?

*react-lite* is a subset of React - just like *zepto* to *jquery*. If your *react app* follows best practices of React, it's easy to use *react-lite* to replace React in [an easy and safe way](https://github.com/Lucifier129/react-lite/blob/master/README.md#usage). Everything should just work and reduce your JS bundle size by 100kb+.

## How does *react-lite* work?

People often ask me a question: How much code you had to drop from `React` source code to make *react-lite* so small?

In fact, *react-lite* is not a fork of `React` repository. It's a re-implementation of the same React Public API using ES2015. It ignored the old browsers (such like IE8) to keep itself cleaner and smaller. We don't need to build a complex custom event-system like React does. We simply follow the *W3C Event* which has been implemented in all modern browsers natively. It also made *React.PropType* to be noop(empty function). It didn't implement *ReactDOM.renderToString* and other React features which are not expected to run in production.

I cherry-picked about 178 unit test suite from *React* github repository (these are all about React Public API) to make sure *react-lite* can do the same thing. I had created an independent repository([react-core-unit-testing](https://github.com/Lucifier129/react-core-unit-testing) to share the unit test suite. Anyone can use it to implement their own *react-lite* or to check compatibility with official React with any other smaller React implementation. It will be great if `React` officially shares the Public API unit test suite in an independent repository.

## How does *react-lite* differ from other solutions?

Honestly speaking, *react-lite* is slower than *inferno* and bigger than *preact*. But, for now, *react-lite* may be more *compatible*. Both *inferno-compat* and *preact-compat* did not follow the same unit test suite of React Public API, and *react-lite* now has best performance in react-core-unit-testing mentioned above.

As we know, *inferno* and *preact* are not built for compat, they just have compat version. It may be hard for them if their new feature can not keep up the compatibility with React API, or the new feature of React can't be simulated by their current implementation. For *react-lite*, that is not a problem. *react-lite* wouldn't introduce its own features and can be refactored anytime if needed without breaking.

## Why did you develop *react-lite*?

In 2015/10, I saw some articles explaning how virtual-dom works. I thought I can do it better, so I created a repository named *esnext-react*, tried to implement a simple React using ES2015, and ran the [react-motion demo](http://lucifier129.github.io/react-motion-with-react-lite/index.html) successfully. I felt great when it worked. It's a very smooth animation written using the good old React API that we know of but running on *esnext-react*.

In 2015/12, I shared the experience of *esnext-react* to some people in the Shanghai office of [Strikingly](https://www.strikingly.com/). The audience, include [Dafeng](https://twitter.com/dfguo) - the CTO of Strikingly, all think that making a smaller React runtime implementation is a worthwhile thing to do. It can help people who are hesitant to choose React on mobile web due to the large script size.

Then I renamed *esnext-react* to *react-lite*, and started to improve it and bring it into real projects in Ctrip. Now, *react-lite* is heavily adopted inside the company.

## What next?

Now I am foucing on Isomorphic Web App development. I developed [relite](https://github.com/Lucifier129/relite)(a redux-like library for managing state with simpler api) for state management, [create-app](https://github.com/Lucifier129/create-app)(configuring once, rendering both client and server) for router, and integrate them with Node.js, React, Isomorphic-fetch, js-cookie, querystring and other isomorhpic library into [react-imvc](https://github.com/Lucifier129/react-imvc) which can support write once, run both in server-side and client-side.

*react-imvc* is similar to [next.js](https://github.com/zeit/next.js) that it helps people to build isomorphic/universal web app more easily. But *react-imvc* has a different idea, I call it *Next generation of Front End MVC Architecture*. It comprises of React/React-lite as the View of MVC, redux-like/relite(state + actions) as the Model of MVC, and ES2015 class as the isomorphic Controller. All the parts of MVC are isomorphic by design. Our web app can do Server-Side-Rendering in node.js(for SEO and faster initial screen load time) and do Client-Side-Rendering in brower (for fast user interaction).

Unfortunately, react-imvc documentation now is written in Chinese. I'm planning to translate it into English in the future.

## What does the future look like for *react-lite* and web development in general? Can you see any particular trends?

*react-lite* dose not support React v16.x now, because of React-Fiber is not stable enough. *reducing the scripts size* is also a plan of React Core Team. React V16.x is already much smaller than React V15.x is. Maybe it's not necessary to write an smaller runtime library of React anymore, or maybe it's impossible to implement the react-fiber-architecture with less code than React has.

So the future of *react-lite* is uncertain. It depended on the evolution of React. Anyway, *react-lite* is still a good choice for mobile site that are following the best practice of React V15.x and want to reduce the bundle size of js file.

## What advice would you give to programmers getting into web development?

Web development moves faster than you and me. No one can learn everthing. But luckily, for most of the libraries or frameworks, we can learn it in a few days.

Since there are too many things to learn, we must prioritize of our study plan. For example, between ES2015/Typescript and React/Vue/Angular, which should we learn first? In my opinion, the answer is ES2015/Typescript. The basic program language feature has higher learning priority than library/framework written with the language.

I also believe in learning by doing, learning by coding, learning by building, and learning by making. The source code of React is complex, but the original idea of React is quite simple and elegant. Implement your own React (or any other things you are learning) in MVP (Minimum viable product) way can help us understand them more deeply and clearly, even if the code we had written will never run in production.

## Who should I interview next?

In China, there are many excellent front-end developers. I recommend some of them below:

- [ZhengHaibo](https://github.com/leeluolee), author of [regularjs](https://github.com/regularjs/regular), now work for Netease.
- [HeShiJun](https://github.com/hax), a evangelist of JavaScript/ECMAScript and Web Standard in China.
- [yuanyan](https://github.com/yuanyan), author of [rax](https://github.com/alibaba/rax), now work for Alibaba.
- [linfeng](https://github.com/kener), author of [echarts](https://github.com/ecomfe/echarts), now work for Alibaba.
- [chencheng](https://github.com/sorrycc), author of [dva](https://github.com/dvajs/dva), now work for Alibaba.
- [aui](https://github.com/aui), author of [art-template](https://github.com/aui/art-template) and [artDialog](https://github.com/aui/artDialog).

## Any last remarks?

The language gap between Chinese developers and English developer will become smaller, and I am glad to see we can learn from each other more in the future.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Jade!