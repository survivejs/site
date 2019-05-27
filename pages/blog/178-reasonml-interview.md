---
title: "ReasonML - Type safety with ease - Interview with Gabriel Rubens"
date: 2019-05-27
headerImage: "assets/img/reason.jpg"
keywords: ["interview", "reasonml"]
---

I've had the chance to observe the evolution of the [ReasonML](https://reasonml.github.io) ecosystem up close. For me, it seems to solve many pain points of the current JavaScript/TypeScript based web ecosystem by addressing many of the issues in the language itself.

To understand more, I am interviewing [Gabriel Rubens](https://twitter.com/fakenickels). His company has been using ReasonML in production for a while now, so I am curious to learn how it has worked out for them.

T> To learn more about ReasonML, I recommend checking out [ReasonConf](https://www.reason-conf.com). It's the first conference held on the topic, and it will be back in 2020! You should [check out the conference videos online](https://www.youtube.com/c/ReasonConf).

## Can you tell a bit about yourself?

![Gabriel Rubens|100|100|author](assets/img/interviews/gabriel.jpg)

I'm co-founder and Head of Tech at Astrocoders. We're a lean and fast software company focused mostly on everything related to financial, tax, and banking applications.

## How would you describe _ReasonML_ to someone who has never heard of it?

Try to picture how React would be with ECMAScript 2077. That's [ReasonReact](https://reasonml.github.io/reason-react/).

I genuinely believe ReasonML is the future for JavaScript developers wanting a more robust and safe language. For me, the four of the essential features of the language, that changed the way I code for the better, are:

* Incredible type system
* Exhaustive pattern-matching
* Algebraic Data Types (ADTs) and variants
* Generalized Algebraic Data Types (GADTs)

### ADTs and GADTs

ADT is a data type in ReasonML which allows you to specify what are the possible ramifications of a value carrying that type in the program. The approach is complementary to the pattern matching.

Consider the example below:

```clike
type person = | Teacher(string) | Student(string);

/*
** The most interesting part of this is that Reason can infer correctly
** the type of the argument `person` based on the pattern matching
** usage of it and that as you declared in `type person` the compiler
** will ensure you cover all the possibles cases. If you forget one
** it'll tell you which one you missed.
*/
let sayHello = person =>
 switch(person) {
  | Student(name) => "Hello, " ++  name
  | Teacher(name) => "Hello, professor " ++ name
 };

/*
** This is why "nullables" are not necessary for Reason. The presence
** or not of value can be encoded with an ADT/variant, and Reason
** already brings a built-in type for this called `option('a)`.
*/
let studentName: option(string) = Some("Nicole")
switch(studentName) {
 | Some(name) => "Hello, " ++ name
 | None => "No one to greet"
}
```

The above is extremely powerful as you can rely upon that the compiler will ensure all cases are covered. [According to the Reason documentation](https://reasonml.github.io/docs/en/variant#design-decisions):

> Philosophically speaking, a problem is composed of many possible branches/conditions. Mishandling these conditions is the majority of what we call bugs. A type system doesn't magically eliminate bugs; it points out the unhandled conditions and asks you to cover them.

The best thing is that this style of programming is 100% idiomatic in ReasonML, you can't translate this very well to JS or TS as they weren't built for this. You can, of course, try to keep the same idea but won't be quite the same thing.

**JavaScript:**

```javascript
const person = { type: "student", name: "Steven" };
const sayHello = person => {
  switch (person.type) {
    case "student":
      return `Hello, ${person.name}`;
    case "teacher":
      return `Hello, professor ${person.name}`;
    // There's probably a potential bug here without a `default` clause
    // as we can't ensure person.type will be always those two
  }
};
```

**TypeScript:**

```typescript
type personType = "student" | "teacher";
interface Person {
  type: personType;
  name: string;
}
const person: Person = { type: "student", name: "Steven" };
const sayHello = (person: Person): string => {
  switch (person.type) {
    case "student":
      return `Hello, ${person.name}`;
    case "teacher":
      return `Hello, professor ${person.name}`;
    // With strict mode on the TS compiler can catch typos and
    // possible undefined return if you forget a case
    // though it's not 100% idiomatic it is achievable
  }
};
```

GADTs are a more advanced usage of ReasonML to encode more complex logic into the type system, and you won't need the feature for the typical cases and most of the time you'll be just fine with normal ADT/variants.

T> [The primer by \_shrynx](https://sketch.sh/s/yH0MJiujNSiofDWOU85loX/) explains GADTs in a great detail.

## How does _ReasonML_ work?

Reason can be thought on as a syntax of the [OCaml](https://ocaml.org) language, which is mature by itself. OCaml is excellent because it's straightforward to hack to the compiler to target the compilation to other things that are not binaries/byte code, that's where [BuckleScript](https://bucklescript.github.io) (BS) enters in the scene. Bloomberg started BS as an alternative of js_of_ocaml with usage more familiar to JS programmers.

T> To learn more, read [the introduction to the ReasonML toolchain by @thangngoc89](https://khoanguyen.me/reasonml-toolchain/).

## How does _ReasonML_ differ from other solutions?

Compared to Elm and PureScript, ReasonML tries to be familiar enough to JavaScript developers without compromising OCaml lang features too much. BuckleScript also makes reusing existing JavaScript code easy, with great tooling for FFI/binding JavaScript modules.

## Why did you choose _ReasonML_?

We have been using ReasonML in my company for almost two years, and it was the best tech decision ever, we are shipping code with more confidence and without fear of refactoring for a lot of projects.

One of them is an automatized tax calculation platform for Brazilians and expatriates working in Brazil (http://lion.tax). It was because of this tax solution why we looked up for a tool that would ensure we wouldn't commit dumb mistakes with other people's money.

We try to open source our ReasonML tooling as much as possible. The most important ones that we are using internal are [ReForm](https://github.com/Astrocoders/reform/) for form state management with type-safe multi-type support and [BsReactNativePaper](https://github.com/callstackincubator/bs-react-native-paper) (which we handed over to Callstack, the creators of Paper).

## What does the future look like for _ReasonML_ and web development in general? Can you see any particular trends?

I think with the rise of TypeScript/Flow and other type systems tooling for the web, the general developer public is more open to these ideas. Some projects are being built right now with ReasonML that will change what we expect about creating multi-platform apps.

For instance, I believe [Revery](https://github.com/revery-ui/revery) is the evolution of Electron. [Esy](https://esy.sh/) also will change what you expect from a package management tool about the reliability of builds.

## What advice would you give to programmers getting into web development?

Don't try to learn everything at once, don't open all the links, and most important don't give up. It can feel quite frighting when you see the number of things you have to learn, but my tip is to try to build something and try to learn what is necessary for it, so when you come back to read the theories you'll have a better real-world context.

Also, try to contribute as much as you can to open source, it's where you are

## Who should I interview next?

I have a bunch of names in my head of great developers I know:

* [Diego Haz](https://github.com/diegohaz) - The creator or Reakit
* [Sibelius Seraphini](https://github.com/sibelius) - Relay advocate and contributor to the React Native community
* [Bruno Lemos](https://github.com/brunolemos) - Creator of devhub
* [Heliton Nordt](https://github.com/hnordt) - Advocate.
* [Khoa Nguyen](https://github.com/thangngoc89) - The creator of [sketch.sh](https://sketch.sh)
* [Alex Fedoseev](https://github.com/alexfedoseev) - The creator of re-formality and other libs from ReasonML

## Any last remarks?

> Apenas que busquem conhecimento

If you are more interested in all these I highly [recommend reading the v2 of Real World OCaml](http://dev.realworldocaml.org/), [watch this talk from Cheng Lou](https://www.youtube.com/watch?v=mVVNJKv9esE), and the [ReasonConf 2019 playlist](https://www.youtube.com/watch?v=ocBUpGC_Nbo&list=PLDLhOs9UV9w8ieADzBeUvv5LGD78r6yTH).

T> Also, we are always looking for talented people at [Astrocoders](https://astrocoders.com/), if you would like to know us more send as an [email](contact <at> astrocoders.com)

## Conclusion

I think ReasonML shows what JavaScript might become one day. That said, there's no reason to try it right now to see what you might be missing. The popularity of type systems seems to be rising especially thanks to the popularity of TypeScript.

ReasonML is an example of what you can achieve when you go far enough. The ecosystem is still emerging but it's not a bad time to look into the language!

T> [Check ReasonML site](https://reasonml.github.io) to get started!
