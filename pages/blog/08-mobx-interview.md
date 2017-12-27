---
title: 'MobX - Reactive React - Interview with Michel Weststrate'
date: 2015-08-19
headerImage: 'assets/img/city.jpg'
keywords: ['interview', 'react', 'state-management']
---

As React deals only with the view layer you will often have to complement it with something else. [Flux architecture](https://facebook.github.io/flux/docs/overview.html) is one answer but not the only one. [MobX](https://mobxjs.github.io/mobx/) by [Michel Weststrate](https://github.com/mweststrate) is a refreshing alternative. But what is it really about?

## Can you tell something about yourself Michel? How did you discover React?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/bdbeb02a7fe50b769e67e0c076b33c54?size=200" alt="Michel Weststrate" class='author' width='100' height='100' />
</span>
I'm a lead developer at Mendix where I worked on both frontend and backend development. About half a year ago me and my team started working on a greenfield,  enterprise scale project where most of the complexity is on the client side. We started a small research project to find the right technology and looked into Angular, Ember and React.
</p>

React was definitely the one that did enlighten us the most. Its mental model is really simple, it has a clearly defined scope and it is convenient to write.

## What drove you to develop MobX Why not to just stick with Flux?

Performance and code simplicity are both very important values in our project. Performance because we have to draw hundreds of different, moving components at 50fps. Code simplicity because we have about 400 different domain concepts to cover, so all our components should be really DRY. An always-re-render-everything approach results in very simple code. But it doesn't cut it in terms of performance.

With most Flux implementations, it really seems that to achieve performance you have to give up code simplicity. Immutable data is often presented as the way to go here. Yet it results in verbose controller (store) functions and forces you to do reference management yourself.

With mutable data structures, it is trivial to guarantee that there is only one version of a certain domain object in memory. So you never have to worry whether you leaked an old reference. With immutable data, pointer equality guarantees structural equality. Which is nice in terms of optimizations and history. Yet with mutable data, pointer equality means that you are looking at conceptually the same (and latest) thing.

So our goal for MobX is: Be able to write components that look like they are always fully rendered. Without needing nifty things like cursors or store subscriptions. To achieve DRY: the render function is the dependency tree, and nothing else. For our model and controller code we wanted to be able to write vanilla JS code as much as possible. Be able to use the mutable arrays and objects, cyclic data-structures and classes. I think MobX achieves these goals.

### MobX can work **with** Flux

It is actually funny that you present MobX as an alternative to Flux. MobX can be combined with most Flux implementations. But I heard indeed from several people that they dropped Flux after starting to use MobX in their project.

I think the issue with Flux is that it is very obtrusive to your code base. If you use React and Flux together, it impacts your whole codebase. While just React nicely separates the concerns of view and 'the rest'. With Flux frameworks you go all-in. That introduces new problems like: 'how do I do async actions' and 'my actions need to go through the stores in a certain order'.

That makes me wonder: Did you have these questions when building vanilla JavaScript applications? What do you get in return from Flux? I think most things offered by Flux can also be achieved by disciplined programming. Stuff like uni-directional flow and making it clear where your state lives.

### On frameworks vs. libraries

At Mendix we are pretty reluctant to use all-in frameworks. The first two years they serve you really well. But the third year they cannot longer keep up the pace with new technologies. The fourth year you spent refactoring just be able to adopt new technologies.

We have learned from that, so MobX tries to be as unobtrusive as possible. Less obtrusive than frameworks that use immutables, cursors or reactive streams. So that you have a great deal of flexibility in how you structure your controller, view and model code (or actions and stores).

## What are your next steps? How do you plan to develop MobX further?

MobX is all about updating views on your data automatically. People often interpret views as 'user interface' and this plays a central role indeed in the React integration. But reactive data is really convenient for backend integration as well.

At our project we do not only use MobX to update the user interface, but also to create a changelog that is sent to the backend server. Both are just views on the same data. I hope to get this idea more clear and to find some nice convenience methods that hints users in this direction.

Soon, MobX will include a way to visualize all the relations between state and views. This will provide great insight in the actual flow of state through your application.

And maybe I should write some Flux thingy around MobX and React. Because either people seem to think you need to Flux in order to properly React. Or they just love to be guided in how to setup each part of their application.

## What does the future look like for React? Can you see any particular trends?

I think React has a brighter future than Angular. Simply because you aren't stuck with a full fledged framework that you have to obey, or it will work against you. But React has to keep an ecosystem that prefers composition of micro libraries over all-in-one solutions.

This is also the reason that small editors like Sublime and Atom in combination with standalone build tools like Grunt and Gulp are now more popular than feature creeped IDEs (I think, I don't have any numbers on that).

No framework lives forever. So if you want to make sure your software outlives your frameworks, you have to be able to replace your libraries one by one. One day you will wake up to discover that browsers are fast enough to re-calculate your whole application on each state change. Then you just remove MobX and everything will work just the same as the day before without a major refactoring.

I'm very interested to see what Relay will do in this regard. Because from a bird's eye view it seems to increase the coupling between view, controller and backend. Making it much harder to replace any of these parts.

## Who should I interview next?

Dan Abramov, his [redux](https://github.com/gaearon/redux) is the only 'Flux implementation' I could see myself using. It is not unobtrusive if you are coming from the mutable world, but the mental model of redux is beautiful and the dev tools are fun. I can imagine it works really well in (at least) medium sized applications.

## Conclusion

Thanks for the interview Michel! It was certainly enlightening. We ported the book [Notes and Kanban examples to MobX](https://github.com/survivejs/mobx-demo). Check out the source to see how this worked out. Compared to the original I was definitely positively surprised. MobX seems like a good fit for these problems. You can play around with MobX online by taking the [ten minute, interactive introduction to MobX + React](https://mobxjs.github.io/mobx/getting-started.html).

Michel goes into more detail at [his post about making React reactive](https://www.mendix.com/tech-blog/making-react-reactive-pursuit-high-performing-easily-maintainable-react-apps/). So if this article piqued your interest that might be a worthwhile read. Of course you can just hop into the [MobX boilerplate](https://github.com/mobxjs/mobx-react-boilerplate) and proceed from there.
