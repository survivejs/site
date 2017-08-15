---
title: 'FRZR - a Tiny View Library - Interview with Juha Lindstedt'
date: 2016-04-18
headerImage: 'assets/img/frzr.jpg'
keywords: ['interview']
---

Often when you pick up a JavaScript library it's going to be a little chunky - tens, or even hundreds of kilobytes. Though this can be entirely acceptable given the benefits, it might be a little much at times.

What if it was possible to begin from the other extreme and go from there? This is what Juha Lindstedt's library [FRZR](https://frzr.js.org) is about. Read on to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/46846cd7fc5658dbae2c7a8998b394dc?s=200" alt="Juha Lindstedt" class='author' width='100' height='100' />
</span>

I've been working as a freelance senior web developer, doing projects with small businesses and advertising agencies. Lately I've focused on developing [iDiD](http://www.idid.fi) digital signage system at [ConnectingTalents](http://www.talents.fi), where I currently work.
</p>

I started in 1999 with Flash and also used PHP few years. In 2011 I fell in love with Node.js and haven't looked back since. I love crafting tailor-made projects and am not into bootstraps or heavy frameworks (although I've used all kinds of frameworks a lot in the past). I always start with an empty canvas (HTML/CSS/JS).

## How would you describe FRZR to someone who has never heard of it?

FRZR is a tiny view library (only 2 kB). It is so easy that I can teach you in 20 minutes how it works under the hood. It's also really really fast and versatile.

Last week I actually did a presentation, where I built FRZR from scratch live, and that way explained how it works. It took me 40 minutes, but this week I'm giving another presentation where I have to do it 20 minutes. That tells something about the simplicity.

To give you a better idea, consider the login form example below:

```javascript
var el = frzr.el;
var mount = frzr.mount;

function Login (opts) {
  this.el = el('form', { class: 'login' },
    this.email = el('input', { type: 'email' }),
    this.pass = el('input', { type: 'password' }),
    this.submit = el('button', 'Sign in')
  );
  this.el.onsubmit = opts.onsubmit;
}

var login = new Login({
  onsubmit: function (e) {
    var email = login.email.value;
    var pass = login.pass.value;

    console.log(email, pass);

    return false;
  }
});

mount(document.body, login);
```

## Why did you develop FRZR?

Like I said before, I've used heavy frameworks in the past. The problem with them is that you never know what the next version update will do to your application. Having to rewrite your whole application because of a framework update is not that nice.

Or when you have to debug the code just to realize a framework swallows all the errors is just horrible. Having a really long stack traces is never good for performance and profiling, either.

FRZR on the other hand is so easy, you can understand 100 % how it works.

## What kind of challenges have you experienced while developing it?

All kinds of challenges. First I needed to study how DOM works. Then I needed to figure out how one would use the library. The latter turned out to be the hardest part. It's really hard to design a library so that it's usable in many different situations.

The more I iterated with it, the simpler it got. Now I'm pretty close to releasing version 1.0, since I don't think the basic idea will change that much anymore.

## What next?

I should write better documentation, record some videos etc.. But I'm quite busy right now with client work, so it will take some time. I hope this week's presentation, which will be recorded, works as a good introduction for FRZR.

I'm also planning to publish all kinds of side libraries for FRZR. Everything is going to be really easily replaceable and usable with other libraries as well. Even the core of FRZR is just a few bunch of small and general functions.

Writing components with FRZR for example means writing just a plain and simple function which just returns `el`-property, which is the HTMLElement. And you can also mix and match HTML elements and FRZR components. Simple, really.

## What does the future look like for FRZR and front-end in general? Can you see any particular trends?

I'm sure frameworks will get easier, but I also hope they'll get more general in a sense, that you could easily swap them. Right know the situation is so, that if you write an application with Angular, you can't really use that much of the code with Ember or React. So you get stuck with the one you're using, and that's bad.

## Who should I interview next?

You could interview [Simon Friis Vindum](https://github.com/paldepind), the creator of [flyd](https://github.com/paldepind/flyd), [snabbdom](https://github.com/paldepind/snabbdom) and many other great libraries. FRZR actually got started when I wrote the original DOM reordering script for [riot.js](http://riotjs.com), which Simon helped me to enhance. So in a sense he's the early contributor of FRZR. Say hello from me :)

## Conclusion

Thanks for the interview Juha. It's always refreshing to see different kind of approaches. Yours is one of the lightest view libraries I've seen. The syntax reminds me of [hyperscript](https://github.com/dominictarr/hyperscript).

If you are interested in FRZR, check out [the official site of the library](https://frzr.js.org). See also [the getting started demos](https://codepen.io/collection/XKwVMG/).
