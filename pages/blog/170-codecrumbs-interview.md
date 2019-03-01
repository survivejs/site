---
title: 'Codecrumbs - Document a Codebase by Breadcrumbs - Interview with Bohdan Liashenko'
date: 2019-03-01
headerImage: 'assets/img/codecrumbs.png'
keywords: ['interview', 'maintenance']
---

Developers spend most of their time reading and understanding code. That said, not much has changed in the past decades in the way we do it. Perhaps the IDEs have become smarter but we still use roughly the same techniques as before. I prefer to jump around code and perform regular searches against it to understand how everything goes together.

[Bohdan Liashenko](https://twitter.com/bliashenko) thinks there's room for improvement. As a result he developed [Codecrumbs](https://codecrumbs.io/), a specific tool addressing the problem.

T> Bohdan is one of the speakers at [React Finland 2019](https://react-finland.fi/). The presentation will be available later in a video format.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/804af8ce541ac3ed54876cef0de9c19a?s=200" alt="Bohdan Liashenko" class="author" width="100" height="100" />
</span>

I am a frontend developer at 0+X, a consultancy firm based in Stockholm. I moved to Stockholm several years ago; originally I am from Kyiv, Ukraine. I created several well-accepted open source projects: [codecrumbs](https://github.com/Bogdan-Lyashenko/codecrumbs) (a tool for learning a codebase), [js2flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart) (a library to convert code into flowchart), [Under the hood ReactJS](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS) (a book which explains ins and outs of React).

</p>

Currently, I study a lot about technical constraints and human-factor when it comes to building software products. I am passionate about software delivery processes and believe there is still room for improvements.

## How would you describe _Codecrumbs_ to someone who has never heard of it?

Every time I joined a project or started digging into an unknown source in the past, I caught myself thinking that I am just jumping mindlessly between files, often opening the same file several times realizing that I've already seen this or that I just saw this place.

I realized I needed a tool to mark essential places in a codebase; I wanted to automate the "pencil and paper" approach we all use when trying to understand the big picture of how things work together inside our code. That's why codecrumbs exists. Codecrumbs is a visual tool which helps to understand a codebase.

The name "codecrumbs" is derived from “code” and “breadcrumb”, since the main idea is to control visual state by writing down comments (breadcrumbs) in your big code-maze (a reference to "Hansel and Gretel" story).

Codecrumbs offers many features when it comes to learning a codebase:

* **Trail of breadcrumbs** - a sequence of codecrumbs can be used to describe a data flow (e.g., user login or form submit, etc.)
* **Dependency tree** - generate a dependency tree for an entry point. You can select connections and see “what is imported” and “its implementation”.
* **Flowchart** - builds SVG flowchart of selected file code
* **Multi-codebase integration** - helps to study connections between several codebases (sub-modules).

On top of that, there is multi-language support (JavaScript, TypeScript, Python, Java, etc.) and the ability to share your findings with others by handy export and import feature.

![User interface of Codecrumbs](assets/img/codecrumbs.png)

## How does _Codecrumbs_ work?

Codecrumbs is a client-server application with communication via sockets. When you run `codecrumbs` command for a codebase, the server analyzes the project code and looks for comments containing “codecrumbs” (i.e., comments which starts with 'cc'), collects them and sends them to the client (running in a browser). The client imposes codecrumbs on the project files structure and draws an SVG image.

There is support for “live updates”, so the process of use may be as follows: on one monitor — your code editor, on the other — the browser tab with the “codecrumbs” client. Write a comment — the scheme is rebuilt on the fly. Everything is implemented with JavaScript: server is Node.js and the client is built with React and Redux.

## How does _Codecrumbs_ differ from other solutions?

There are no similar solutions. :) But if we take for example other tools for code documentation, they are either help to describe low-level code entries (functions signatures, classes APIs, etc.) or high-level ideas about code architecture without connection to the source code.

Having either alone is not enough - on the one hand, you miss the big picture, and on another hand you know big picture but can't map it on the actual source code.

_Codecrumbs_ is precisely in between - it glues together code lines and source files with abstractive architecture. You can understand how a particular feature works from the first glance, and if you need to fix something or add new behavior there, you already have all handles where to look for in the source code.

## Why did you develop _Codecrumbs_?

I was frustrated with how inefficient we are when it comes to maintaining a big codebase. Especially with legacy code. Especially when you just joined a new project and feel hopeless for the first few months until you get thoroughly familiar with a codebase.

According to the survey conducted by Stack Overflow last year, here's how we expect a newcomer to get up to speed with a codebase:

* 30% less than a month
* 44.7% one to three months
* 17.4% three to six months

I believe these numbers are ridiculous. Well, they are fair, but I think we can do better, I think we don't make enough effort to solve the problems related to learning existing source code, and I am trying to change that with _Codecrumbs_.

## What next?

Well, it's just a beginning.

Codecrumbs allows us to learn, document and explain a codebase much faster. Also, with Download & Upload feature it becomes super easy to collect and share your “investigation results” with others.

The ultimate goal is to have many case studies hosted at the [Codecrumbs site](https://codecrumbs.io) so people can learn collaboratively with real-world examples.

More cool features are coming, stay tuned!

## What does the future look like for _Codecrumbs_ and web development in general? Can you see any particular trends?

I can see new frameworks and libraries, or, even new languages (TypeScript, Elm, Reason, ClojureScript, Dart) being created all the time, to help developers to do the same thing — to write down application logic. But do we need that one more framework, which will help us to describe application logic a fraction better than we’ve been doing already?

Maybe we do, don’t get me wrong, I like constant improvements in existing frameworks, and I love new frameworks and tools being created, but, I don’t think we should spend all our energy and give all our attention only to that.

As an industry, we are too much obsessed with how do we write code; we want to make the writing process perfect, while the way how do we read code is left entirely behind.

We don’t write code in the vacuum, almost always we instead edit or extend existing codebase than adding new features on the blank page. I believe that Codecrumbs has potential to show an excellent example of what you can achieve being more aware of the entire state of your application and how you can use that knowledge to change your product delivery and influence the world of software development as a whole.

## What advice would you give to programmers getting into web development?

The amount of technologies and "buzzwords" is overwhelming here, but try to be sober about that. In the end - you need to submit a form or show a popup. There are hundreds of ways to do so, pick the one you know, align it with team and release.

Make it work, make it fast, make it beautiful. We (mostly) don't do rocket-science, so there is no need to over-think minor problems. Apart from doing something useful, **the primary requirement for the code you write is to be good for a change you will need to do tomorrow.**

## Any last remarks?

Thanks for the interview, that was fun. :D

## Conclusion

Thanks for the interview Bohdan! It's great for me to see solutions to appear in the space of maintenance as it feels underappreciated. We put a lot of effort into developing solutions for generating code but not so much into understanding it.

T> To learn more about Codecrumbs and to try it out, [head to Codecrumbs site](https://codecrumbs.io/) and [also see the project on GitHub](https://github.com/Bogdan-Lyashenko/codecrumbs).
