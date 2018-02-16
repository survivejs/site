---
title: 'Parket - A state management library inspired by mobx-state-tree - Interview with Leah Ullmann'
date: 2018-02-16
headerImage: 'assets/img/parket.jpg'
keywords: ['interview', 'state-management']
---

State management is one of those topics that divides opinions. So far we've seen a couple of options so far.

In this post, we'll cover Parket, a solution by [Leah Ullmann](https://twitter.com/hrmny_).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/52401c37bc5c4d54a051c619767fdbf8?s=200" alt="Leah Ullmann" class="author" width="100" height="100" />
</span>

I'm a (mostly) self-taught developer, started with Java in school, but the two languages I use the most at the moment are Rust and JavaScript.
</p>

My primary interests right now are web dev, devops, and game dev. I am currently working as a freelance full-stack developer.

## How would you describe *Parket* to someone who has never heard of it?

Parket is a state management library; a well-known example would be Redux. It's primarily inspired by mobx-state-tree, which I didn't use because of the large file size.

Parket lets you create models with a state, actions, and views; these can later be used by instantiating them and can be nested inside each other.

## How does *Parket* work?

Parket internally uses Proxies. Proxy is a newish feature which allows you to wrap objects and manage to get and set access to it; it's like adding a getter and setter to every property but also applies to new properties added.

## How does *Parket* differ from other solutions?

A lot of state management libs seem to focus on immutability a lot; every state update has to return an immutable object. I manage mutability via the proxies so you can't set anything outside of actions, you also don't have to return anything or call `setState` and the likes, because it's listening to the state changes and sends events based on those.

**A basic example:**

```javascript
import model from "parket";

const Person = model("Person", {
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

const instance = Person({ firstname: "Tom" });
```

As you can see, the state gets passed to the actions, which just modify it without doing anything special.

The same thing happens with views, but that only read from the state, same as accessing it from the outside, the views get updates on every state change. Anyone familiar with mobx-state-tree will probably see the similarities.

You define a model for the state and can reuse it. This is useful mostly for nested models, i.e., todos in a todo list.

When instantiating the model, you can pass an object to get merged into the state. I might change this to pass it into the initial function because it can currently override nested objects.

T> I have also adapted the mobx-state-tree TodoMVC example to Parket, which you can find in the repo.

**Asynchronous example:**

```javascript
const Async = model("Async", {
  initial: () => ({
    loading: false,
    result: null,
  }),
  actions: self => ({
    async doSomethingAsync() {
      self.loading = true;

      // Be aware that you should handle errors ( /rejections )
      self.result = await somethingAsync();
      self.loading = false;
    },
  })
});
```

As you can see here, Parket doesn't care what your action does or instead what it is; it just listens to state changes.

## Why did you develop *Parket*?

I found mobx-state-tree a while ago and immediately liked it. mobx-state-tree and the dependency to MobX make the file size big. Being in the Preact core team I obviously had to make something smaller, so after failing two times, Parket was born (~1.5kB).

## What next?

I'm not sure yet, maybe another library when I get an idea, there inevitably will be something. Perhaps I'll go to university soon, so that might be fun.

## What does the future look like for *Parket* and web development in general? Can you see any particular trends?

I don't think I'm qualified to predict the future, but I'll try anyway.

The one thing I can see happening is more PWAs (progressive web-apps) will get to the market, and with new web features, they can become even more powerful. There are already some fantastic examples of Twitter Lite and the new Instagram PWA. You could use Parket in a PWA, so that's nice.

There will also always be new frameworks, some worth looking at, others not so much, but it's all in the name of progress.

I hope we'll get something innovative sometime soon, Jason (`@_developit`) talked about how visual programming could be used for the UI instead of the component based frameworks we use now.

## What advice would you give to programmers getting into web development?

Go to a coding boot camp if you can, or some other place where you have a teacher you can ask when you have problems. Freecodecamp and the community around it are also great, but I only found that after I already knew most of what they teach.

Not specific to web, but: Find a problem and solve it, even if it has been solved before

## Who should I interview next?

Maybe [zouhir](https://github.com/zouhir) or [lukeed](https://github.com/lukeed).

## Any last remarks?

Thanks to the Preact community for being so great, wouldn't be where I am today without them.

## Conclusion

Thanks for the interview Leah! It's always nice to see new approach to state management.

You can [find Parket in GitHub](https://github.com/ForsakenHarmony/parket).
