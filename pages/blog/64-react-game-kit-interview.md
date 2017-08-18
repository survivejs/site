---
title: 'react-game-kit - Make games with React - Interview with Ken Wheeler'
date: 2016-09-26
headerImage: 'assets/img/board.jpg'
keywords: ['interview', 'react']
---

What's more fun than making applications with React? Making games of course! I remember coding Pong in Python (harder than it sounds) and writing a text adventure or two. Games look deceptively simple but are quite difficult to code.

Today I'm interviewing [Ken Wheeler](https://twitter.com/ken_wheeler) about [react-game-kit](https://github.com/FormidableLabs/react-game-kit). You might recognize the name from projects such as [spectacle](https://github.com/FormidableLabs/spectacle), [react-music](https://github.com/FormidableLabs/react-music), or [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/4751e2e9fe7b876958d38f86a718ca91?s=200" alt="Ken Wheeler" class="author" width="100" height="100" />
</span>

My name is Ken. It means "handsome" in Gaelic, and "yes" in Hebrew.
</p>

I like America, short walks on the beach, food thats bad for you, recreational archery, and brown liquor.

I'm the Director of Open Source at Formidable, where I turn coffee into GitHub stars.

I'm a dad and husband, I used to be a rapper, and my favorite color is snow camo.

I'm a software engineer, but I look like a cop, so cops and military give me this nod all the time like I'm off duty, which puts me in a funny position where I am guilty yet flattered.

## How would you describe *react-game-kit* to someone who has never heard of it?

*react-game-kit* is a set of components that provide the basic building blocks for game development using React and React Native. It takes care of the repetitive hard stuff, so that you can focus on the hard hard stuff.

## How does *react-game-kit* work?

A central game loop is created using the `Loop` component, which is then passed down via context like `Provider` does for Redux. Next there are a set of optional components that you can use to craft your game.

`Stage` helps set game area boundaries and calculates scale ratios, `World` creates a physics world, and you can use `Body` components to add entities to that world.

`Tilemap` lets you generate levels from a tile atlas, and `Sprite` facilitates the creation of multi-state sprite animations using a spritesheet.

All of these components use the context based loop to keep everything in sync.

## How does *react-game-kit* differ from other solutions?

I'm not sure there are other solutions in the React world? There are other ways to make games, things like Phaser and Unity, but they are super fully featured, whereas react-game-kit is literally bare bones.

## Why did you develop *react-game-kit*?

My 9 year old brother made some pixel art using Qixels, this toy where you have little blocks and you can spray water on them. He approached me and pitched a game and asked if I could build it. I was like duh bro, of course I can.

So my first shot was with SpriteKit on iOS. I've been doing a lot of React Native so I decided I wanted to try to bridge SpriteKit. Then I realized, this isn't going to work for Android.

So I decided to try and build the game with just React Native. It actually performed better than SpriteKit on the simulator.

After this I pitched a talk about making games with React, and when I started creating the material and the game demo, I thought, why am I doing this again, I should just build a helper lib for the repetitive stuff. And then I did.

## What next?

Who knows. Probably an e-learning tool. That'd be chill.

I like the idea of continuing to push the limits of using React, but at the same time I should probably build some stuff that will get everyday use as well. I'd like to do some more Node OSS. And I really want to build something cool with Reason.

## What does the future look like for *react-game-kit* and web development in general? Can you see any particular trends?

Well, for react-game-kit, I'd like to switch over to a GL based solution once the libs are ready for React/React Native. Then we can see some real perf.

Web dev in general? I think WebAssembly is a gonna be pretty huge, WebWorker stuff, VR, and some cool stuff with some of the APIs browsers are providing like WebAudio.

I would definitely check out some of the stuff the squad at ExponentJS is doing. I see a future where we have an app browser, where you get the responsiveness and power of a native app, with the urls/discovery/etc of the web.

## What advice would you give to programmers getting into web development?

Are they already programmers? If so, I'd say get a stress ball.

If they aren't, I'd recommend learning programming fundamentals. And then language fundamentals. Don't even think about using an abstraction until you understand how objects and arrays work.

If you know the fundamentals, its SO much easier to hop into new libraries/frameworks. If you start with a framework and then never learn fundamentals, learning the next thing will be hard all over again. If you are fundamentally sound, you see exactly what the new stuff is doing and then you just need to read the API docs and get acquainted.

Another thing I might say is slow down and read the manual.

Type things out, don't copy and paste. There is a lot of "webpack is hard" type of sentiment out there, and I don't buy it. It's more like webpack configs get copy and pasted and we don't know how to fix it.

If you slow down and write a config out by hand while perusing the API, webpack really isn't that bad. It's a lot easier to add stuff a la carte than to start with a huge prebuilt config and try to figure out what part doesn't work for your app.

## Who should I interview next?

Hmmm... Good question. I'd recommend:

* Sunil Pai - He builds really cool stuff and like myself, loves to make a mockery of JSX. Also wrote [glamor](https://github.com/threepointone/glamor), which is pretty dope.
* Nikhilesh Sigtapu - This dude is the smartest guy I know. He builds the kind of stuff I would build if I went to college. He also makes magic happen at [ExponentJS](https://getexponent.com/).
* Leland Richardson - Dude is a beast. Brought us hit records such as [react-native-maps](https://github.com/airbnb/react-native-maps) and [Enzyme](https://github.com/airbnb/enzyme), and has this chill new project [redux-entity](https://github.com/lelandrichardson/redux-entity).
* Safia Abdalla - She is the master of all things data, and works on [Nteract](https://github.com/nteract/nteract), which is a really cool interactive notebook built in React on Electron.

## Conclusion

Thanks for the interview Ken! Check out [react-game-kit](https://github.com/FormidableLabs/react-game-kit) on GitHub to learn more.
