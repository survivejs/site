---
title: 'Reactabular - Spectacular tables for React - Interview with Juho Vepsäläinen'
date: 2016-09-12
headerImage: 'assets/img/spectacular.jpg'
keywords: ['interview', 'react']
---

Writing a little HTML table isn't particularly hard. It all gets more complex when you need logic like filtering, pagination, or fixed headers. A simple problem becomes difficult fast as requirements appear.

When it comes to React, there are a few established alternatives out there. Consider Facebook's [fixed-data-table](https://www.npmjs.com/package/fixed-data-table), [Griddle](https://griddlegriddle.github.io/Griddle/), [react-bootstrap-table](https://allenfang.github.io/react-bootstrap-table/), [rc-table](https://react-component.github.io/table/), [react virtualized](https://bvaughn.github.io/react-virtualized/), or [Reactable](https://glittershark.github.io/reactable/) for a few examples.

Today I'm going to discuss an alternative which I developed during the Summer. The project actually goes way back, but a client made this work possible. Read on to learn what makes [Reactabular](http://reactabular.js.org/) different.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/b26ec3c2769168c2cbc64cc3df9cdd9c?s=200" alt="Juho Vepsäläinen" class="author" width="100" height="100" />
</span>

I maintain this site and have written a book on React and webpack (available on the site). I've been programming well over a decade and started web development when jQuery didn't even exist. The last year or two have been focused on establishing a little business. The books are an important part of that effort.
</p>

## How would you describe *Reactabular* to someone who has never heard of it?

When it comes to React tables, you will always find several key ideas: **rows**, **column definition**, **React components**. This is the trinity of Reactabular.

I expect that you pass an array of objects (or arrays) to it. You will define how to display these rows using a separate column definition that maps properties to specific columns. React components are more about how the table is laid out. You can swap portions of the rendering pipeline with parts of your own to customize it further. This has enabled me to build functionality on top of the light table core.

Reactabular might not be the easiest component to use. It actually consists of a series of small packages (around twenty) that work together. I've implemented something known as [reactabular-easy](https://www.npmjs.org/package/reactabular-easy) that provides an interface closer to the alternatives. You'll lose out on flexibility, but it should be literally easier to pick up without wiring that much.

There's also a meta-package of sort known as simply [reactabular](https://www.npmjs.com/package/reactabular). It contains most of the functionality behind a single interface. You still have to fetch extra functionality, such as editing or pagination, from separate ones. I see it as a legacy way out and I actually generate an old-fashioned build found at the [project repository](https://github.com/reactabular/reactabular) based on this packages.

## How does *Reactabular* work?

As I mentioned earlier, Reactabular has a strong conceptual foundation. I would say column definition is the most interesting part of the component as I've pushed a lot of problems there. Instead of providing a prop for every feature, I rather let you compose your solutions on top of my ideas.

I didn't want to grow the core to support every possible use case. Instead I wanted to end up with a design that would allow me to push problems into user space. That said, the packages I've implemented cover a lot of ground and depending on your case, not a lot of extra work might be required.

### Column Definition

To understand better how Reactabular works, it's a good idea to dig into the column definition. Consider the following example:

```jsx
const columns = [
  // Map color to the first column
  {
    property: 'color',
    header: {
      label: 'Color',
      transforms: [
        color => ({
          // Show alert when a color header cell is clicked
          onClick: () => alert(`clicked ${color}`)
        })
      ]
    },
    cell: {
      // Format color content cells in a special way
      format: color => <span style={{ color }}>{color}</span>
    }
  },
  // Map name parts to a column
  {
    header: {
      label: 'Name'
    },
    // Given a name is given in parts, define separate
    // columns for it
    children: [
      {
        property: 'name.first',
        header: {
          label: 'First Name'
        }
      },
      {
        property: 'name.last',
        header: {
          label: 'Last Name'
        }
      }
    ]
  }
];
```

A lot of the column definition likely explains itself. There are a couple of parts that will require additional explanation to see the point. Consider `format` for instance. It allows you to shape value formatting when rendering. This is useful if you want to transform the input into something else or attach extra logic to it.

While `format` operates within a cell, `transforms` operate on a table cell itself. You can use it to attach handlers to it like above. There's also an interception mechanism that allows us to implement editors through this interface. If a transform returns `children`, it will override any subsequent result. That's a powerful mechanism in its simplicity.

### React Definition

Besides row data and a column definition, Reactabular requires one more part to work - React definition. To give you an idea of a fairly advanced one, consider the following example where I split data into two bodies while showing a header for both:

