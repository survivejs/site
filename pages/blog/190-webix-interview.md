---
title: "Webix - Declarative UI Framework for Rapid Development - Interview with Maksim Kozhukh"
date: 2020-02-07
headerImage: "assets/img/web.jpg"
headerAuthor: "jplenio"
headerSource: "https://pixabay.com/photos/cobweb-drip-water-mirroring-blue-3725540/"
keywords: ["interview"]
---

If there's something that has changed during the past few years, it's the way we develop user interfaces using JavaScript. Earlier we've learned about solutions, such as [Reakit](/blog/reakit-interview). Now it's time to look into a library designed especially for rapid prototyping.

I'm interviewing Maksim Kozhukh from [Webix](https://webix.com/) to learn more about their approach.

## Can you tell a bit about yourself?

![Maksim Kozhukh|100|100|author](assets/img/interviews/maksim.jpg)

I am Maksim Kozhukh, the head of Webix and a software architect with 20+ years of experience and extensive expertise in web technologies. I started my career in Netscape age and came through all web industry trends, disasters, and inventions. Webix is one of the many projects I am managing right now.

My substantial experience in the development of full software products as well as single web components led to [Webix UI Library](https://webix.com/). I embodied my ideas and web development approaches in this project.

## How would you describe Webix to someone who has never heard of it?

Webix is the JavaScript UI library for business web apps development. The goal of Webix is to simplify and speed up the creation of the UI layer of web applications while keeping the related expense low.

As we worked on the product and gained feedback, we realized that Webix is popular, especially amongst business analysts. They use it to prototype high-level user requirements or to deliver some form of a visual proposal on the pre-sales stage. The approach is becoming more popular, especially in software outsourcing.

We also noted a significant number of junior web developers amongst our users. That implies the library is easy to pick up and use, even with a modest amount of experience.

### Working with Webix

Starting with Webix, you will work inside the Webix environment and work with a large but limited number of UI controls and widgets. On the other hand, you will save some significant amount of development hours that you can use for any other goals.

Making the UI with the JS library or from scratch, you will probably get rise quite similar result but with different efforts.

And honestly, dealing with dashboards, admin panels, users-lists, you don't need to slide your imagination on waves of inspiration. Mostly, you need the regular data grid, and you need it now. So why not use a ready-made one?

### Tree UI example

To give you an example, consider that you need a tree view with the following features: Tree indexer Data sets connected to the tree's branches UX items like a header and draggable border (resizer).

It should look something like this:

![Tree UI mockup](assets/img/webix.png)

It would likely take at least a couple of hours of work if developed from scratch, not to mention design required.

In Webix, above would look like this:

```js
webix.ui({
  rows: [
    { type: "header", template: "My app!" },
    {
      cols: [
        {
          view: "tree",
          data: tree_data,
          select: true,
          gravity: 0.3,
        },
        { view: "resizer" },
        {
          view: "datatable",
          autoConfig: true,
          data: grid_data,
        },
      ],
    },
  ],
});
```

That's all the code you need to declare this particular piece of functionality.

## What are the key advantages of Webix?

Webix provides more than a hundred UI widgets out of the box, meaning you'll end up writing less code yourself. For example, Webix provides a data table widget with 21 features like drag-n-drop, sorting, filtering, data validation, clipboard support, fixed areas, advanced editors, `rowspan`, `colspan`, grid grouping, vertical headers, sparklines, subviews, and more. The functionality is themeable, and several themes are provided out of the box.

The rendering speed of Webix is good, and this becomes vital as you'll application begins to consume more data. Besides, we've put special attention to documentation and support.

## How about the disadvantages?

It's possible you'll encounter challenges in specific use cases as a framework cannot cover each corner. I also wouldn't recommend Webix for any hybrid apps where you use the web on mobile.

## Why did you develop Webix?

It started as an internal framework for our software outsourcing division. The key goals were to: unify the UX strategies, reuse the source codes, optimize the performance and rendering speed, change the pure JS to classic object-oriented programming approach.

Initially, we developed several commercial products and internal tools with the help of this library and received encouraging feedback in return. As a result, we decided to share the framework with the JavaScript community.

Doing this led to tons of features requests, customization questions, compatibility issues, and so on. Generally, Webix is not the product, but the team and we build our library based on users' feedback. We can say that the JavaScript community inspired us to release this product on the market.

## What next?

We are actively gathering feedback, and we try to anticipate the wishes of our users. Soon we plan to release new complex widgets for electronic document management, user management, and data reporting. There will be complete SPA applications with elaborate design and business logic.

In addition to that, we have started to develop templates catalog and design presets. These are small but nice perks, which will allow our users to save additional time for the development and prototyping of their applications.

Alongside we are developing WYSIWYG editor, which will allow UX designers to use Webix without programming. Besides, we have finished working on the tight integration with [Salesforce](https://www.salesforce.com/products/commerce-cloud/resources/what-is-ecommerce/), so we are going to offer our clients highly productive components for custom Salesforce solutions creation.

And of course, the library itself will be further developed and improved. It will become more productive, compact, and convenient with every new version.

## What does the future look like for Webix and web development in general? Can you see any particular trends?

It's a difficult question. On the one hand, we notice the development heading to the web and clouds. The share of mobile solutions is growing. But on the other hand, the maintenance of the new web services and platforms is still on the client-server business applications. That's why so far, I don't see any preconditions for the revolutionary changes in the sphere of web development or Webix in particular.

The other tendency we are observing is the avalanche-like growth of the population of the massive web frameworks and it's affecting Webix as well. We have noticed some Webix competitors going in this direction, leaving the market of UI libraries. As a result, the position of Webix is becoming even stronger.

It has been a severe trend lately that we can't ignore. Today we are following this "battle" when users and developers are choosing one framework or the other. We are considering which direction to follow to contribute our expertise there. But the choice has not been made yet.

## Who should I interview next?

We can recommend a similar product, [DHTMLX](https://dhtmlx.com/) and [xbsoftware](https://xbsoftware.com/) as they work with startups.

## Conclusion

Thanks for the interview Maksim. I feel there's a lot of power in a declarative approach and it seems like many UI approaches are headed to that direction.

Note that if your project is open source and non-commercial, then you can [apply for a free license](https://blog.webix.com/using-webix-in-open-source/) and you can [learn more about Webix on their site](https://webix.com/).
