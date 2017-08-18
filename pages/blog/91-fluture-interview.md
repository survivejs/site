---
title: 'Fluture - Fantasy Land compliant alternative to Promises - Interview with Aldwin Vlasblom'
date: 2017-05-02
headerImage: 'assets/img/future.jpg'
keywords: ['interview', 'functional programming']
---

Dealing with the asynchronous code has always been a challenge in JavaScript. Callbacks are the classic way, and since then we've gained higher level abstractions and constructs for handling the problem.

This time around we'll discuss [Fluture](https://github.com/fluture-js/Fluture), a Fantasy Land specification compatible alternative to `Promises` by [Aldwin Vlasblom](https://github.com/Avaq).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e30745ae3be2e0792957c89d7460d57c?s=200" alt="Aldwin Vlasblom" class="author" width="100" height="100" />
</span>

I was born and raised in Rotterdam, the Netherlands. I got into programming at age eleven when I decided to make a website for my RuneScape clan and happened upon Macromedia Flash with ActionScript. At age fourteen I had made several small sites for family members and decided to do my internship at a digital agency.
</p>

That's where I was introduced to PHP and realized I want to pursue an education in this area, which lead me to do a course in interactive media design and development.

During my second internship, I became responsible - and was later hired - to maintain the company's internal PHP framework. I loved making API's and abstractions for other developers and was fond of higher order functions.

It's, therefore, no surprise that I was drawn into the JavaScript functional programming world, and ended up creating an API which is based almost exclusively on higher order functions.

## How would you describe *Fluture* to someone who has never heard of it?

There are three approaches to introducing Fluture, depending on the background:

* To an inexperienced JavaScript programmer I might say that it's an abstraction which serves to reduce the complexity of dealing with JavaScripts asynchronous nature (also knows as callback-hell).
* To an experienced JavaScript programmer I might say that it's like a Promise, but lazily evaluated, with cancellation, and with a more principled API which conforms to [Fantasy Land](https://github.com/fantasyland/fantasy-land).
* To a functional programmer I might say that it's a Monad which encodes side-effects, delay, and possible failure.

## How does *Fluture* work?

In it's simplest form, it's a function which takes a function and returns it wrapped in an object with the name "fork", perhaps best explained through code:

```javascript
const Future = fork => ({fork});

Future((rej, res) => res(1)).fork(
  console.error, console.log
); // 1
```

This structure becomes interesting once you add higher order functions like `map`:

```javascript
const Future = fork => ({
  fork,
  map: f => Future(
    (reject, resolve) => {
      fork(
        reject,
        x => resolve(f(x))
      )
    }
  )
});

Future((reject, resolve) => resolve(1))
  .map(x => x + 1)
  .fork(console.error, console.log); // 2
```