```jsx
<Table.Provider columns={columns}>
  <Table.Header />

  <Table.Body
    rows={rows.filter(r => r.name.first === 'Adam')}
    rowKey="id"
  />

  <Table.Header />

  <Table.Body
    rows={rows.filter(r => r.name.first === 'Brian')}
    rowKey="id"
  />
</Table.Provider>
```

A minimal definition with an extra `className` could be like this:

```jsx
<Table.Provider
  className="pure-table pure-table-striped"
  columns={columns}
>
  <Table.Header />

  <Table.Body rows={rows} rowKey="id" />
</Table.Provider>
```

The table definition is fairly flexible. It generates standard `table` elements by default. You could add `tfoot` within the definition and expect it to work without any problems. That's something handy for generating summaries based on data for example.

There are also hooks for customizing rendering per row (`Table.Body.onRow` prop). You can also replace `Table.Provider` `components` with your own if you aren't happy with the defaults. Instead of rendering a regular table, you could render divs. Or you could inject React components. I implemented drag and drop on top of the core this way. The hooks also enabled a performance related feature known as virtualization without a lot of effort.

## How does *Reactabular* differ from other solutions?

When I started developing Reactabular in early 2015 I found the existing solutions too monolithic. I gravitated towards the idea of a column definition early on. I would say the work done during this Summer helped to make the ideas shine. The emphasis on keeping the core decoupled and extensible is the thing that sets Reactabular apart in good and bad.

I learned a lot in the process and became a great fan of [monorepos](https://medium.com/@bebraw/the-case-for-monorepos-907c1361708a). I also picked up a few React tricks along the way. All of this is good as it will lead to stronger content.

## Why did you develop *Reactabular*?

I needed a table component for my [old CRM project](https://github.com/bebraw/react-crm-frontend). The idea was to develop something on top of React, Swagger, and all that. The project has since then died out, but a table component, and a few others, came out of it.

The Summer work was sponsored by a company known as [Kenandy](http://www.kenandy.com/). The component wouldn't be where it is today without their support. Having a client as a driver is most helpful and keeps you grounded as you are solving actual problems instead of only the fun ones.

## What next?

From my point of view Reactabular is in maintenance mode right now. It is packed with functionality and I will work on it based on the client needs. I consider it ready on a conceptual level and I'm quite happy with the design. There's always something to improve, but it feels fairly solid right now.

As there's less technical work to be done, I'll put more of my personal effort towards pushing webpack and SurviveJS further. The project taught me quite a bit and I'll be able to recycle the learnings into new content.

## What does the future look like for *Reactabular* and web development in general? Can you see any particular trends?

I hope the right people find Reactabular. I believe it has potential to make table related tasks less arduous. There's certain upfront investment as you have to understand the design and concepts to make most out of it, but if you do, I think you could find value in it.

Web development itself is in an interesting place. If you consider something like Reactabular, it's currently limited within the domain of React. A lot of the logic actually works without, but even then the potential market is limited by definition. I truly hope we can push towards solutions that allow us to reuse more component level code across boundaries.

I'm likely not alone with this pain and I hope standards catch up with the recent developments. It always takes some time, but eventually we get there I hope. An alternative is of course that it will all get even messier and fragmented.

## What advice would you give to programmers getting into web development?

Web development is a broad domain. Don't try to understand all of it at once. Instead, try to develop strength in one area before moving to another. Understanding JavaScript the language opens a lot of doors by itself. Topics such as CSS are difficult by themselves.

In short, don't bite too much at once. Patience is gold.

When it comes to motivation, find projects that are interesting to you. Sometimes getting to your goal might not be that easy, but that's when you learn the most. If you are doing something you find challenging, the chances are that you are learning.

I bet when most of us look to our old projects, we find a lot of room for improvement. Even within a year you'll change a lot as a developer as you learn more about the field. Technological advancement makes sure it never grows old.

## Who should I interview next?

I have a couple of names in mind, but I'll keep those to me. I guess you'll have to wait and see.

## Conclusion

I hope you find [Reactabular](http://reactabular.js.org/) useful for your projects. Even if the component or its approach aren't that interesting to you, consider checking out [the project repository](https://github.com/reactabular/reactabular).

Given the project has been arranged as a monorepo, it might look a little different than what you are used to. The approach is worth understanding and I believe it might change the way we think about structuring applications even instead of just npm packages.

To understand the design decisions I took with Reactabular, check out [my slides on React API design](https://survivejs.github.io/react-api-design/).

Here's a presentation I gave about the topic:

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/nEn5k_HXeNc" frameborder="0" allowfullscreen></iframe>
