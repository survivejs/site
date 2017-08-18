---
title: 'Popper.js - Easy Tooltips and Popovers - Interview with Federico Zivolo'
date: 2017-05-29
headerImage: 'assets/img/pencils.jpg'
keywords: ['interview', 'javascript']
---

There are times when a vanilla `<abbr>` or `<acronym>` doesn't cut it. What if you want to do something more complex?

[Popper.js](https://popper.js.org/) by [Federico Zivolo](https://twitter.com/FezVrasta) achieves exactly this. Read on to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/52648ca9bee250edf351385c1e87416c?s=200" alt="Federico Zivolo" class="author" width="100" height="100" />
</span>
I'm Federico (Fez) Zivolo, UI Specialist at Quid. Born in Italy, I live in Budapest now. I like to help with open source projects on GitHub and I maintain some created by me.
</p>

## How would you describe *Popper.js* to someone who has never heard of it?

Popper.js is a library to help you position tooltips, popovers, dropdowns and any contextual element that should appear near a button or similar (I call them "poppers").
In short, it's a piece of code that saves you hours of work on any of your projects, since almost all of them end up featuring some "popper".

## How does *Popper.js* work?

That's a good question; I'm still trying to figure it out!

Jokes apart, the principle is pretty straightforward. It takes a reference element (usually a button) and a popper element (any element you want to position), it finds out a common offset parent, computes the position of the reference element relative to such parent, and then generates a set of coordinates use to position the popper element.

The hardest part is to consider a whole set of edge cases which range from cross browser compatibilities to box model capillarities, including taking care of the scrollable elements.

The usage is simple:

```js
new Popper(referenceElement, popperElement);
```

This code will position the `popperElement` on the bottom of the provided `referenceElement`. Also, you already have access to all the built-in features of the library.

The line also achieves the following:

* If the `referenceElement` is too close to the bottom of the viewport, the `popperElement` will be positioned on top of it instead.
* If the two elements are positioned in two different parents, Popper.js will take care of it and will still properly position the popper element correctly.
* It handles scrollable elements and page resizes.

## How does *Popper.js* differ from other solutions?

There aren't a lot of available solutions and they all cover a small subset of cases that are instead adequately addressed by Popper.js. The main difference is in the fact that my library doesn't need to manipulate the DOM directly to work.

This fact leads to two strengths: it doesn't have to move the popper node in a different context to properly work and can be integrated into frameworks and view libraries such as React and AngularJS with ease.

You can easily do this to delegate the DOM manipulation:

```js
new Popper(referenceElement, popperElement, {
  modifiers: {
    applyStyle: { enabled: false },
    updateReactData: {
      order: 900,
      fn(data) {
        this.setState({ data });

        return data;
      }
    },
  },
});
```

We have disabled the built-in `applyStyle` modifier (they are like middleware, and most of the functionalities provided by Popper.js are provided by them), and defined our custom modifier that only proxies the computed popper coordinates and information to our React component.

Now that you have all the knowledge provided by Popper.js, you can do whatever you need to apply the needed styles to the popper element.

You may have noticed that my custom modifier is returning the `data` object at the end. This object is needed because other modifiers may run after it and read the `data` object.
This chain-based approach makes Popper.js extensible; you can inject any custom function before or after any of the existing modifiers, disable the ones you don't need, and alter the behavior of others simply modifying the data stored in the `data` object.

## Why did you develop *Popper.js*?

At the time of the creation of Popper.js, I worked for a company which made large use of tooltips and popovers in their Ember.js application. We had an internal implementation of a positioning library similar to Popper.js, written mostly by two other team members and me. Its code was pretty messy because it had been developed just to work in our particular cases and it was deeply tied to the Ember.js internals.

The time needed to maintain such library became a problem because we spent a significant portion of our time fixing bugs related to it.
We then decided to outsource it and use an existing open source library to do the job.

I performed the investigations to find a suitable alternative; the only available choices were Tether and jQuery UI Position. The latter, after some quick tests, ended up being too basic to be used in our context. The only way to use it would have been to fork it and add the missing features.

### Tether Was Promising But Not Enough

Tether was very promising, it supported a lot of features and performed quite well. But it had some pretty limiting constraints as the library arbitrarily moved our components away from their original DOM tree context to have them positioned as direct children of the `body` tag.

This fact was a major problem because it interfered with the way Ember handled the DOM. One of the problems I remember is that our tests couldn't work because the testing environment of Ember looked for the DOM nodes only inside the root node of the Ember.js application.

The other problem was the limited customizability of it; we couldn't add any additional behavior or feature to it. For instance, we couldn't make a tooltip switch from "right" to "bottom" in case there wasn't enough space on its right. It only allowed "right - left" and "top - bottom".

### A Custom Library Was Needed

I wanted to use an existing solution because I just wanted to get the job done, but with these premises, the only viable solution I found was to write my library. My company didn't have time to allocate to write it, so I ended up writing it during a weekend...

## What next?

Popper.js is getting adopted by more projects every day, and that's cool.
My biggest "competitor" discontinued its library (Tether) and [they now point to Popper.js](https://github.com/HubSpot/tether/#rotating_light-project-status-rotating_light), I hope to be able to serve their users as they deserve.

Bootstrap [recently merged a PR](https://github.com/twbs/bootstrap/pull/22444) to use my library in their code base. I hope to see a larger number of contributions on my project as a result.

Other great developers have developed [integrations for Popper.js](https://github.com/FezVrasta/popper.js/blob/master/MENTIONS.md#integration-in-frameworks-and-view-libraries) to use it in the most popular libraries such as React, Preact, and Vue.js; others are working to create one for Ember.js. Only Angular is behind and needs a proper integration.

Certain outstanding issues that have to be fixed to handle all the edge cases. More tests have to be written to assure a high quality and reliability, and the API will probably need some makeover in the future.
There is a lot of work and not much time available, but I'll do my best to maintain the library and improve it continuously. Some help would be very welcome. 😉

## What does the future look like for *Popper.js* and web development in general? Can you see any particular trends?

The most innovative idea behind Popper.js is the modularity of it, no other similar libraries let you completely de-opt from any DOM manipulation and delegate them to your code.
I think we may see more libraries follow this direction and make the life of other developers easier.

Since the current front-end scenario is populated by a lot of different technologies, the library authors must adopt a model that allows the consumers to integrate them with the existing frameworks and libraries without compromises.

## What advice would you give to programmers getting into web development?

It may sound childish, a lot of folks will tell you that it's a matter of preferences and blah blah... But I think the future of the web development is in the functional, data-driven, development as promoted by Facebook with React. The whole idea of state management "introduced" [1] by those guys saved my team and me hundreds of hours of development already.

If you are getting into web development, first learn the basics of the web: HTML, JavaScript, and CSS. Then, move to any framework or library that follows the data driven and functional principles, if not React, anything wich shares the same idea. Doing this will set you a mindset that will help you to handle and resolve any situation.

[1]: Necessary note, Facebook didn't invent it, they simply promoted within the web development environment.

## Who should I interview next?

1. Travis Arnold (**@souporserious**), he is working on some cool responsive components libraries and worked on react-popper, he knows better than anyone else how to integrate libraries into React.
2. Gajus Kuizinas (**@kuizinas**), he works on a lot of awesome stuff, but I especially like his ideas about CSS Modules vs. CSS in JS solutions.
3. Nik Graf (**@nikgraf**), for his work with React VR!

## Any last remarks?

If you want to be a great developer, remember to have fun along the way. 🙃

## Conclusion

Thanks for the interview Federico! If I need tooltips or popovers, I know where to look now.

Remember to check [Popper.js demos](https://popper.js.org/) and [Popper.js on GitHub](https://github.com/FezVrasta/popper.js).
