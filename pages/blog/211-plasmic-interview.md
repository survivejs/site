---
title: "Plasmic - The fast and fun visual builder for React - Interview with Yang Zhang"
date: 2020-11-16
headerImage: "assets/img/plasma.jpg"
headerAuthor: "TheDigitalArtist"
headerSource: "https://pixabay.com/illustrations/banner-header-electric-energy-1557847/"
keywords: ["interview", "react", "ui", "styleguide"]
---

Developing user interfaces with React tends to require effort and often it's done at the level of code. What if we could create user interfaces in the browser itself?

It's this question that we'll explore in this interview of [Yang Zhang](https://twitter.com/yaaang).

## Can you tell a bit about yourself?

![Yang Zhang|100|100|author](assets/img/yang.jpg)

I'm a software engineer currently working full-time on [Plasmic](https://www.plasmic.app/), which is a dream job for me - getting to build novel visual tools for users like myself. It's funny that I'm now deep in the front-end space because I came from a very backend-focused past life.

I used to study distributed database systems in my Ph.D. days, and I worked in applied machine learning at my last startup ([Infer](https://infer.com/)). I also used to work at big companies like Google and Microsoft, and now I'm all about tiny startups.

In any case, I did a lot of product engineering over the years, and so building surfaces that directly touch and empower end-users became my drug!

## How would you describe _Plasmic_ to someone who has never heard of it?

It's a tool for visually building components and full pages for any web app codebase!

You can use it merely as a no-code full-page builder that plugs into your codebase or use it to design low-level, complex, stateful components like autocompletes and date/time pickers.

One use case we're especially interested in is freeing up developers from requests from marketing, design, content teams, etc. These collaborators can instead directly create the things they want to see without being blocked by developers. Developers can, in turn, work on higher leverage things than pixel-pushing.

Plasmic is starting as a pretty technical tool since we've been focused on letting developers build low-level components. Still, we're actively making the service accessible to anyone. That way, it's as approachable as a [Squarespace](https://www.squarespace.com/) or [Wix](https://www.wix.com/) (but for your codebase). We're focused on making it scale well up and down this spectrum.

What you build in Plasmic can be consumed flexibly. You can generate actual React code into your codebase, or you can consume it like CMS content over an API - and more. The central point of Plasmic is about integrating into your arbitrary real-world codebase.

![Plasmic User Interface](assets/img/plasmic-01.png)

## How does _Plasmic_ work?

It's a browser-based tool, so it's easy to jump in and start creating things on any platform. What you're manipulating is the "real thing," the existing web platform (DOM/CSS/etc.), and not (say) vectors in WebGL or another medium, so what you see is what you ship.

You create your visual designs in Plasmic, and then:

1. Use the Plasmic CLI tool to generate a library of presentational components into your codebase (into your local git repo), or
2. Consume the content you designed via an API so that you can treat Plasmic more like a CMS (and not need to touch the codebase whenever the content is updated).

All the logic/behavior (state bindings, event handlers, etc.) are all done from your code, the usual way. So Plasmic isn't trying to reinvent programming, make your code via a GUI, impose any particular routing/state management, etc.

In the case of codegen, what Plasmic spits out for you is a library of presentational components. They take care of rendering what you designed in the visual tool. If relevant, they provide a flexible interface that lets you wire up any props you want to any element within the component.

For instance, if you're making a simple "new post" form in Plasmic with an input and a button, you'll be provided the PlasmicNewPost component that handles all the styling/layout/tags for you, and you can wire up your real state and event handlers like so:

```javascript
function NewPost({ onAdd, ...rest }: NewPostProps) {
  const [content, setContent] = useState("");
  const history = useHistory();

  return (
    <PlasmicNewPost
      {...rest}
      postContent={{
        autoFocus: true,
        value: content,
        onChange: (e) => {
          setContent(e.target.value);
        },
      }}
      postButton={{
        onClick: () => {
          onAdd(
            createPost({ content, createdAt: new Date() })
          );
          history.push("/");
        },
      }}
    />
  );
}
```

It's a simple example. As things go much deeper, with components supporting different variations across different states, the composition of components, responsive design, and more.

There's also a new feature within Plasmic called [Plume](https://www.plasmic.app/learn/plume/), which generates the _behavior_ of components for certain well-known component types. So you can create an arbitrary design for (say) a Slider component and then have that fully working and accessible without writing any code – undifferentiated work that is time-consuming and tricky to do yourself.

You can trivially create a bespoke design system this way. Everything is powered by the excellent [react-aria and react-stately libraries from Adobe](https://github.com/adobe/react-spectrum). They go very deep on accessibility and take it further than most libraries I've seen.

![Many different ways to design a slider, one of the component types Plume supports](assets/img/plasmic-02.png)

## How does _Plasmic_ differ from other solutions?

I'll compare Plasmic with a few categories in terms of _trade-offs_.

### Vector design tools

These are drawing programs, great for exploratory mockups. Plasmic is for building the real thing. The trade-off is that Plasmic is more complicated since it lets you express all of the nuance and complexity that comes with production - maintainable abstractions, element semantics and accessibility, combinations of states, more complex layouts, and so on.

### Drag-and-drop site builders

These are focused on static websites and are closed platforms. Plasmic focuses on flexible integration into arbitrary codebases and complex environments. The trade-off is that having full control of a closed platform is a faster way to build a simple end-to-end solution.

Plasmic is a better fit for complex projects with development teams or (for instance) JAMstack projects that unbundle into best-of-breed CMS, framework, hosting, CI, etc. Plasmic certainly isn't getting into the CI business, for example.

### Content management systems

You can use Plasmic-as-a-CMS - invoke the client in your site's codebase, and from then on; your content teams can start using Plasmic immediately. We don't try to replace any existing CMSes, and we're looking to build integrations with CMSes and other data sources so that you can directly design with the real data in the tool. (And then you can still consume the output via an API, so it's a bit like layering CMSes.)

### Design-to-code tools

These are one-shot code generators that let you copy/paste into your codebase - as soon as you add your logic, you diverge from the original generated code. Plasmic lets you iterate on the design and consume that continuously from your codebase.

The trade-off is that one-shot generated code can look more familiar since you can generate what looks like clean, hand-written code. While Plasmic can also run in this mode and produce such code to generates, it's then consumed as a library of components.

## Why did you develop _Plasmic_?

Two reasons:

1. Push the envelope on collaboration between developers and non-developers, such as designers and content teams. For instance, today, developers do the dirty work of recreating mockups manually using code, and designers are accountable for the developer's attention to detail on this grunge work. Once developers integrate Plasmic into their codebase, designers - and anyone else - can step in and directly edit what ships into production, and developers are freed up to do higher-leverage work.
2. Wanting better developer tools. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) are probably the most-used similar tool, but it focuses on debugging and not on authoring/editing. We wanted to see how far we could rethink developer experience with this. On this front, Plasmic, with its focus on just the presentational layer, is just the beginning.

## What next?

Plasmic is a very young project, so we have a ton of work to do.

But we are already starting to see production usage and fascinating use cases that we never anticipated, which is super exciting. The usage is across small and large companies. Our immediate focus is on fully supporting our budding community of developers and also designers.

I also mentioned above that we want to make the editor more streamlined and approachable to non-technical creators.

Another big project is code components - the ability to bring in your own existing React components into the editor.

But we want to cater our roadmap to the use cases that we see from our early adopters. So try out Plasmic and tell us what you would like to see! We would love to start a dialogue.

## What does the future look like for _Plasmic_ and web development in general? Can you see any particular trends?

For Plasmic itself, building interfaces like this is just the start. We want to take this further and empower folks to create things that are more dynamic and more end-to-end. Our north star is about dramatically simplifying and accelerating many more facets of building digital products.

## What advice would you give to programmers getting into web development?

Focus on the users, experience, and product goals you are ultimately serving. It's is one of the extraordinary things about front-end development generally, and its proximity to the user. (This proximity is what drew me to focus on the front-end in my career!)

## Who should I interview next?

I mentioned above that Plasmic's Plume component system leverages [react-aria](https://react-spectrum.adobe.com/react-aria) and [react-stately](https://react-spectrum.adobe.com/react-stately). I would encourage you to chat with Devon Govett. He is the madman behind these projects and the Parcel bundler!

## Any last remarks?

We welcome you to check out Plasmic; we'd love to hear your thoughts!

## Conclusion

Thanks for the interview, Yang! I feel there's a lot of potential in tools that bridge design with development and it looks like you are headed to an amazing direction.

To learn more about Plasmic, see the [React Finland](https://react-finland.fi/) session below:

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/E0OBAmt8k6k" frameborder="0" allowfullscreen></iframe>

T> You can also [find Plasmic online](https://plasmic.app) and [follow Plasmic on Twitter](https://twitter.com/plasmicapp).
