---
title: 'Baobab - Data Trees with Cursors - Interview with Guillaume Plique'
date: 2015-11-02
headerImage: 'assets/img/baobab.jpg'
keywords: ['interview']
---

I remember running into [Baobab](https://github.com/Yomguithereal/baobab) through [Christian Alfoni's post about it](http://www.christianalfoni.com/articles/2015_02_06_Plant-a-Baobab-tree-in-your-flux-application). In short, it's a library that provides you optionally immutable data trees with cursors. Admittedly that's quite a mouthful.

In order to understand the topic a little better, it's probably best to let the author, Guillaume Plique, to explain his ideas behind the library.

## Can you tell a bit about yourself?

<p>
  ![Guillaume Plique|100|100|author](assets/img/interviews/plique.jpg)

  My name is Guillaume Plique and I am a full stack developer currently working in Paris for Sciences Po's [médialab](https://github.com/medialab) which is a laboratory aiming at gathering people from social sciences, design and IT in order to develop innovative research projects.
</p>

I mostly deal with web mining, graph processing and, of course, UI development. More concretely, my job consists in helping researchers achieve their goals by designing and developing the correct tools for them.

## How would you describe Baobab to someone who has never heard of it?

I guess you could picture Baobab as a mere JavaScript object. As such, you can set its keys, and of course, nest items as you wish. If you do so, you will find yourself with what is commonly known in computer science as a tree (hence the Baobab).

Now this is where the library kicks in: imagine that you can select any particular branch of the tree, because at this precise moment it might be the only part of the tree you are interested in, and subscribe to its updates.

```javascript
// Let's create a very simple tree:
var tree = new Baobab({
  user: {
    name: 'John',
    surname: 'Doe'
  }
});

// Selecting a part of the tree by creating a "cursor"
var nameCursor = tree.select('user', 'name');

// Getting the user's name:
tree.get('user', 'name');
// or
nameCursor.get();

// Listening to the name's updates
nameCursor.on('update', function() {
  console.log('The name has changed!');
});
```

Now, let's imagine this tree is meant to hold your whole app's state (think *model* in a typical MVC architecture) and you have, with cursors, a very straightforward way to plug UI components to it. Just make your component declare the part of the tree they are interested in and they will be re-rendered **only** if required because said part of the tree was updated.

```javascript
// A simplistic component displaying the user's surname:
function component(surname) {
  return '<span>' + surname + '</span>';
}

// Rendering logic
var mountNode = document.getElementById('surname');
function render() {

  // Getting the surname from our tree
  var surname = tree.get('user', 'surname');

  // Rendering our component
  mountNode.innerHTML = component(surname);
}
render();

// Subscribing to the surname's updates
tree.select('user', 'surname').on('update', function() {

  // The surname has been updated, let's re-render!
  render();
});

// This will trigger a render:
tree.set(['user', 'surname'], 'Williams');
// This will not:
tree.set(['user', 'name'], 'Jack');
```

As a bonus, the tree's data is persistent and immutable (at least by default, but feel free to tweak this if needed through options). This means that you can easily store its history to go back and forth in time, plus you can perform efficient referential comparisons (`O(1)`, no diffing involved) between several states of the tree in time. Comparison of states is as simple as:

```javascript
previousData !== nextData
```

## Why did you develop Baobab?

Well, I really enjoy developing in [Clojure](http://clojure.org/) from time to time and I grew accustomed to [zippers](https://en.wikipedia.org/wiki/Zipper_%28data_structure%29) (a typical data structure you generally encounter in functional programming languages) and I am very fond of cursors such as the ones you can find in the [Om](https://github.com/omcljs/om/wiki/Cursors) library (a popular ClojureScript interface to [React](https://facebook.github.io/react/)).

So, basically, the idea was to port/re-use those concepts (functional programming is a place full of wonderful concepts) in raw JavaScript. But none of the existing solutions were fitting my needs.

At first, I tried to create cursors for the [immutable-js](https://facebook.github.io/immutable-js/) library but finally abandoned because of the mere size of the files that clients would need to load and the quirks of having to use a dedicated API for both get/set operations on the data compared to what you would do with raw JavaScript objects.

Then I stumbled upon React's [immutability helpers](https://facebook.github.io/react/docs/update.html) and thought this was mainly what I wanted but needed to go further (the first versions of Baobab's updates specifications were by the way very similar to the MongoDB-like objects used by the aforementioned helpers).

Hence I started developing the first version of Baobab along with its React integration so I could build my UIs the way I wanted. The objectives of the library were therefore the following:

1. The Baobab tree should be able to hold the centralized state of an app and this state could be as complex as any JavaScript object would (simple key/value store without nesting capabilities would not be enough, for instance).
2. The Boabab tree should support cursors and should dispatch update events correctly so that the rendering of components bound to specific parts of the tree may be optimal.
3. The data you read from the tree should be raw JavaScript and not some abstraction over it.
4. The tree's data should be persistent and immutable (I must thank [Christian Alfoni](https://github.com/christianalfoni) here for our numerous discussions on the subject when developing the first versions of the library).

## What kind of challenges have you experienced while developing it?

The main challenges concerned memory structures and optimization. Baobab really sits halfway between raw JavaScript objects and immutable data structures. Remaining as efficient as possible in this case is not the easiest thing. For instance, to ensure persistence and referential comparisons between several states of your tree, I have to shallow clone some parts of it, not the whole tree, of course, but only the updated branch in the tree.

The outcome is that you do have a data structure which is really faster than [immutable-js](https://facebook.github.io/immutable-js/) if your objective is to read and handle raw JavaScript objects but which comes with a performance cost on writes. But this cost remain extremely negligible when handling the kind of data we usually use as our app's state. But, obviously, I wouldn't vouch for Baobab, for instance, if you need to store immutable lists containing billions of items and that need to be updated very frequently (i.e. every ~n ms).

To be true, I am still pondering some internal optimizations of the library and the main challenge here is to be able to optimize the general cases and the cases for which the library was created while not falling into the trap of over optimizing edge cases that wouldn't happen normally.

Another challenge was to produce an API as streamlined as possible. What I noticed before starting to develop Baobab was that most of the zippers/cursors libraries existing in JavaScript often have a very complex and verbose API which is, in the end, very difficult to manipulate.

My aim, with Baobab, was therefore to offer the simplest and most polymorphic API so that one could use it easily and without having to be an expert on lambda calculus. I hope I have reached this goal with the current API.

## What next?

For now, I need to polish some things, optimize the internals of the library, fix bugs and add some more features to the library. After that, I will start trimming useless parts of the library that no one is using and maybe relocate some of its parts to external libraries (the history helpers might become an external library, for instance).

What I want to avoid is to bloat the library with unnecessary features that would make it evolve into a complex and shapeless blob.

## What does the future look like for React and front-end in general? Can you see any particular trends?

Those are great times for JavaScript as most functional principles finally start to reach web development. To me, UI componentization is key here (mainly symbolized by React and web components nowadays but not only) and will slowly make everyone realize that UIs should be, as far as possible, considered as pure functions. The centralized state of your app is therefore no less than the arguments you pass to such a function.

Building UIs thusly comes with a lot of collateral advantages: UI snapshots, app state storage, time travel, easy hot-reloading etc. and it would be a loss not to embrace them. What's more, functional principles, notably immutability, really make reasoning about complexity easier and make us better developers at the end.

To me, the future also means new tools that should make working on front-end apps more comfortable/enjoyable and hot-loading is just the beginning. The [devcards](https://github.com/bhauman/devcards) concept by [Bruce Hauman](https://github.com/bhauman) (again, coming from ClojureScript's community) is the very symbol of what we can expect to work with in a near future.

## Who should I interview next?

I cannot give you a specific name but I think you should definitely interview someone from the ClojureScript community. We still have a lot to learn from this community which is actively bringing functional concepts to life in modern web development.

## Conclusion

Thanks for the interview Guillaume! In case you want to get started with Baobab, consider the following resources:

* [Baobab project site](https://github.com/Yomguithereal/baobab)
* [baobab-react](https://github.com/Yomguithereal/baobab-react) - baobab-react implements popular React patterns to make it easier to integrate with Baobab.

Note that [Cerebral](https://cerebraljs.com/) has Baobab bindings. We [discussed the topic earlier](./cerebral-interview) with Christian.
