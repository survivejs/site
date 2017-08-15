---
title: 'WhitestormJS - Three.js Based Game Engine - Interview with Alexander Buzin'
date: 2015-12-22
headerImage: 'assets/img/whitestorm.jpg'
keywords: ['interview']
---

I remember, when a few years ago a friend asked me what JavaScript game engine to use. As a result, I set up a little gist that in turn lead to something larger, namely [jswiki](https://github.com/bebraw/jswiki), and eventually [jster.net](http://jster.net/). The [game engine listing](https://github.com/bebraw/jswiki/wiki/Game-Engines) and [game engine feature matrix](https://github.com/bebraw/jswiki/wiki/Game-engine-feature-matrix) are quite useful still.

Today, I'm interviewing Alexander Buzin, the author of a new engine known as [WhitestormJS](http://whitestormjs.xyz/). I don't understand about engines that much myself so it's nice to get some perspective to the topic.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e002d265845b7625ef396bf74763e31d?s=200" alt="Alexander Buzin" class='author' width='100' height='100' />
</span>
</p>

My name is Alexander Buzin. I am a front-end developer and a hockey player from Kiev. I am interested in WebGL technology and everything related to 3D rendering in Web, such as [Three.js](http://threejs.org/), [seen.js](http://seenjs.io/) and 3D physics engines like [Cannon.js](http://www.cannonjs.org/) or [Oimo.js](https://github.com/lo-th/Oimo.js/). I am inspired by projects created on it and my favourite one is [ROME](http://www.ro.me/).

Beyond 3D projects, I want to highlight latest cool website which impressed me: [because-recollection.com](http://because-recollection.com/).
Such sites make the internet a better place.

Before I started learning Three.js, I tried my skills in AngularJS and NodeJS. But my ideal still was jQuery, given it's so simple to use.

## How would you describe WhitestormJS to someone who has never heard of it?

As I said, I like the idea of powerful, but simple in usage libraries like jQuery. Only a few lines of code, and you have a completely new website with smooth transitions and animations. WhitestormJS relies on the same idea. You only input parameters, which make your 3D object different from others. All other options are generated automatically by default.

For example, if you forgot to input a color, WhitestormJS will display random one by default. If you forgot to insert your sphere radius - it will always be "1".

By the way, I noticed that almost every Three.js project or demo have their own resize function, so if you have 10 such projects, you need to write this simple function 10 times. Is it necessary? With WhitestormJS - no. Just put `autoresize: true` parameter to the `init()` function.

You can see all this in a small example:

```javascript
var GAME = new WHS.init({
    anaglyph: false, // Anaglyph effect.
    helper: false, // Cannon.js shape helper
    stats: "fps", // fps, ms, mb or false if not need.
    gravity: { // Physics (gravity).
        x: 0,
        y: -200,
        z: 0
    }
});

GAME.sphere = GAME.addObject("sphere",
{
    geometryOptions: {
        radius:3 // Sphere radius
    },
    mass: 10, // Mass for CANNON.JS
    onlyvis: false, // If set true - no physics for this object
    materialOptions: { // ThreeJs material options
        color: 0xffffff, // White.
        type: "basic"
    },
    pos: { // position in space
        x: 0,
        y: 100,
        z: 0
    }
});
```

The project is available through [GitHub](https://github.com/WhitestormJS/whitestorm.js). This way people can create pull requests to fix problems and improve the engine. I hope users will find it interesting.

## Why did you develop WhitestormJS?

My first projects were based on Three.js. I used it for a long time and I realized that for a beginner developer (like me at the time) it is too complex. You need to understand how to construct a 3D scene, animate it and make changes to objects all the time. It scared me initially, but then my desire made me understand all this.

## What kind of challenges have you experienced while developing it?

I had a lot of troubles while developing this engine. Three.js has a lot of subtleties that you need to know. Early on, the library was just a single .js file + index.html (which served as an example for testing). Then I organized it all with [Gulp](http://gulpjs.com/). I split my main file to 10+ smaller parts. Each of those now contain a specific function (for example, `addObject()`, `addGround()`, or `init()`).

The next big challenge for me was adding shadows to the terrain. I searched through almost the entire internet in the hope of finding an answer to the question "Why doesn't my terrain cast shadows?". I came by shaders. As a user, who has spent all his life on JavaScript, I was confused. I mean, I don't know how to debug numbers through GLSL shaders. After spending about 2 days, I still decided to try to run the shadow of trial and error and I got it.

## What next?

Each day we are making new changes. Big updates will come in the nearest future. Now we are focused on making improvements to working performance and stability. In this month you will see added skybox feature, improved shadows and fps count.
What will come exactly? - I know that we will add proper Audio support. It does not mean that now you can't perform audio. Of course you can implement it to your 3D object throught Three.js, but later it will be much easier.

P.s.: Maybe we will release an editor for people, who don't know how to code.

## What does the future look like for game engines and front-end in general? Can you see any particular trends?

Some weeks ago I contacted [Paul Lewis](https://twitter.com/aerotwist) from [Aerotwist blog](https://aerotwist.com/) and asked him a similar question. His answer was ES2015 (the latest version of JavaScript) and React.js.

As for me, I think it will be awesome, if we can play games with excellent graphics in browsers. Currently the problem is that we need to develop games separately for multiple platforms. The web solves that.

## Who should I interview next?
I can mention [Cabbibo](https://twitter.com/Cabbibo), who is my favourite web developer specializing in 3D. I like his projects.

He works with Three.js and make awesome abstract sites, which are worthy of attention.

## Conclusion

Thanks for your interview Alexander. Best of luck with your engine! If you want to study the engine, [head to GitHub](https://github.com/sasha240100/WhitestormJS) or check out the [project homepage](http://whitestormjs.xyz/) for documentation and demos.
