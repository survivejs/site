---
title: "Nullstack - Full-stack JavaScript Components - Interview with Christian Mortaro"
date: 2021-01-15
headerImage: "assets/img/nullstack.jpg"
keywords: ["interview", "javascript"]
---

If you look into what happened during the past few years in the world of JavaScript, you can see that component thinking made it to the mainstream. Even with this, there's still some kind of a boundary between the frontend and the backend.

In this interview, we'll learn about [Christian Mortaro](https://twitter.com/mortaro_)'s approach to the problem.

## Can you tell a bit about yourself?

![Christian Mortaro|100|100|author](https://www.gravatar.com/avatar/c8b87c4d6b85b9bee5bfba5424dec6de?s=200)

I am a 28 years old Brazilian programmer, and I recently found out that I'm on the autism spectrum. I fell in love with code back when I was 11 years old as It was one of the few things that made sense to me since my social skills are pretty bad.

I prefer to spend my days in front of my computer working and testing new libs for fun since I tend to have sensory overload when I go outside.

## How would you describe _Nullstack_ to someone who has never heard of it?

Nullstack is a full-stack framework for building progressive web applications. It connects a stateful UI layer to specialized microservices in the same component using vanilla JavaScript.

Nullstack components are regular JavaScript classes but with both the frontend and backend. I want the developer to have a full-stack application by default without dealing with all the decisions.

Nullstack allows you to make your application work as fast as possible, but it is also flexible enough so you can refactor it into something beautiful.

Consider the example below where a stateful component uses a server function to read from a database connection saved on the server context:

```jsx
import Nullstack from "nullstack";

class BookPage extends Nullstack {
  title = "";
  description = "";

  static async findBookBySlug({ database, slug }) {
    return await database
      .collection("books")
      .findOne({ slug });
  }

  async initiate({ page, params }) {
    const book = await this.findBookBySlug({
      slug: params.slug,
    });

    if (book) {
      page.title = book.title;

      Object.assign(this, book);
    } else {
      page.status = 404;
    }
  }

  render() {
    return (
      <section>
        <h1>{this.title}</h1>
        <div>{this.description}</div>
      </section>
    );
  }
}

export default BookPage;
```

In the example, Nullstack server-side renders and returns SEO ready HTML when the user enters the application from this route. When the user navigates to this page, an API call is made to an automatically generated micro-service that returns the book as JSON and updates the DOM.

## How does _Nullstack_ work?

Nullstack generates two bundles: one for the server and one for the client with the least dependencies possible. The framework is responsible for deciding when to use an API call or using a local function; the programmer only needs to think about the behavior of their functions.

Each environment has its context, which is a proxy passed to every function. The feature makes Nullstack a horizontal structure instead of a tree, which is very important for my daily job since I often have to move code around based on customer feedback, and I wouldn't want to be locked into a structure.

In the example below, we are parsing the README only when the application starts and saving it in the server context memory:

```jsx
import Nullstack from "nullstack";
import { readFileSync } from "fs";
import { Remarkable } from "remarkable";

class About extends Nullstack {
  static async start(context) {
    const text = readFileSync("README.md", "utf-8");
    const md = new Remarkable();

    context.readme = md.render(text);
  }

  static async getReadme({ readme }) {
    return readme;
  }

  async initiate(context) {
    if (!context.readme) {
      context.readme = await this.getReadme();
    }
  }

  render({ readme }) {
    return <article html={readme || ""} />;
  }
}

export default About;
```

The client invokes a server function and saves the README content in the client context that is available offline on other views. Both `readFileSync` and `remarkable` are excluded from the client bundle. There are many optimizations in this code, but the component looks almost as simple as a basic one.

## How does _Nullstack_ differ from other solutions?

The nice answer is that it was, since the beginning, thought of as a complete solution that uses the same concept to solve every problem. The approach makes Nullstack very easy to learn since picking up the first steps is enough to allow you to code full-stack.

I used many more complicated stacks in the past, and you could always notice where things were glued together.

The not so nice answer is that it doesn't differ that much from any other web framework. All of the options have the same goal, and eventually, one inspires the other.

Nowadays, the market is trending towards a "one size fits all" approach where React is the solution for everything. If you think of frameworks as shoes, Nullstack is just a shoe that fits my size and makes me comfortable.

## Why did you develop _Nullstack_?

My friends and I were getting burned out of web development as it seemed like things didn't match our thought process.

The first idea was to make an extension for React to make it look a bit more like Ember.js and add a server layer very similar to the server components they just announced. However, we got carried away and started modifying it so much that we eventually reset the project as its own thing.

I wrote a class that would be "the ideal code for us" and reverse-engineered the idea until it worked.

## What next?

I'll keep developing my freelancing projects with Nullstack as I finally don't feel the need to change stacks at every project anymore. The work will result in more features being extracted into Nullstack as long as they follow the same principles. It's essential to me that Nullstack remains a single concept.

Besides that, I will focus on creating content on Youtube both in English and Portuguese, so more people can understand it while I get the plus of developing my social skills. More people have the same barriers as me, and I hope to reach them, so they don't burn out of web development.

## What does the future look like for _Nullstack_ and web development in general? Can you see any particular trends?

I can't tell what the future is, but I can tell you what I wish it were. I prefer a more decentralized web. For the last years, I've been passionate about PWAs since it removed the centralization of the stores.

The next step I'd like to see decentralized is the frameworks, so developers can pick and choose a stack that makes them happy instead of looking good on the job market.

## What advice would you give to programmers getting into web development?

Test everything yourself, look inside the code, and don't merely use things because the community says so.

Breaking stuff is the most fun part of developing, and there is no shame in figuring out what you like is not the most popular thing as long as you can deliver results.

## Who should I interview next?

Honestly, I have no idea. I lived in a "cave" for the last 28 years; I just gathered the courage to make [a Twitter account](https://twitter.com/mortaro_).

## Any last remarks?

I want to thank everyone who gave me feedback and for the opportunity of this interview. Nullstack is almost two years old, and my poor communication skills and anxiety prevented me from showing it to people. I'm thrilled that none of the catastrophic scenarios I had in my head happened so far.

## Conclusion

Thanks for the interview, Christian! I find it refreshing that there's movement to have shared logic in the same files while having transparent optimizations in place. Perhaps the division between the frontend and the backend will become blurry over time.

To learn more about Nullstack, [head over to the project site](https://nullstack.app/). You can also [find the project on GitHub](https://github.com/nullstack/nullstack).

There's also a brief introduction to the topic on YouTube:

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/l23z00GEar8" frameborder="0" allowfullscreen></iframe>