The idea that you can `map` over a Future similarly to how one might `map` over an `Array` comes from the research into "algebraic data types" brought to JavaScript most prominently by [Fantasy Land](https://github.com/fantasyland/fantasy-land).

Fluture builds on top of these ideas to add:

* Full conformity to Fantasy Land Monad
* Other utilities and transformations
* Cancellation
* Input type checking
* And [soon](https://github.com/fluture-js/Fluture/milestone/5): Stack safety

## How does *Fluture* differ from other solutions?

The description of Fluture states that it's *an alternative to Promises*, so it's only natural that people want to compare it. In my article [comparing Futures to Promises](https://github.com/fluture-js/Fluture/wiki/Comparison-to-Promises) I write:

> On the surface Futures are just like Promises, but with the different behaviors of the `.then` method extracted into three distinct functions, each with a *single responsibility*.

The `then` method of a Promise is massively overloaded: You can give it zero to two arguments, both are mixed types (`Nil` and `Function`). The return values of the functions are also overloaded: You can return any value, but returning something with a `then`-method has a particular meaning. Throwing an error also has special meaning.

Extracting all of these behaviors to separate functions makes it easier to abstract over, and clarifies developer intent, making it simpler to detect mistakes.

I've also written about the differences between Fluture and other libraries which have a similar structure, in my article [comparing them](https://github.com/fluture-js/Fluture/wiki/Comparison-of-Future-Implementations). I'll go into this when answering why I developed Fluture.

## Why did you develop *Fluture*?

I got into functional programming some years ago when I discovered [Ramda](http://ramdajs.com/), and from there I became acquainted with [Fantasy Land](https://github.com/fantasyland/fantasy-land). The first algebraic type I decided to try was a Future. I tried [`data.task`](https://github.com/folktale/data.task) and [Ramda Fantasy](https://github.com/ramda/ramda-fantasy).

A little later I was teaching asynchronous functional programming to a small group of developers, and I found that one of the biggest sources of confusion were the bizarre and cryptic error messages one would get out of these Future libraries from making simple mistakes.

I had also accumulated a set of common utilities that I was using with Futures, so I decided to create a Future library which would ship with these utilities and provide understandable error messages. I made sure that the performance remained decent because I did not want people to have to choose between good performance and a pleasant development experience.

I later discovered [Sanctuary](https://sanctuary.js.org/), with which Fluture shares a lot of its design
philosophy. It became another important part of Fluture's design to integrate
with Sanctuary nicely.

T> To learn more about Sanctuary, [read the interview of David Chambers](/blog/sanctuary-interview).

## What next?

A critique Fluture and other Futures have always received is that they are not stack safe, unlike Promises. Promises execute every action immediately in the next JavaScript tick giving them an inherent stack safety, because every operation waits until the stack is cleared before executing.

Some weeks ago, by combining ideas from Promises, Fluture, and Free Monads, I created a stack safe proof of concept Future which does not use the next-tick-trick. I'm currently working on porting the entire Fluture library to this new architecture. It's already feature complete - it just needs [some polishing](https://github.com/fluture-js/Fluture/milestone/5) before being released under version `6.0` in the coming months.

## What does the future look like for *Fluture* and web development in general? Can you see any particular trends?

Fluture has earned a place in my personal toolkit when it comes to classic request-response applications, like those you find in web-servers. In this context, I consider it the best solution to the [async problem](https://github.com/plaid/async-problem) (and the promise problem) that I've used to date, and I don't think that will change soon.

As for other kinds of applications, like the ones you might find running in browsers, I think we are moving towards reactive. Streams are the perfect async abstraction in these environments.

Streams are like Futures, except that they can produce more than one value. For an excellent Stream library I recommend [most](https://github.com/cujojs/most). And for an interesting way to use it, and think about front-end applications, I would recommend learning about [CycleJS](https://github.com/cyclejs/cyclejs).

T> To learn more about CycleJS, [read the interview of André Staltz](/blog/cycle-interview).

## What advice would you give to programmers getting into web development?

Avoid using object and variable mutation as a feature for the functionality of your code. You are shooting yourself in the foot. Mutation is a means to optimize code.

## Who should I interview next?

I admire the works of [Brian Cavalier](https://github.com/briancavalier), author of [most](https://github.com/cujojs/most), [creed](https://github.com/briancavalier/creed), and more.

I also think it may be good to interview [Irakli Safareli](https://github.com/safareli), he has been an invaluable contributor to both Sanctuary and Fluture, and he's been exploring the little-explored field of Free Monads with his project [Free](https://github.com/safareli/free).

Lastly, I would like to give a shout-out to [Roman Pominov](https://github.com/rpominov) who helped me bring cancellation into Fluture. He authored [Kefir](https://github.com/rpominov/kefir) - the first Reactive Stream library I got into, and [Static Land](https://github.com/rpominov/static-land) - an adaptation of Fantasy Land which pushes the community forward.

## Any last remarks?

I think a wildly under-appreciated feature of Monads is *Monad Transformers*, I've scratched the surface of what they are capable of in my project [momi](https://github.com/Avaq/momi), which implements the core ideas of [Express](https://expressjs.com/) in only a few lines of code by combining two existing Monads. I would like to see their usage grow.

## Conclusion

Thanks for the interview Aldwin! It is always amazing to see new solutions to old problems. Sometimes reframing the problem somehow can lead to alternatives.

Check out [Fluture GitHub page](https://github.com/fluture-js/Fluture) to learn more about the project.
