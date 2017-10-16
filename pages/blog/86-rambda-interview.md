---
title: 'Rambda - Faster and Smaller Alternative to Ramda - Interview with Dejan Toteff'
date: 2017-04-03
headerImage: 'assets/img/telescope.jpg'
keywords: ['interview', 'functional programming']
---

Even though you can get far with JavaScript's native functionality, eventually you'll find yourself writing little utilities to make it easier. For this reason, we have libraries such as [Lodash](https://www.npmjs.com/package/lodash), [Ramda](https://www.npmjs.com/package/ramda), and others.

In this interview, you'll learn about [Rambda](https://www.npmjs.com/package/rambda), a light Ramda alternative by [Dejan Toteff](https://twitter.com/self_refactor).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/fbfd7af236eb986e5877c46d44a93263?s=200" alt="Dejan Toteff" class="author" width="100" height="100" />
</span>

I am a full stack JavaScript and React developer at Comstream, based in Sofia, Bulgaria. I also work at my side project I Learn Smarter.
</p>

I started learning JavaScript two years ago, and I am still fascinated by the language and its ecosystem. I don't believe in the narrative that we should use JavaScript for everything and ignore that there are other languages out there. So I spend some of my free time learning Golang as it is both powerful and beginners friendly.

## How would you describe *Rambda* to someone who has never heard of it?

It is utility library which gives you useful methods without the price of large size and performance penalty.

## How does *Rambda* work?
Rambda doesn't have any external dependency - it is just plain JavaScript.

Its selling point lies in using `R.compose` to generate readable chain of actions:

```javascript
import R from 'rambda';

const getShortColors = R.compose(
  R.map(R.prop('color')),
  R.filter(val => val.color.length < 5),
  R.uniq
);
const data = [
  { color: 'blue' },
  { color: 'red' },
  { color: 'purple' },
  { color: 'red' }
];
const shortColors = getShortColors(data);
//=> ['blue', 'red']
```

Most of the methods can be curried, which gives the developer a choice how to call them:

```javascript
const addOne = R.add(1)
const foo = addOne(10) // => 11
const bar = R.add(1)(10)
const baz = R.add(1,10)
```

In terms of performance `R.add(1,10)` is faster, but code of type `R.add(1)(10)` is more readable with longer declarations.

## How does *Rambda* differ from other solutions?

Rambda doesn't offer the same freedom of expression as Ramda, as it focuses on covering a small but useful portion of the vast API of Ramda.

To illustrate the size difference in numbers - my custom Ramda build was 24.6 kB, while the same methods in Rambda take only 7.6 kB.

Also, Rambda has better performance when [benchmarked against Ramda and Lodash](https://github.com/selfrefactor/rambda#benchmark). You can run the benchmark yourself by cloning Rambda repository and the running `npm i && node benchmark`.

The main reason for the better performance is that Rambda methods only need to take care for currying and execution, while Ramda and Lodash methods cover more use cases. Therefore they have more elaborate boilerplate around the actual execution, which results in slower performance.

We can see an illustration of that in the code of `find` method of Ramda, Lodash, and Rambda.

**Ramda:**

```javascript
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfind = require('./internal/_xfind');
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
```

**Lodash:**

```javascript
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, getIteratee(predicate, 3), index);
}
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = getIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}
const find = createFind(findIndex)
```

**Rambda:**

```javascript
function find(fn, arr){
  if (arr === undefined) {
    return holder => find(fn, holder)
  }

  return arr.find(fn)
}
```

## Why did you develop *Rambda*?

I was happy to use Ramda, but not so satisfied with its size.
So I explored the idea to recreate my favorite Ramda methods with less code, and this is how Rambda became to be.

## What next?

I believe that regular commits are a sign of a healthy library.
So I do some upgrades when I see a limitation in the current state of Rambda. The latest one was adding type "Async" as a return value of `R.type` for recognition of async functions.

Also, I have a plan for separate documentation site, as now browsing the documentation in not as convenient as it can be.

## What does the future look like for *Rambda* and web development in general? Can you see any particular trends?

With speed JavaScript is growing regarding API, such libraries will get less useful. They are currently needed just because native JavaScript doesn't yet offer this functionality.

As for the current trends - I like that Vue is the new hype child, as this shows that developers prefer simpler solutions over complicated ones such as Angular 4.

I still don't like Vue, and I considered a big step back compared to React, but I understand why some developers like it.

## What advice would you give to programmers getting into web development?

Read all of the **You don't know JS** books and watch some **Kyle Simpson** videos - the guy has the talent to educate.

Don't underestimate the complexity of CSS - it is a real language, and it requires proper attention.

Check PostCSS before jumping to LESS or SASS camp - it exists for a reason.

Don't write a single line of front-end code without **webpack** - the excuse that it is hard is thin.

Read the API of another language than JavaScript as this could help you better understand the high points of JavaScript.

## Who should I interview next?

[Dave Brotherstone](https://github.com/bruderstein), the author of [unexpected-react](https://www.npmjs.com/package/unexpected-react) and founder of ReactJS meetup in Hamburg. He is one of the reasons why I made the switch from Angular 1.X to React.

## Conclusion

Thanks for the interview Dejan! I think Rambda is a part of the current trend towards micro-libraries. The trend has been visible especially in front-end UI libraries for a while.

Interestingly bigger libraries try to solve this in their own ways (Babel plugins etc.) though you still have the requirement problem (more cases to support).

Learn more about Rambda at [Rambda's GitHub page](https://github.com/selfrefactor/rambda).
