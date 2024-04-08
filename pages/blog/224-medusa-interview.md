---
title: "Medusa - Own your ecommerce stack - Interview with Sebastian Rindom"
date: 2021-12-14
headerImage: "assets/img/medusa.jpg"
keywords: ["interview", "ecommerce"]
---

Building an online shop can be complex, and there are many factors to consider, not to mention compliance with all the different laws.

To learn more about the niche and how to get into e-commerce, I am interviewing [Sebastian Rindom](https://twitter.com/sebrindom) from Medusa.

## Can you tell a bit about yourself?

I am Sebastian Rindom, one of the founders of [Medusa Commerce](https://www.medusajs.com/). I have always been very interested in computers and programming, which resulted in me studying computer science.

While studying, I began working on different projects and eventually focused on helping e-commerce businesses. When Oliver (one of the cofounders at Medusa) and I started working together, we had a customer who wanted to migrate away from WooCommerce.

As we weren't able to find a solution that accommodated their requirements, we ended up building a custom solution, which after many iterations became Medusa.

## How would you describe _Medusa_ to someone who has never heard of it?

Medusa is an API that allows you to create powerful e-commerce experiences easily. Medusa comes with a lot of standard functionality that you would expect from an e-commerce system. Still, it has an architecture that makes it very easy to add custom functionality, automate common flows and switch out parts of your stack as your business grows or new solutions appear.

As a developer, this allows you to spend more time making things that move the needle instead of battling bad APIs, and as a merchant, you can be confident that everything is possible when you need it.

## How does _Medusa_ work?

Medusa is essentially an npm package that you can install in a Node project and deploy to a server. Once it is up and running, you can use the default APIs that enable you to do things like creating products, adding products to a cart, processing payments, fulfilling orders, managing returns and exchanges, and many other great features.

Once installed in the Node project, you can add custom functionality and extensions by either installing plugins shipped as individual npm packages or adding files directly to your project. Examples of plugins that you might want include payment providers like Stripe and PayPal or shipping providers that cover the markets you sell to and so on.

To get going with Medusa fast, try the following:

```bash
npm install -g @medusajs/medusa-cli
medusa new my-medusa-store --seed
medusa develop
curl localhost:9000/store/products | python -m json.tool
```

## How does _Medusa_ differ from other solutions?

The e-commerce space that we are a part of has many big players like Shopify and BigCommerce. Our main difference is that we are headless, which means that we are agnostic about which presentation layer you use to take the customer through the purchasing experience.

The approach allows you to have a lot more flexibility regarding what types of experiences you can create and frees you from hacking your way into a platform that doesn't support your use case natively.

Naturally, we are also a lot more developer-focused than many other solutions. We believe that if you make developers more powerful, they will create more robust solutions for the end customer.

## Why did you develop _Medusa_?

Oliver and I had an agency where we did a fair amount of e-commerce related work, and too often, we experienced annoying moments where we either had to say no to our clients. They might have had a feature request or had to pull our hair out in frustration over some existing solutions.

It was clear that we weren't the only ones with this experience, and when we found a customer that perfectly fit the use case for a new solution, we decided to build the APIs that we had always wished existed. Our strong hope is that developers who try out Medusa have the same great feeling when implementing Medusa stores.

## What next?

For Medusa right now, we are just focused on having as many people try out our solution as possible. We have a solid foundation for growing our community, and we have a lot of people who are willing to help and guide people when they spin up Medusa for the first time.

## What does the future look like for _Medusa_ and web development in general? Can you see any particular trends?

One thing that I think will be huge for e-commerce, in particular, is the need for customization. After COVID, so many companies have realized that they need to think of e-commerce as one of their primary channels instead of a secondary channel that is "just there".

When more and more businesses begin to invest in this area, this will naturally increase the competition. In this area, I would expect the companies that dare to think differently and create experiences that are genuinely in line with their brands to come out on top.

## What advice would you give to programmers getting into web development?

I think the very best way of getting your hands dirty with web-dev is actually to buy a book - and try to find one that has been around for a long time, at least five years, and with an up-to-date edition.

I would then read it from end to end and try to do every example in the book - when you are probably ready to do 80% of the work that a professional web developer does.

At this point, you will feel comfortable with starting up a project, which will get you through the last 20%, which takes hard work and experience.

## Conclusion

Thanks for the interview, Nicklas! I know from experience e-commerce is tough and it's great to see open source options appear in the niche.

To learn more, [head to Medusa site](https://www.medusajs.com/) and make sure to [check out the project on GitHub](https://github.com/medusajs/medusa).
