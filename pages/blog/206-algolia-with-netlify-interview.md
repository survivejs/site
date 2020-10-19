---
title: "Algolia with Netlify - Easy search for static sites - Interview with Samuel Bodin"
date: 2020-10-19
headerImage: "assets/img/jamstack.jpg"
keywords: ["interview", "static-site-generation"]
---

Setting up and maintaining a search on a static site is often a chore. You could handle indexing yourself using a solution like [Lunr](https://lunrjs.com/) but even with that you'll encounter limitations as the size of the index grows.

That's where services like [Algolia](https://www.algolia.com/) come in. To make it easier to integrate with static sites hosted on top of [Netlify](https://www.netlify.com/), [Samuel Bodin](https://github.com/bodinsamuel) and his team developed a specific solution that's easy to integrate.

## Can you tell a bit about yourself?

![Samuel Bodin|100|100|author](https://www.gravatar.com/avatar/7a7fbf076d2e3ac5c402cecfdae62b4b?s=200)

Hi, my name is Samuel Bodin, and I'm a Senior Software Engineer at Algolia. More specifically, I work on our [crawler](https://www.algolia.com/products/crawler/) team, which operates an in-house robot that indexes our customers' websites.

I have studied art, cinema, and photography before changing my path and starting a web career. I have gained experience as a PHP developer and currently use mostly Node.

My current work includes developing our JavaScript crawler, the backend, the frontend, and maintaining our infrastructure.

## How would you describe Algolia and Netlify for someone who has never heard of them?

[Algolia](https://www.algolia.com/) is a distributed search engine with a high-speed and simple API that will ingest any JSON record, index it, and allows you to search inside records without any strong technical requirement.

[Netlify](https://www.netlify.com/) is an automatic website builder and host that easily plugs into your Git repositories and handles all the work required to host a website in a fast and secure way.

Algolia and Netlify share the common goal: to alleviate technical requirements and solve what were once complicated tasks into a few clicks or API calls.

## How does Algolia work with Netlify?

Algolia can be used directly with our [API clients](https://www.algolia.com/integrations/) available for a dozen languages. However, it requires every developer to structure their data and push it when it changes.

We developed a small plugin that integrates into Netlify and uses our internal crawler to navigate and extract information directly from any website to help with this task.

[The plugin](https://www.algolia.com/netlify) will automatically ping the crawler when the user deploys its website in Netlify and populate an Algolia index with all the data we found in a matter of minutes. All of this makes the task of indexing very easy and maintenance-free.

You can learn more at the launch video below:

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/zbdfqfn1yiM" frameborder="0" allowfullscreen></iframe>

## How is using Algolia with Netlify differ from other solutions?

With a traditional setup, you will need to code and maintain your indexing pipeline. It requires a lot of knowledge in various fields, like Algolia API, concurrency indexing, filesystem read or efficient database usage, etc.

In the case of Netlify, which has no backend, that usually means you will need to do the following:

1. Fully generate your website statically
2. Read the filesystem Look for HTML files
3. Find the relevant information inside each file
4. Structure your JSON records
5. Push them to Algolia

In comparison, the Algolia plugin for Netlify only requires you to connect your Netlify account to Algolia, install the plugin via our UI, and you are set with nothing to code or maintain.

## Why did you develop the Algolia plugin for Netlify?

We wanted to provide an effortless way for developers to use Algolia. Even if our API is relatively straightforward, we understand that it is not a trivial thing to implement correctly.

Netlify has a great environment, and it was a tremendous challenge to integrate and make everything feel as seamless as their User Experience.

Besides, our goals are very similar, and it feels like the ecosystem will work great together.

![Algolia installed on Netlify](assets/img/algolia-installed.jpg)

## What next?

Launching the plugin was a success, but we don't plan to stop the development.

To start, we have provided the most simple plugin as possible to focus on the simplicity of usage, but we know that not every use case will fit into our default strategy.

We want to have the maximum feedback possible from Netlify's customers so that our users' needs shape the roadmap. That's why we have opened our [Github Issues](https://github.com/algolia/algoliasearch-netlify/issues) and a dedicated [Discourse forum](https://discourse.algolia.com/c/netlify/28).

## What does the future look like for your crawler and web development in general? Can you see any particular trends?

Our crawler is an enterprise tool that lives on top of Algolia's core search engine. That means that it will, as a project, benefit from the full power of Algolia and the feedback from big customers. With this in mind, we can provide for a powerful subset of features to every Netlify user.

We are trying to improve and automate more of our data extraction strategies. We want to handle more content types and websites, such as JavaScript-powered websites, password-protected websites, complex documents like PDFs, etc.

In general, we see a good trend around serverless. That's why we believe in Netlify, and it this plugin. People rely more and more on SaaS/PaaS to handle their workload and focus development hours on their core product.

## What advice would you give to programmers getting into web development?

Start small, ship fast, break things, but not too much. Be kind to people, and be humble.

We never stop making mistakes, so never be afraid of making them but always understand why.

Web development is a field that is changing fast; you don't have to know everything; no one can. What matters is how you handle new challenges every day and how you stay open to new ideas.

## Who should I interview next?

I am very grateful to work with amazing people, and there is almost no day since I started that I have not been impressed with [Sarah Dayan](https://sarahdayan.dev/)'s work. She has a lot to share.

## Conclusion

Thanks for the interview, Samuel! It seems you've developed a nice solution for anyone hosting their site on Netlify in particular and I've found Algolia useful on this site as well.

T> To learn more, [check Algolia's Netlify plugin on GitHub](https://github.com/algolia/algoliasearch-netlify/).
