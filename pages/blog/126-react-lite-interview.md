---
title: "react-lite - Implementation of React optimized for small size - Interview with Jade"
date: 2017-11-06
headerImage: "assets/img/light.jpg"
keywords: ["interview", "react", "react-lite"]
---

Even though React API is small, the implementation is quite sizable due to all the work it does behind the façade. For this reason, people have developed solutions that implement the API with different trade-offs.

_react-lite_ by [Jade](https://twitter.com/guyingjie129) is one of these solutions.

T> To learn about a related solution, [read the Inferno interview](/blog/inferno-interview/).

## Can you tell a bit about yourself?

<p>
  ![Jade|100|100|author](assets/img/interviews/jade.jpg)

My Chinese name is GuYingjie (古映杰), and people call me Jade in English. I live in Shanghai and work for Ctrip as a front-end architect. I am the author of _react-lite_.

</p>

At Ctrip, we are big fans of React. We use React and React Native in many projects. My primary job is to improve the toolchain and infrastructure around React so that our engineers can develop a web app using React more productively and happily.

I like being a part of the open source community. _react-lite_ is one of my open source projects, and there are also other exciting projects in my GitHub, such as [factor-network](https://github.com/Lucifier129/factor-network), which is two machine learning algorithms implemented in less than 400 lines code of JavaScript. It works well-playing flappy-bird and recognizing MNIST handwritten digit database.

## How would you describe _react-lite_ to someone who has never heard of it?

_react-lite_ is a subset of React - just like _zepto_ to _jquery_. If your _react app_ follows best practices of React, it's easy to use _react-lite_ to replace React in [a comfortable and safe way](https://github.com/Lucifier129/react-lite/blob/master/README.md#usage). Everything should just work and reduce your JS bundle size by 100 kB+.

## How does _react-lite_ work?

People often ask me a question: How much code you had to drop from React source code to make _react-lite_ so small?

In fact, _react-lite_ is not a fork of React repository. It's a re-implementation of the same React Public API using ES2015. It ignored the old browsers (such like IE8) to keep itself cleaner and smaller. We don't need to build a complex custom event-system as React does.

We simply follow the _W3C Event_ which has been implemented in all modern browsers natively. It also made _React.PropType_ to be noop (empty function). It doesn't implement _ReactDOM.renderToString_ and other React features which are not expected to run in production.

I cherry-picked about 178 unit test suite from React GitHub repository (these are all about React Public API) to make sure _react-lite_ can do the same thing. I created an independent repository([react-core-unit-testing](https://github.com/Lucifier129/react-core-unit-testing) to share the unit test suite.

Anyone can use the test suite to implement their own _react-lite_ or to check compatibility with official React. It will be great if React officially shares the Public API unit test suite in an independent repository one day.

## How does _react-lite_ differ from other solutions?

Honestly speaking, _react-lite_ is slower than _inferno_ and bigger than _preact_. But, for now, _react-lite_ may be more _compatible_. Both _inferno-compat_ and _preact-compat_ did not follow the same unit test suite of React Public API, and _react-lite_ now has the best performance in react-core-unit-testing mentioned above.

As we know, _inferno_ and _preact_ are not built for compat, they just have a compat version. It may be hard for them if their custom features cannot keep up the compatibility with React API, or their current implementation can't simulate the new features of React. For _react-lite_, that is not a problem as it doesn't contain any custom features and therefore can be refactored anytime if needed without breaking.

## Why did you develop _react-lite_?

In 2015/10, I saw some articles explaining how virtual-dom works. I thought I could do it better, so I created a repository named _esnext-react_, tried to implement a simple React using ES2015, and ran the [react-motion demo](http://lucifier129.github.io/react-motion-with-react-lite/index.html) successfully. I felt great when it worked. It's a very smooth animation written using the good old React API that we know of but running on _esnext-react_.

In 2015/12, I shared the experience of _esnext-react_ to some people in the Shanghai office of [Strikingly](https://www.strikingly.com/). The audience, include [Dafeng](https://twitter.com/dfguo) - the CTO of Strikingly, all think that making a smaller React runtime implementation is a worthwhile thing to do. It can help people who are hesitant to choose React on the mobile web due to the large script size.

Then I renamed _esnext-react_ to _react-lite_, and started to improve it and bring it into real projects in Ctrip. Now, _react-lite_ is heavily adopted inside the company.

## What next?

Now I am focusing on Isomorphic Web App development. As a result, I have developed the following solutions:

- [relite](https://github.com/Lucifier129/relite) is a Redux-like library for managing state with a more straightforward API) for state management.
- [create-app](https://github.com/Lucifier129/create-app) is meant to be configured once. It renders both client and server for a router and allows integrating them with Node.js, React, Isomorphic-fetch, js-cookie, querystring and other isomorphic libraries into react-imvc.

[react-imvc](https://github.com/Lucifier129/react-imvc) is similar to [next.js](https://github.com/zeit/next.js) as it helps people to build isomorphic/universal web app more easily. But _react-imvc_ has a different idea, which I call _Next generation of Front End MVC Architecture_.

The architecture comprises of React/React-lite as the View of MVC, redux-like/relite (state + actions) as the Model of MVC, and ES2015 class as the isomorphic Controller. All the parts of MVC are isomorphic by design. Our web app can do Server-Side-Rendering in Node.js (for SEO and faster initial screen load time) and do Client-Side-Rendering in the browser (for fast user interaction).

Unfortunately, react-imvc documentation is written only in Chinese. I'm planning to translate it into English in the future.

## What does the future look like for _react-lite_ and web development in general? Can you see any particular trends?

_react-lite_ does not support React 16 yet because React Fiber is not stable enough. _reducing the scripts size_ is also a plan of React Core Team. React 16 is already much smaller than React 15 is. Maybe it's not necessary to write a smaller runtime library of React anymore, or perhaps it's impossible to implement the react-fiber-architecture with less code than React has.

So the future of _react-lite_ is uncertain. It depended on the evolution of React. Anyway, _react-lite_ is still an excellent choice for a mobile site that is following the best practices of React 15 and wants to reduce the bundle size of the js file.

## What advice would you give to programmers getting into web development?

Web development moves faster than you and me. No one can learn everything. But luckily, for most of the libraries or frameworks, we can learn it in a few days.

Since there are too many things to learn, we must prioritize of our learning. For example, between ES2015/TypeScript and React/Vue/Angular, which to learn first? In my opinion, the answer is ES2015/TypeScript. The essential program language features have higher learning priority than libraries/frameworks written using the language.

I also believe in learning by doing, learning by coding, learning by building, and learning by making. The source code of React is complicated, but the original idea of React is quite simple and elegant. Implementing your own React (or any other things you are learning) in an MVP (Minimum Viable Product) way can help us understand them more deeply and clearly, even if the code we had written will never run in production.

## Who should I interview next?

In China, there are many excellent front-end developers. I recommend some of them below:

- [ZhengHaibo](https://github.com/leeluolee), author of [regularjs](https://github.com/regularjs/regular), now works for Netease.
- [HeShiJun](https://github.com/hax), a evangelist of JavaScript/ECMAScript and Web Standard in China.
- [yuanyan](https://github.com/yuanyan), author of [rax](https://github.com/alibaba/rax), now works for Alibaba.
- [linfeng](https://github.com/kener), author of [echarts](https://github.com/ecomfe/echarts), now works for Alibaba.
- [chencheng](https://github.com/sorrycc), author of [dva](https://github.com/dvajs/dva), now works for Alibaba.
- [aui](https://github.com/aui), author of [art-template](https://github.com/aui/art-template) and [artDialog](https://github.com/aui/artDialog).

## Any last remarks?

The language gap between Chinese developers and English developer will become smaller, and I am glad to see we can learn from each other more in the future.

## Conclusion

Thanks for the interview Jade! It was great that you dared to develop _react-lite_ as a light replacement for React. We'll see how it goes with React 16.

You can [learn more about react-lite at GitHub](https://github.com/Lucifier129/react-lite).
