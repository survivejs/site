---
title: 'Cerebral - Expressing Application Flow with Signals - Interview with Christian Alfoni'
date: 2015-10-05
headerImage: 'assets/img/cerebral.jpg'
keywords: ['interview', 'react', 'state-management']
---

I ran into [Christian Alfoni](http://www.christianalfoni.com/) through his original blog early this year (2015). He had written a nice post about Webpack. That led me to provide a several suggestions and I realized we might want to combine some of our knowledge in the form of a [React/Webpack cookbook](https://christianalfoni.github.io/react-webpack-cookbook/). Eventually the development led to this book so I suppose you can blame Christian for that.

While I've been plugging away with the book, Christian has been busy developing cool technology. This includes [EmptyBox](https://github.com/christianalfoni/EmptyBox), a static site generator, [formsy-react](https://github.com/christianalfoni/formsy-react), a form input builder and validator for React, and of course [Cerebral](https://cerebraljs.com/), the primary topic of our interview. You could say it puts some brains to React and Angular development. We'll also discuss [addressbar](https://github.com/christianalfoni/addressbar), a routing solution with a twist.

## How did you discover Webpack and React? Can you provide a bit of background?

<p>
  ![Christian Alfoni|100|100|author](assets/img/interviews/christian.jpg)

  I had saved up some money and chose to quit my job the summer of last year (2014). I wanted to spend 6 months on my own researching web technologies and play around with projects. I feel kinda lucky that way, as obsessed I am with JavaScript and building things I now got the chance to level up. At my previous employer I left a Backbone app with a Grunt workflow. Before that it was all vanilla JavaScript… crazy, but learned a lot!
</p>

So I suppose my timing was good. I started my expedition by diving into Angular, but now both React and Flux started to get some solid ground. Not being too opinionated by Angular I instantly saw the benefits of the “one way flow” of Flux. Now I had a strong concept of storing any kind of state, it being from the server or produced on the client. This was a huge issue at my previous employer, sharing client side state between views and keeping it in sync.

At the same time, I was exploring Gulp and saw this video where Pete Hunt introduced Webpack. As I had time on my hands, I decided to make an overview of different build tools and write an article on it. It got some attention and the feedback gave me the confidence to share more knowledge. Other developers were actually interested in what I had to say. It was a big eye opener!

When comparing the build tools I realized that Webpack was awesome, but had one big issue. It was hard to understand and configure. With my new earned confidence in sharing knowledge I wrote a new article. This one got even more attention, also by you Juho. It is amazing to see all the work you have done after that little comment. You have done fantastic work!

Anyways, around this time I got a job offer and since I soon needed income I grabbed the opportunity. My employer wanted to build a React framework for their huge application portfolio. I suggested we use Webpack to handle all the packaging, use ES6 etc. It has been a great success and that led to the last article on [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup).

I often get questions about combining Webpack with other build tools like Grunt or Gulp. I have never been in a situation where that is necessary. Webpack is just a brilliant piece of engineering and it makes my day so much easier. Other projects like [JSPM](http://jspm.io/) are interesting though. We are moving towards HTTP2 and bundling files does not fit in with that technology. It will be interesting to see how this pans out! [More info](https://mattwilcox.net/web-development/http2-for-front-end-web-developers).

## Why did you develop Cerebral? How would you describe it to someone who has never heard of it? What next?

Even though Flux made a lot of sense to me as a concept, the implementation details did not. In my opinion it is a bit verbose and many stores gave me the same problems that Flux fixed in my view layer. Like circular dependencies and just understanding the flow of state changes.

Then I found [Baobab](https://github.com/Yomguithereal/baobab), a single state tree. It fixed all the issues I had with the initial Flux implementation and kept the concept of “one way flow”. All my state was now in one place. No dispatcher and no splitting state into different “containers”. I wrote [an article on this too](http://www.christianalfoni.com/articles/2015_02_06_Plant-a-Baobab-tree-in-your-flux-application).

Now I was actually pretty happy about developing applications. With React I got a great concept for composing my view layer. With Baobab I got a great concept for storing all my state in a single entity. But there was still a problem… the stuff that happens "in between". The layer that actually produces the state.

As this was bugging me I got some “a-ha” moments. One "a-ha" was a video on “turning the database inside out” and talking to a backend colleague about it. I also got an "a-ha" watching a clip on [Elm](http://elm-lang.org/) with its time travel debugging. Most importantly though, I got my head around why immutability is so great. One day everything kinda merged into one big “A-HA” moment.

No matter what you call your architecture it has three main layers. A layer to produce UI and get user input, a layer to handle this input and produce state and a layer to store the state. I wanted to make these three layers as clear and simple as possible. So I thought a lot about what this state changing layer looks like today. How do we actually express handling these inputs from the view layer and update our state?

What I realized is that we often do this with a single function. We get some user input and call a function that does one or more state updates. This is fine if you just want to increase/decrease a counter. It is not so nice if you want to handle more than one HTTP response and do other conditionals.

It is difficult to understand the flow of an application reading implementation details. So I wanted to express the state changes of my app without having to dive into implementation details. I also wanted to be able to analyze this flow to create developer tools. Reading your [interview with Dan Abramov](./redux-interview) I can totally relate to how Redux got started. With Cerebral it is the signals the makes this possible.

Signals is a way to express state changes in your application using pure functions. These pure functions, called actions, are composed into a signal. This makes a signal declarative. It is almost like reading a sentence and it can be complex without being hard to read and reason about. But it is also functional as these actions are just functions. So for example factories is an important part of expressing your state flow.

As signals are arrays of actions you can also use the new spread operator. This allows you to compose action chains together with ease. So a signal never calls or depends on other signals, you just reuse actions. “Composition over inheritance”.

So Cerebral is this layer between your state storing and UI. It handles the complex part of your application, state changing flow. It is a single powerful entity representing the layer between state and ui, as displayed here:

![Cerebral is between the state and the UI|425|510|center-image](assets/img/cerebral_state_ui.png)

Running the debugger next to the UI gives you insight into all these three layers. The UI, the state changing flow and the current state of the application. It is pretty cool!
About the future of Cerebral. I have been working on a project for a year now.

When the Cerebral idea came up, I got a breakthrough. I decided to apply for some funding and what do you know, I got it! From October 1st I will spend most of my time on this project and Cerebral. For Cerebral this means cleaning up any bugs/API and make it production ready.

## Can you describe what [addressbar](https://github.com/christianalfoni/addressbar) is about? Given there are so many routers already, why to develop yet another one?

So routers have two main concepts. Listen to url changes and act upon url changes. Different routers has their own implementation of how they listen to url changes. They also have different and opinionated ways of acting upon those changes. Some routers just triggers a function related to a url change, like [Page JS](https://visionmedia.github.io/page.js/). Most of them goes way beyond this though. Often routers dive into the view layer of your application and decides what views to display.

As applications are complex you often want to load some data before doing the actual change in the view. Your router now fetches data for you to achieve this. But this data is something you want to store so now your router also needs a relationship with your state store. Some of them also do transitions in the UI. In my opinion this increases complexity as you already have concepts for this. View updates, ajax requests, transitions etc. are things you already do in the general state changing flow of your app.

Inspired by React I got this idea about the addressbar not being this magical URL thing. Just a plain input you could listen to and change the value of. If that was the case I think a lot of developers would have a much lower threshold to experiment with urls. Create their own custom routing logic. Something that makes sense for the specific application.

As a result I built a project called [addressbar](https://github.com/christianalfoni/addressbar). It just exposes the addressbar as an input you can listen to. You can also prevent default behaviour on it and change the value of it. Now you can focus on the important part, creating the routing logic.

So one way of doing routing is to map the url to a url definition which in turn triggers a function. With help from a couple of guys on the Cerebral gitter channel we created the project [url-mapper](https://github.com/christianalfoni/url-mapper). Combine “addressbar” with “url-mapper” and you have yourself a typical router. Much like the Page JS approach. But I think there are many other approaches to handling URL changes.

An example of this is the Cerebral Router. It uses both “addressbar” and “url-mapper” to bind URLs to signals. This means that you can trigger signals in your app and the bound url will update in the addressbar. If you trigger the url from a hyperlink or in the addressbar that will result in the same behaviour. So it works both ways.

You do not have to do a typical route change to update the url, it is just a side-effect of running a signal. This gives you great freedom in developing your application. You just think about these signals that defines the state changing flow of your app. You can actually bring in URLs into your app later if you wanted to. This might not make complete sense just reading about it, but I have a [video](https://www.youtube.com/watch?v=PZjXPziD9Cw).

So to summarize. I think it would benefit us to think about routing differently. When I read discussions on routing they often tend to be “How can we make the router change the views in the app?”. I might be a bit controversial, but I think that is the wrong approach.

Let's say you have an “isLoading” state.  You use that state in your views to toggle a “loading-indication”. Why can not the url “/messages” set a state called “currentPage=’messages’”? You would then use the exact same approach to render the correct page. It is just less complex in my opinion because now a url change is a state change like any other. No special logic and you can go about it however you want.

I am going a bit off trail here! What I want to emphasize here is that addressbar lowers the threshold for developers. The threshold to explore urls in new ways. Creating new experiences and evolve urls to mean something more. Not just “what view to display”, but for example “what signal to trigger” like the Cerebral-Router.

## At the moment a lot of architecture related innovation seems to happen. What do you think of alternative approaches such as [MobX](https://mobxjs.github.io/mobx/) or [Redux](http://redux.js.org/)?

So I think a lot of innovation lately has been improving stores in Flux. It can be a bit difficult to reason about them. Projects like MobX and Redux do exactly this. They make it easier to reason about how to store state. It is amazing to see how much attention Redux has gotten. The community is enthusiastic and contributes a lot with their own ideas. Kudos to Dan for inspiring so many developers and handling it so well!

Personally I have not dived into MobX and Redux. For me it was Baobab that made the difference, which had an earlier release. It is a single immutable state tree storing all the state of your application.

So both Redux and MobX make Flux simpler. That said, I think there are still challenges to tackle. I am going to compare these two projects to Cerebral, but only to highlight what Cerebral does. I am not saying that any of them are bad.

Both the solutions mentioned here hides state from the other state entities. It being reducers or stores. Take note that Redux does indeed produce a single state tree by combining its reducers. But inside a reducer, you do not have access to the whole tree as far as I know.

So many entities to store state is in my experience a challenge. Large applications often need to know about state in other stores/reducers when producing new state. This is often related to relational data, like looking up state by id. I do not think an approach where you isolate different parts of your state is the way to go.

You risk creating relationships which can be hard to reason about and even create. If you just have one entity, there is no relationship, which makes it easier to reason about and scale your app. This is what I like about [Baobab](https://github.com/Yomguithereal/baobab). It is impossible to go wrong in how you structure your state.

But Baobab does not have any concepts for producing state. In Redux you produce state in the reducer itself or in combination with an async action creator. MobX does this inside the stores. What these two have in common, like many others, is that producing a state change is expressed with a single function. You have to read the implementation details of this function to understand it. This is easy when you want to add a todo or change a counter, but our applications are more complex than that.

I think the concept of expressing a “state changing flow” is where we have to go next. Cerebral is a contribution to this. Libraries like [Cycle.js](http://cycle.js.org/) uses FRP concepts to express this flow. I thought about this for Cerebral, but to me it is hard to reason about complex flows using FRP.

RxJS has so many methods and most examples converts input to a single state change. App flows are a lot more complex than that. HTTP responses, conditionals, multiple state changes, relational data, optimistic updates etc. I just really really want it declared as one flow.

But FRP in JavaScript is still in its early adoption and I am not trying to state FRP as a bad thing at all. I just think its current form is too difficult to use for the common JavaScript developer. André Staltz is doing fantastic work with Cycle.js. Making FRP more developer friendly for application development. Evan Czaplicki, creator of Elm, is also doing a tremendous effort. I think both Dan and André will agree that Evan has been a great inspiration for our contributions.

I just want to say that I think it is great that everybody is so open to sharing what they build. Also sharing theories on how we can make development more fun than painful. What works and makes sense to people is what inspires the next step of this evolution.

## What does the future look like for React? Can you see any particular trends?

What developers miss out on with React is that it is not related to templating at all. React is not a templating engine, it is a rendering engine. It has a lot more in common with game rendering engines than Handlebars etc. This makes React able to render to different targets in lightning speed. In the browser that would be the DOM, but it can render to whatever. So getting projects like React Native is great!

What I also think trips developers up is that components in React are not views. They are closer to defining a single HTML tag than defining a complete view in your application. This unlike templates. I can see how scary a component would be if you copied an Angular template into it… the thing is, you would never do that.

Also JSX is controversial and is partly guilty in tripping developers up on what React is. I have been using it from the start and love it. I understand why developers used to working with HTML templates does not embrace it though. Often overlooking what React is all about. It is just sad and I think this will continue to be an unfair challenge for Reacts adoption.

It is also a matter of Web Components. React JS, as I understand it, does not support Web Components. Now, I do not think Web Components will be app specific building blocks at all. I think they will be `<GoogleMap/>`, `<GoogleDocs/>`, `<Youtube/>` types of tags. Web Components will just become new superpowered HTML tags that we can use globally in our apps, like the existing tags.

So why do I say that? The problem with Web Components, as far as I know, is that they are loaded globally. You do not have a good way to wrap these components into modules. But maybe I am just not getting it! Anyways, React will have a missing feature if it is unable to render these new HTML tags. I think we will import a lot of them in the future.

So to summarize I think React is here to stay for a long time. It will be exciting to see how Ember and Angular catches up with their new rendering solutions too. As I understand they will also support native development and web components.

## Who should I interview next?

It would be interesting to talk to someone invested in FRP.  Who uses it for something more than counters and lists. Since you already interviewed André, it would be great to get Evan in here too. And if you do, tell him thanks for all his great work :-)

## Conclusion

Thanks for the interview Christian! I hope the best of luck with your projects. It is always inspiring to see alternative solutions like these to pop up.

If you became interested in Cerebral, consider checking out [gitter](https://gitter.im/christianalfoni/cerebral) or [Cerebral port of Kanban](https://github.com/survivejs/cerebral-demo). You can also try running [Cerebral Chrome debugger plugin](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb) against [TodoMVC demo](http://www.christianalfoni.com/todomvc/).
