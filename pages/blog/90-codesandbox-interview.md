---
title: 'CodeSandbox - Online React Playground - Interview with Ives van Hoorne'
date: 2017-04-24
headerImage: 'assets/img/sandbox.jpg'
keywords: ['interview', 'react']
---

Getting started with React can be daunting especially if you want to understand the entire setup. Solutions like [create-react-app](https://www.npmjs.com/package/create-react-app) have hidden a lot of this complexity. But there's more to it.

[CodeSandbox](https://codesandbox.io/) by [Ives van Hoorne](https://twitter.com/Ives13) pushes the problem online. Instead of setting up a React project each time you want to experiment, you can use his service instead. Read on to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://avatars1.githubusercontent.com/u/587016?v=3&s=460" alt="Ives van Hoorne" class="author" width="100" height="100" />
</span>

My name is Ives van Hoorne; I'm a Computer Science student at the [University of Twente](https://www.utwente.nl/en/) and a part-time developer at [Catawiki](https://catawiki.com). I worked there full-time last year, at that time I was responsible for converting the website to React.
</p>

Though I like all kinds of programming, I've been especially attracted to frontend the last few years, mostly because it's also a bit artistic. I get a lot of satisfaction from building user interfaces that people both find beautiful and easy to use.

## How would you describe *CodeSandbox* to someone who has never heard of it?

[CodeSandbox](https://codesandbox.io) is an online editor for web development projects. It automates things like transpiling, bundling and dependency management for you so you can easily create a new project with a single click. The editor also has a live preview so you can see the results of your work while you type.

Sharing is very easy; you can just share the URL of your project or embed it in an iframe. Others can then fork it to edit the project to their liking. CodeSandbox currently has a focus on React projects, which means that it supports features like downloading to a `create-react-app` template.

This is an example of a project on CodeSandbox, it's the classic TodoMVC example in Redux:

<iframe src="https://codesandbox.io/embed/voz37vLG5" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## How does *CodeSandbox* work?

CodeSandbox at its core consists of two parts: the editor and the preview. The editor is the whole CodeSandbox application (file manager, code editor, dependency settings) and the preview is the result you see on the right. These two parts are very decoupled and only communicate using [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). The preview is on a subdomain (`sandbox.codesandbox.io`) in an iframe to literally 'sandbox' the preview away from the main application.

![Editor vs. preview](assets/img/codesandbox/preview.png)

The editor sends all its files, directories and dependencies to the preview; this either happens when the user changes something or when the application loads. The preview then takes all these files and processes each type using different loaders, which currently is either CSS, JavaScript, JSON, or HTML. These loaders can be very simple, the JSON loader, for example, is only a one-liner:

```javascript
export default module => JSON.parse(module.code);
```

The JavaScript loader is by far the most interesting since this loader also has to transpile, require and cache the result. It first transpiles the code using `babel`; then it evals the transpiled code with a stubbed `require` function.

This `require` function just takes a path, checks if this is an npm dependency or a file and handles it again with the loader for that extension. Every result is cached, so most of the time only the edited file is evalled again after a change.

The output of the loader goes through a `boilerplate`, this boilerplate is determined by the output. A boilerplate simply is a separate file that does something with the loader output, for example, the boilerplate for a returned React components is:

```javascript
import React from 'react';
import { render } from 'react-dom';

// domChanged is a boolean which specifies if the module
// has done something to the DOM while it was evaluated
export default function(evaluatedModule, domChanged) {
  if (!domChanged) {
    const node = document.createElement('div');

    document.body.appendChild(node);

    render(
      React.createElement(evaluatedModule.default),
      node
    );
  }
}
```

This boilerplate renders the output of a React component to the DOM if it doesn't change the DOM at all.
I want to make it possible for others to build and share loaders/boilerplates as well, but this requires some thinking because we still want to support `create-react-app` interoperability.

The npm dependencies are handled by a separate server; I call it the 'bundler'. The editor sends the list of dependencies to it, the bundler then creates a UMD build of this combination using webpack 2 and sends an object containing the URL and the manifest back.

A manifest is an object with a mapping from dependency name to module number, so the JavaScript loader knows which module to load from the UMD build when a dependency is required.

## How does *CodeSandbox* differ from other solutions?

CodeSandbox is one of the few editors that supports npm dependencies and multiple files/directories. It also handles almost everything in the browser, which allows us to show real-time feedback without any server communication.

That is a feature-wise difference, but I think the real difference compared to other editors is the goal. We want to make it possible to let others import your sandbox as a dependency. This way you can't only edit others work, you can use it in your projects. The feature hasn't been fully implemented yet; I still need to finish the UI for it.

## Why did you develop *CodeSandbox*?

I started to think about CodeSandbox last summer when I was on holiday in St. Ives. Several colleagues asked me questions about the React project we've been working on, but there was no easy way for me to answer them. The questions were either related to a library or were so complex that it was very hard to show in, for example, Codepen.

That's when I started thinking: 'man, it would be great just to have an online editor that could do this'. I began working on this in my spare time and eventually, my friend Bas Buursma joined me.

## What next?

I'm currently working on more support for users and sharing. Specifically, I'm building the profile view right now; here you can showcase your sandboxes and see statistics like how many times your sandboxes were forked and how many views you got.

It also includes a very requested feature: deleting sandboxes. Deleting is currently impossible and also very irritating, I have 38 sandboxes right now, and I would love to delete the junk ones.

This is the current design for the new profile view:

![Profile view design](assets/img/codesandbox/profile.png)

After we have better support for searching and sharing sandboxes within CodeSandbox, I can work on 'import as library'. I'm excited about that feature and would love to build it sooner; it's just that I first need to build the foundation for it.

I'm also exploring ways to use your editor for building things on CodeSandbox; I'm looking at things like setting CodeSandbox as git remote/Github integration or making it possible to sync local files. Syncing is still very vague and unexplored though, so nothing is sure on this.

## What does the future look like for *CodeSandbox* and web development in general? Can you see any particular trends?

In this dynamic world, it's very hard to speculate on what direction we're going. I think that React and other web application frameworks, like Vue, will gain a lot more mainstream adoption this year.

I've seen a big increase of interest in Vue and many companies are moving to React lately. The interest automatically means that more people will go to CodeSandbox, either to learn, try something out or to build an example for asking a question.

My big question is if people will use CodeSandbox to build projects on, either to share or to start something serious. So to summarize it: I think web frameworks, and as a result CodeSandbox will grow a lot, the big question for CodeSandbox is what direction this will be.

## What advice would you give to programmers getting into web development?

Try not to get overwhelmed! That's easier said than done, so if you do get overwhelmed by a task, it's smart to divide it into smaller, more manageable sub-tasks. Take it step by step.

I also recommend learning by just starting a personal project. Building something that you like and can share is a great motivation, and that motivation helps to overcome so many hurdles along the way.

## Who should I interview next?

Christian Alfoni, the creator of WebpackBin (now defunct) and [Cerebral](https://cerebraljs.com/). It has been a blast working with him. He is close to releasing a new version of a state controller called Cerebral.

T> **Editor's note:** I [interviewed Christian earlier about Cerebral](/blog/cerebral-interview).

## Any last remarks?

I learned React via SurviveJS! Great book and helped me a lot with understanding React.

## Conclusion

Thanks for the interview Ives! It's nice to see services like this to appear as they take so much pain out of the process and enable quick experimentation. Maybe one day web development goes to the web entirely.

Be sure to give [CodeSandbox](https://codesandbox.io/) a go.
