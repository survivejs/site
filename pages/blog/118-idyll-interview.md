---
title: "Idyll - Narratives for the web - Interview with Matthew Conlen"
date: 2017-08-21
headerImage: "assets/img/idyll.jpg"
keywords: ["interview", "react", "visualization"]
editors: ["bebraw", "karlhorky"]
---

Since the early days of the web, people have wanted to visualize data to share with others. Even though the platform provides something basic for these purposes (i.e., tables, images), typically some amount of programming has been required.

[Idyll](https://idyll-lang.github.io/) by [Matthew Conlen](https://twitter.com/mathisonian) is a tool designed to make data visualization in documents easier.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e7129cf31550559f7eb9757cfbeea1d1?s=200" alt="Matthew Conlen" class="author" width="100" height="100" />
</span>

I'm currently working on my Ph.D. with [Jeffrey Heer](https://homes.cs.washington.edu/~jheer/) at the [Interactive Data Lab](https://idl.cs.washington.edu/) at the University of Washington. Prior to grad school I worked on data visualization tools and interactive stories at [FiveThirtyEight](http://fivethirtyeight.com/), helped [the Freeman Lab](https://www.janelia.org/our-research/former-labs/freeman-lab) build open-source tools for computational neuroscience, developed digital tools for journalists at [The Huffington Post](http://www.huffingtonpost.com/), and was the senior developer at [Rhizome](http://rhizome.org/).

</p>

## How would you describe _Idyll_ to someone who has never heard of it?

Idyll is a markup language for creating and publishing interactive narratives — think posts on websites like [_Distill_](https://distill.pub/), [_The Upshot_](https://www.nytimes.com/section/upshot), [_FiveThirtyEight_](https://fivethirtyeight.com), and [_The Pudding_](https://pudding.cool/). With Idyll you write markup in a text file, which is then compiled into an interactive webpage. Idyll takes a lot of inspiration (and borrows a lot of syntax) from [Markdown](https://daringfireball.net/projects/markdown/), while trying to extend these ideas beyond static text.

One of the main points of Idyll is to make it very easy to embed JavaScript components inline with your text, and even have these components responsively update based on a reader's actions or scrolls. For example, a short Idyll file might look like this:

```markdown
# This is my title

### This is my subheading

This is the main body of my article. Here is a scatter plot, rendered with JavaScript:

[data name:"exampleData" source:"example-data.csv" /][chart type:"scatter" data:exampledata /]

And here is some more text after the chart.
```

In this example:

- the Markdown will be converted to HTML
- a dataset will be read from the `example-data.csv` file using the `[data /]` tag
- the `[Chart /]` component will call out to JavaScript to render the contents of the CSV in a scatter plot

Idyll ships with a [set of standard components](https://idyll-lang.github.io/components-built-in) that can be invoked in the markup. Because Idyll is built on top of [React](https://facebook.github.io/react/), any React component can be installed from `npm` and used without any additional configuration. It is also straightforward for users to write their own [custom components](https://idyll-lang.github.io/components-custom).

Everything in Idyll is reactive, so when anything changes the document automatically updates. For example, if we wanted to have a chart toggle between a scatter and a line plot, we could add a variable that changes when a button is pressed:

```markdown
[var name:"showScatter" value:true /]

[Chart type:`showScatter ? "scatter" : "line"` data:exampleData /]

[Button onClick:`showScatter = !showScatter`] Toggle Scatter [/Button]
```

## How does _Idyll_ work?

As is typical with any programming language, Idyll starts with a compiler that does lexing and parsing of the input file. We rely heavily on existing open-source tools to help with this task, namely [lex](https://github.com/aaditmshah/lexer) for the lexing and [nearley](https://github.com/Hardmath123/nearley) to do the parsing. The compiler then spits out an _abstract syntax tree_ (AST) that represents the hierarchy of elements that belong in the document.

Once the AST is created, Idyll processes it to see which components are used and uses Browserify to create a JavaScript bundle that can be executed in a web browser. This JavaScript bundle includes a React component that will dynamically map the nodes in the AST to React components and render those components as its children.

Part of this mapping process involves generating and executing some JavaScript code to make sure that Idyll's reactive variables work and the document is always re-rendered properly as those variables change.

One cool thing is that because Idyll's compiler is written in JavaScript, we can [execute this whole build process in the browser](https://idyll-lang.github.io/editor/).

## How does _Idyll_ differ from other solutions?

The typical process for creating interactive documents or [explorable explanations](http://explorabl.es/) involves hand-writing a lot of custom JavaScript and HTML. It can quickly become tedious balancing the narrative portion of the project with the nitty-gritty details of the code. To this end, the New York Times developed [ArchieML](http://archieml.org/), a markup language designed to make it easy to pull text into JavaScript code.

A core idea with ArchieML is that code and text should be separated because they deal with very different concerns. Text needs to be edited for content and clarity, often by someone who doesn't care to look at the code. Developers will need to integrate that text with their code at some point but typically aren't concerned with grammar while they are writing JavaScript.

In some ways, Idyll takes the opposite approach to ArchieML. Instead of making it easy to pull text into code, Idyll makes it easy to include JavaScript components in a text. With this approach, the relationship between code and text becomes much easier to reason about from an editorial perspective, and it becomes feasible to make nuanced changes to where components appear in the text, and how they interact with the page. In this way, the process of including an interactive component becomes much closer to, say, using a CMS to embed an image in a post.

Another project that addresses combining code and data with text is [Stencila](https://stenci.la/). Stencila borrows ideas from the "code notebook" world and focuses on embedding executable code with text. My understanding is that the project is focused on reproducible research, whereas Idyll is focused on streamlining the connection between prose and JavaScript to build interactive narratives.

There are lots of projects that make it easy to publish Markdown documents online ([Jekyll](https://jekyllrb.com/), for example), but none of these allow JavaScript to be tightly integrated with the text.

## Why did you develop _Idyll_?

I developed Idyll as a way to automate away an entire class of hardships that authors face when they want to publish documents with interactivity. The project is a synthesis of a lot of ideas and lessons learned from developing these sorts of projects at FiveThirtyEight and elsewhere.

Because Idyll has a fairly specific use-case, it can encapsulate some best practices. For example, it enables server-side rendering and other performance optimizations by default and allows the developer to avoid the headache of setting up a JavaScript build system and HTML templates.

I believe that the web is a great platform for communication and we are only now starting to see some of the potential of moving beyond static text. With Idyll I hope to make it easier for other people to express their ideas in a dynamic and engaging way and publish them online. The project also has implications beyond just blog posts and news articles, such as providing a new entry point into the authorship of interactive textbooks.

## What next?

I'll continue to focus on Idyll's user friendliness and expanding the online examples that serve as a reference for new projects. I'm also interested in improving the authorship experience for interactive and data heavy websites in general, so you can expect to see continued work in this area specifically.

Regarding new features for Idyll, one big item on the roadmap is enabling custom transformations that operate on the AST. Doing this would allow new possibilities such as writing components that call out to another program at compile-time to generate new static output, for example, calling `graphviz` to produce an image of a graph.

We may also add some syntactic sugar to make certain common tasks even easier. In addition to that, we've been working hard to modularize the individual components of Idyll to make it easier for others to work with Idyll in their projects.

## What does the future look like for _Idyll_ and web development in general? Can you see any particular trends?

It is an exciting time for web development. The number of powerful technologies at developers' disposal continues to increase. I would expect that the JavaScript developer's toolkit for building and deploying code will continue improving in sophistication and optimization. I'm optimistic that build tools will become easier to set up and use once more consensus has been established within the community around certain features.

Thanks to the persistence of the open-source community, the amount, and quality of web tooling continue to rise. I'm excited to see further development and advancing maturity of these tools that empower creation.

## What advice would you give to programmers getting into web development?

Focus on solving a problem that is interesting to you instead of wading through tutorials. Learn to use Google to solve problems as they come up. Use things like [budo](https://github.com/mattdesl/budo) to get up and running quickly and don't bother listening to people who argue about tools online. Don't use a framework until you can articulate why you need a framework.

## Who should I interview next?

There's lots of interesting work being done in the WebGL / 3D graphics space. [Mikola Lysenko](https://github.com/mikolalysenko) is doing great work with [regl](https://github.com/regl-project/regl), and [Ricky Reusser](https://rreusser.github.io/) has been using it to make some excellent [data visualizations](https://github.com/rreusser/demos#regl). [Stardust.js](https://stardustjs.github.io/) is also an exciting project for using WebGL to visualize data.

The work on decentralization from folks working on projects like [Beaker Browser](https://github.com/beakerbrowser/beaker) and [Dat](https://datproject.org/) is also exciting.

## Any last remarks?

The Idyll folks are usually hanging out in a [chatroom on gitter](https://gitter.im/idyll-lang/Lobby). It's easy to join, and we're always happy when people say "Hi" or ask questions about the project. I'd also like to call out [Ben Clinkinbeard](https://benclinkinbeard.com/) for all the hard work he has done on the development of Idyll.

Thanks for having me! ✨

## Conclusion

Thanks for the interview Matthew! I love the fact how Idyll makes it easier for people from different domains to collaborate.

[Learn more about on their site](https://idyll-lang.github.io/). [Check out Idyll GitHub page](https://github.com/idyll-lang/idyll) as well.
