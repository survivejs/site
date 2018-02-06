---
title: 'Parket - A library to manage application state, heavily inspired by mobx-state-tree - Interview with Leah Ullmann'
date: 2018-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter. Please mention your handle here.

@hrmny_

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/52401c37bc5c4d54a051c619767fdbf8?s=200" alt="Leah Ullmann" class="author" width="100" height="100" />
</span>
</p>

I'm a (mostly) self taught developer, started with Java in school, but the two languages I use the most currently are Rust and Javascript.

My main interests right now are webdev, devops and gamedev.

Currently working as a freelance full-stack developer.

## How would you describe *Parket* to someone who has never heard of it?

Parket is a state management library, a well known example would be Redux. It's heavily inspired by mobx-state-tree, which I didn't use because of the rather large file size.

Parket lets you create models with state, actions and views, these can later be used by instantiating them and can be nested inside each other.

## How does *Parket* work?

Parket internally uses Proxies. Proxy is a newish feature which allows you to wrap objects and manage get and set access to it, it's like adding a getter and setter to every property, but also applies to new properties added.

## How does *Parket* differ from other solutions?

A lot of state management libs seem to focus on immutability a lot, every state update has to return an immutable object. I just manage mutability via the proxies so you can't set anything outside of actions, you also don't have to return anything or call `setState` and the likes, becuase it's listening to the state changes and sends events based on those.

### A basic example

```js
import model from 'parket';

const Person = model('Person', {
  initial: () => ({
    firstname: null,
    lastname: null,
  }),
  actions: state => ({
    setFirstName (first) {
      state.firstname = first;
    },
    setLastName (last) {
      state.lastname = last;
    },
  }),
  views: state => ({
    fullname: () => `${state.firstname} ${state.lastname}`,
  }),
});

const instance = Person({ firstname: 'Tom' });
```

As you can see, the state gets passed to the actions, which just modify it without doing anything special.
The same thing happens with views, but those only read from the state, same as accessing it from the outside, the views get updates on every state change.

Anyone familiar with mobx-state-tree will probably see the similarities.
You define a model for the state and can reuse it, which is useful mostly for nested models, i.e. todos in a todo list.
I have also adapted the mst todomvc example to parket, which you can find in the repo.

When instantiating the model you can pass an object to get merged into state.
(I might change this to just pass it into the initial function, because it can currently override nested objects)

### Async

```js
const Async = model('Async', {
  initial: () => ({
    loading: false,
    result: null,
  }),
  actions: self => ({
    async doSomethingAsync() {
      self.loading = true;
      // be aware that you should handle errors ( /rejections )
      self.result = await somethingAsync();
      self.loading = false;
    },
  })
});
```

As you can see here, parket really doesn't care what your action does or rather what it is, it just listens to state changes.

## Why did you develop *Parket*?

I found mobx-state-tree a while ago and immediately liked it, but it and the dependency to mobx it's rather big in terms of file size. And being in the preact core team I obviously had to make something smaller, so after failing 2 times, Parket was born (~1.5kB).

## What next?

I'm not sure yet, maybe another library when I get an idea, there surely will be something.
Maybe I'll go to university soon, so that might be fun.

## What does the future look like for *Parket* and web development in general? Can you see any particular trends?

I don't think I'm qualified to predict the future, but I'll try anyway.

The one thing I can see happening is more PWAs (progressive web-apps) will get to the market and with new web features they can become even more powerful. There's already some amazing examples like Twitter Lite and the new Instagram PWA. You could use Parket in a PWA, so that's nice.

There will also always be new frameworks, some worth looking at, others not so much, but it's all in the name of progress.
I hope we'll get something actually innovative some time soon, Jason (`@_developit`) talked about how visual programming could be used for the UI instead of the component based frameworks we use now.

## What advice would you give to programmers getting into web development?

Go to a coding bootcamp if you can, or some other place where you have a teacher you can ask when you have problems. Freecodecamp and the community around it is also great, but I only found that after I already knew most of what they teach.
Not specific to web, but: Find a problem and solve it, even if it has been solved before

## Who should I interview next?

Maybe Zouhir or lukeed

## Any last remarks?

Thanks to the preact community for being so great, wouldn't be where I am today without them.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Leah!
