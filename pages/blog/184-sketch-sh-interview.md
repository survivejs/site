---
title: "Sketch.sh - Interactive ReasonML sketchbook - Interview with Nguyen Dang Khoa"
date: 2019-07-16
headerImage: "assets/img/sketchbook.jpg"
keywords: ["interview", "reasonml"]
---

Often learning a new programming language like [ReasonML](https://reasonml.github.io) can be an arduous process as you have to set up the environment and tooling before you can begin learning.

That's where [Sketch.sh](https://sketch.sh) by [Nguyen Dang Khoa](https://twitter.com/thangngoc89) comes in. It's an online service addressing the problem for Reason.

## Can you tell a bit about yourself?

![Nguyen Dang Khoa|100|100|author](https://www.gravatar.com/avatar/8378133c824f6d2fd4e89d98bd4e8d87?s=200")

Hey. My name is Nguyen Dang Khoa. I'm a freelancer from Viet Nam. I usually work on React.js/Node.js/ReasonML projects, and I built Sketch.sh.

## How would you describe _Sketch.sh_ to someone who has never heard of it?

You can think of _Sketch.sh_ as a notebook with an integrated code editor. You can execute ReasonML/OCaml code and get the results immediately.

## How does _Sketch.sh_ work?

OCaml has its own virtual machine called `ocamlrun` for executing the bytecode produced by `ocamlc`. Here is an overview of OCaml's compilation targets:

![OCaml compilation targets](assets/img/sketch.png)

[js_of_ocaml](https://github.com/ocsigen/js_of_ocaml/) is an OCaml-to-JavaScript compiler. _Sketch.sh_ works by using `js_of_ocaml` to compile `ocamlc` and `ocamlrun` to JavaScript and then executes user's input code by calling these tools.

## How does _Sketch.sh_ differ from other solutions?

Some solutions like [repl.it](https://repl.it), [nextjournal](https://nextjournal.com) offer the same functionality, but all the code execution is done server-side. They developed a special server infrastructure to handle this kind of work. With _Sketch.sh_, everything is executed inside the user's browser. _Sketch.sh_'s server is used for saving, handling authentication, and many other things.

## Why did you develop _Sketch.sh_?

ReasonML is a fully typed language with a strong inference engine so you rarely see any code annotations. This is a big problem when helping others with their bug/coding issues; I have to open the terminal, run the compiler each time. I created _Sketch.sh_ to reduce the friction when asking questions about ReasonML.

Currently, the process looks like this:

1. Hey, I have this coding issue. Here is a Sketch with runnable code, could you help me fix the bug?
2. Here is a new Sketch with that bug fixed.

How cool is that?

## What next?

I'm currently working on supporting BuckleScript and ReasonReact as well as improving SEO, discoverability of popular sketches.

## What does the future look like for _Sketch.sh_ and web development in general? Can you see any particular trends?

Becoming a developer is getting more comfortable every day since there are tons of tools that help you learn about web development without leaving the browser. I hope that _Sketch.sh_ will be part of that trend for folks who want to learn about ReasonML and web development in general.

## What advice would you give to programmers getting into web development?

Learn the basics first, JavaScript, HTML, and CSS. It will benefit you in the long run. Frameworks come and go, only the languages (JavaScript) stay. If you know JavaScript, you can adapt to any frameworks (React, Angular, Vue, Ember, and so on).

## Who should I interview next?

* [Leandro Ostera](https://twitter.com/leostera): I love his Reasonable Coding stream and his works on improving ReasonML documentation foundation.
* [Bryan Phelps](https://twitter.com/bryphe): He's building [oni2](https://v2.onivim.io/).
* [Ulrik Strid](https://twitter.com/ulrikstrid): He's a wizard when it comes to setting up Azure pipeline and automating the CI process.
* [Andrey Popp](https://sketch.sh): He's the main developer of [esy](https://esy.sh) - ReasonML native package manager. I can't imagine _Sketch.sh_ without it.

## Any last remarks?

If you're interested in _Sketch.sh_ or working on some challenging UI, come around and say hi at [@sketch_sh](https://twitter.com/sketch_sh).

## Conclusion

Thanks for the interview, Nguyen! I think _Sketch.sh_ is a great boon for people interested in Reason and also for those who want to support people learning it as it allows you to illustrate the usage of the language in a convenient manner.

T> You can [try Sketch.sh online](https://sketch.sh) and also [check out the code at Github](https://github.com/Sketch-sh/sketch-sh/).
