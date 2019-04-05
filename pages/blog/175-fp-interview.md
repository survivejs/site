---
title: 'Functional Programming - Interview with Arfat Salman'
date: 2019-04-05
headerImage: 'assets/img/function.jpg'
keywords: ['interview', 'functional-programming']
---

If there's one programming style I like a lot, it's **functional programming**. Although it's not the best fit for all problems, often having means to decompose a problem into smaller parts to be solved separately through composition has proven to be useful.

In this interview with [Arfat Salman](https://twitter.com/salman_arfat), you'll learn more about the topic and how uses the technique in his daily work.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/879f2f512c354bb26c0af0a274a1a032?s=200" alt="Arfat Salman" class="author" width="100" height="100" />
</span>

I graduated from the University of Delhi in Computer Science. Currently, I am the Director of Education at Pesto. I began as a Web Developer here, and since then I’ve taken more responsibility towards making other engineers better by helping and training them. I have a strong interest in Computer Science in general. Particularly in Artificial Intelligence, Recommendation Systems, Natural Language Processing, Compilers, and Algorithms.

</p>

In my spare time, I like to learn human languages. I learned Spanish as my 4th language (apart from Hindi/Urdu/English). Currently, I am trying to learn Japanese. I hope to learn Mandarin someday. I also co-organize and host a Spanish Meetup in Delhi in association with Duolingo.

I love teaching about computers, speaking at conferences, tea and reading lots of books, especially science fiction.

## How would you describe _Functional Programming_ to someone who has never heard of it?

Any language or style exists to give shape and structure to our thoughts. In the case of Functional Programming (FP), it is a particular set of ideas to structure our thought processes while programming. Once you face a specific programming problem, you may solve it using multiple approaches. FP is one of those ways. FP has its own set of constraints and guidelines and FP recommends that (among many other things):

* All variables should be immutable
* Loops should be implicit or use recursion instead of manual C-style `for` loops
* Functions and their composition should do the heavy lifting in achieving the solution as opposed to object-based inheritance (as in OOP paradigm)

In essence, in FP, while coming up with a solution, we mostly think about **what** to do as opposed to **how** to do it. In the broader sense, focusing on function composition is what functional programming is.

Consider the following program squaring a list of numbers:

```js
// Imperative/Procedural  Style
function square(arr) {
  const result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }

  return result;
}

// functional style
const square = arr => arr.map(el => el * el);
```

In the procedural style, we mention _"how"_ to achieve the computation via a C-style `for` loop. We keep track of loop counters, the termination condition, and the increment expression. We also manually populate the result by pushing in the `result` array. Finally, in the body of the loop, we specify _what_ to do.

In a functional style, we only specified _what_ to do directly in the `map` function. The responsibility of looping, termination, and populating the result set is delegated to the `map` function itself.

It can be argued that the procedural style has more "moving" parts that a programmer needs to keep track of while reading the program. For example, `i < arr.length`, `i++`, `result.push(...)`. In the functional style, the cognitive load is arguably less, and the developer can only focus on the business logic (of transforming the input to output) at hand and not worry about maintaining the loop, for example.

Consider another example of reversing an array:

```js
// Procedural/imperative Style
const reverse = arr => {
  const reversedArray = [];

  for (let i = arr.length - 1; i > -1; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

// Functional style (using recursion)
const reverse = arr =>
  arr.reduce((reversedArray, current) => [current, ...reversedArray], []);
```

In the procedural implementation, we had to consciously be aware that the initialization is not from `0` but `arr.length`, we have `i > -1` in termination condition rather than the usual `i < arr.length`, and `i--` rather than usual `i++`. Whereas in the functional style, we didn't have to think about those things at all. We use established functions such as [fold](https://en.wikipedia.org/wiki/Fold_%28higher-order_function%29) (aka reduce) to do the heavy lifting.

### Haskell

Here's the same program, but even more succinctly written in [Haskell](https://www.haskell.org/):

```haskell
reverse = foldl (flip (:)) []
```

FP style is a lot like learning a new spoken language. We need to begin thinking in the other language using its grammatical constraints and cultural contexts. FP style is often symbol-heavy, and some syntax may seem unnatural.

It does take a little bit of time to master it. As our programming vocabulary expands with practice, it'll become easier to understand programs like these even if we don't have any prior experience with the language in question.

### SQL

Most web developers already are intuitively familiar with declarative languages (of which FP is a part) without realizing it. SQL(Structured Query Language) is mostly declarative, though it supports other paradigms too. Here’s an example:

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

In this, we only mention what we want the computer to do. Namely, to print `OrderID`, `CustomerName`, and `OrderDate` of all orders after merging tables `Orders` and `Customers` based on the `CustomerID`. _We never specify how to merge two tables or how to select individual rows._

### CSS

CSS is also very declarative (though it is not considered a full language). Here’s an example:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

In this simple example, the `slidein` animation styles the `<p>` element so that the text slides in from off the right edge of the browser window. We have only specified the “_start_” and the “_end_” state of the animation. The intermediate steps are calculated by the browser, and this is true for almost all CSS properties. We never specify **how** to achieve the effect of a style, but only **what** effects to have.

### _Functional Programming_ - A Different Way of Thinking

FP is often contrasted with the imperative style of languages such as C and Java. None of the styles are objectively better than the other. They are just different ways of expressing the same solutions and within relevant real-life constraints (such as efficiency and correctness), one style may trump the other. However, I can assure you that learning FP will be worth all that time.

## How do you use _Functional Programming_ in your daily development?

I use JavaScript in my day-to-day tasks. Given JS’s functional heritage, I often try my best to use pure functions and functional composition to achieve a given task. I begin by making all variables const by default. Then I apply a set of transformations and transform the input values to the desired output.

I substitute most loops with `Array.prototype.map` and/or `Array.prototype.filter`. I try to incorporate libraries like Ramda as well. I do resort to imperative style once in a while. However, I am conscious of that fact, and I mark that piece of code so that I can come back to it later after some research and see whether I can refactor the code. I am often able to refactor such programs for the better.

At Pesto, we use [ReasonML](https://reasonml.github.io/) for the frontend and most of our product is written in it.

## How does _Functional Programming_ differ from other solutions?

FP has some strict rules that are based in mathematics. It's a marked departure from the “replace the content of a location with updated values” style of solutions. Rich Hickey (creator of Clojure) called it **PLOP** for _PLace Oriented Programming_ in his talk “[The Values of Values](https://www.youtube.com/watch?v=-6BsiVyC1kM)”.

Given the strictness of its rules such as pure functions, no [side effects](https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29), no mutability, and statelessness, the compiler can optimize our programs and make it more efficient. In some cases, the compiler can also check and verify the correctness of our code. For more reasons, see the next answer.

## Why to learn _Functional Programming_?

_Why not to?_ Even if one believes that FP has no practical use, I recommend learning it. Learning FP will give you a new perspective, and this will help you in expressing solutions in your current language better, whatever that language may be.

If you know only one style of programming(or just one language), then you can fall victim to the "law of instrument" cognitive bias. It says that "_if all you have is a hammer, everything looks like a nail_". And for that matter, do not stop at FP. Go ahead and learn other styles too.

[Alan Perlis](https://en.wikipedia.org/wiki/Alan_Perlis) once said:

> _A language that doesn't affect the way you think about programming, is not worth knowing_.

And [Peter Norvig](http://norvig.com/) (Director of Research at Google and author of the book Artifical Intelligence) says to learn “_at least a half dozen programming languages_”, preferably of all styles. I wholeheartedly agree with Mr. Norvig and Mr. Perlis.

In any case, here are the concrete benefits of writing programs in a functional style.

### Better Error Handling

We often have to deal with `null` in our programs. It is often done via option types. The following Rust code takes a `guess` numeric string and parses it to actual integers:

```
let guess: u32 = match guess.trim().parse()
```

What happens when we get a string such as `"12a"`? Most languages will either return `null` (or equivalent) or throw an exception. We can check for the nullness in an `if` condition or wrap the line in a `try-catch`. However, we can forget to do that. Also, the compiler is not enforcing that check. In Rust, here's how we do it:

```
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => println!("String is not a number.");,
};
```

In most functional languages, `null` does not exist. Its concept is often implemented via something called Option type. In the above Rust code, we add a block that pattern matches on two types `Ok` and `Err` for successful values and errors respectively. If `parse` is not able to turn the string into a number, it will return an `Err` value that contains more information about the error. Also, if you forget the `Err` part or even the whole block, the compiler can issue a warning that you have potentially unhandled edge cases.

### Unit Testing and Debugging

Since every value is immutable, and side-effects are prohibited, a function can _only_ take the parameters and return a value based on those parameters. These types of functions are called **pure functions**.

You can test every function in your program only worrying about its arguments and the return values. It's this property that testers appreciate.

Because of the same reasons, debugging a functional program is easy. We can't modify global variables or alter values in another scope. All values are constants, and we can see how a function is transforming the input to output.

### Concurrency

A functional program is concurrent by default. While writing concurrent programs in an imperative language, we need to use thread locks to ensure that a shared piece of data is not modified by two threads simultaneously. Since immutability is baked into functional languages, nothing can change anything. No more deadlocks or race conditions.

### Machine Assisted Proofs and Optimizations

A pure functional language is based on strict mathematical theories of lambda calculus. The compiler can take a piece of code, and generate a more efficient version or check whether all the edge-cases have been covered or not.

As we saw in the “Better Error Handling” segment above, the compiler was able to catch whether you are handling the error or not. It is even possible to create tools that analyze our code and generate edge cases for unit tests automatically!

## What does the future look like for _Functional Programming_ and web development in general? Can you see any particular trends?

The software of today is becoming increasingly complex. Applications (such as WhatsApp) and games (such as Fortnite and PUBG) today are handling millions of concurrent users, and billions of bytes of data transfer per second.

### Increasing Complexity

Consequently, the programs comprising the software are increasing in complexity too. Also, software is being used in almost everything in the world, from mission-critical systems like rockets and heart pacemakers to general purpose appliances such as refrigerators and microwaves.

On the other hand, hardware is becoming faster and better every day. RAM capacity is increasing, and the number of cores on a processor is expanding. Displays are adding Ks to their resolution year after year.

### Challenges of Parallelism

It is becoming increasingly important to write extraordinarily robust and stable software that can exploit the parallelism of the processors and increased memory capacity efficiently. Programming languages, in general, are moving towards a style where more work is performed during compilation.

For example, Go has made expressing concurrent programs much more manageable than C/C++. Rust now combines functional features in a systems language. Immutability helps programmers not worry about inadvertent changes in one part of the code while modifying another one.

### New Environments

Webpack has allowed developers to use multiple resources without manually managing them. All these utilities allow programmers to think about the business logic at hand rather than the low-level details.

Web and mobile applications are going to get bigger and hopefully better. Concurrency and distributed systems are going to play an important role. Our languages (and hence our thoughts) would always change to take concurrency into account.

In web development, we should see the usage of Progressive Web Applications (PWAs) and better support for native-app-like applications based on Web Assembly. However, these should be taken with a pinch of salt as I can only speak from a limited perspective.

## What advice would you give to programmers getting into web development?

Keep learning! It may look like there’s a vast world out there, and it’s right for computer science and web development. But many people are ready to help you in every aspect. Super nice developers have put their articles, videos, and books, and software online for free.

There is a very supportive open source community that you can engage with and learn. Keep an open mind, be enthusiastic and don’t lose hope. You’ll get it. :)

## Any last remarks?

Thanks for the interview! I am always ready to help students and developers alike. Feel free to reach out to me. I write about JavaScript and web development on [medium](https://medium.com/@arfatsalman). You can also drop me a message on [Twitter](https://twitter.com/salman_arfat) or [LinkedIn](https://www.linkedin.com/in/arfatsalman/).

## Conclusion

Thanks for the interview, Arfat! I think you explained nicely why it's worth it to learn functional programming. I agree it's about expanding your vocabulary as a programmer. Often the ideas help you to decompose complex problems into easier to solve portions that might fit existing patterns already.
