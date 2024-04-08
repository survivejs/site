---
title: 'Dredd - Language-agnostic HTTP API Testing Tool - Interview with Honza Javorek'
date: 2019-03-22
headerImage: 'assets/img/city-02.jpg'
keywords: ['api', 'interview', 'testing']
---

If there's one thing developers have to deal with most of the days, it's APIs. For web developers, this often means dealing with HTTP and external services. The question is, how to test the APIs and make sure everything works as we expect.

For this reason, I am interviewing [Honza Javorek](https://twitter.com/honzajavorek), the author of Dredd, a tool designed for this particular purpose.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/7b2e4bf7ecca28e530e1c421f0676c0b?s=200" alt="Honza Javorek" class="author" width="100" height="100" />
</span>

I am a software engineer from Prague, a city in the Central Europe. I understand web APIs, love open source and documentation, and code in Python or JavaScript. You can check my articles or past conference appearances on [my personal website](http://honzajavorek.cz/).

</p>

Since 2011 I have been helping to drive the growth and success of the [Czech Python User Group](https://python.cz/en/). For years I have been participating in volunteer-driven meetups, courses, workshops, [conferences](https://cz.pycon.org/), nonprofit, and more.

I have the privilege of working on Dredd, an open source project, as my day job.

## How would you describe _Dredd_ to someone who has never heard of it?

I'll assume the reader knows what [web APIs](https://en.wikipedia.org/wiki/Web_API) are. [Dredd](https://dredd.org/) is a command-line tool which tests whether a web API works as expected according to its specification.

## How does _Dredd_ work?

When you are about to develop an API, you usually start with an idea of how it should work. APIs are interfaces between systems, teams or companies so to avoid future problems it often makes sense to make the ideation process collaborative. Ideally, to share and discuss the design of the API with other people, you write it down into a document.

While a plain text file would be enough for collaboration, if you describe your API in a popular, structured format like [API Blueprint](https://apiblueprint.org/) or [OpenAPI](https://www.openapis.org/) you get the benefit of having a machine-readable source of truth for your API, which can be then used by various tools. For instance, you can automatically generate documentation from such a file.

```markdown
FORMAT: 1A

# My API

Below is one of the most straightforward APIs written in the **API Blueprint**. You can use [Markdown](https://daringfireball.net/projects/markdown/) here.

# GET /users
+ Response 200 (application/json)

        [
          {
            "id": 1,
            "name": "@survivejs",
          },
          {
            "id": 2,
            "name": "@honzajavorek",
          }
        ]
```

When it comes to developing the API server implementation, Dredd can read the API description document, learn about the expected behavior of the API, then make requests to that API and confirm that it has returned the expected responses:

```bash
dredd api-description.yaml http://127.0.0.1:8000
```

Dredd ensures that the API implementation never gets out of sync with the specification so your team and your users can be sure that the essentials you promised in the documentation are always correct.

Moreover, since Dredd is an open source command-line tool installable from [npm](https://www.npmjs.com/package/dredd), it can be easily used as part of the API project's test suite and regularly used during development. It can be run on Continuous Integration such as [Travis CI](https://travis-ci.org/) or [Jenkins](https://jenkins.io/) to ensure that no changes to the project can break the contract given by the API description document.

## How does _Dredd_ differ from other solutions?

I don't think there's a real competitor to what Dredd does except for [custom-made solutions](https://blog.apisyouwonthate.com/weworks-api-specification-workflow-defec45cc037).

It's important to understand that Dredd doesn't completely replace other automated tests. You should still unit test your code and have integration or end-to-end tests to cover various corner cases. Dredd helps you to ensure the essentials you documented and promised in your API description file will always work in the implementation.

## Why did you develop _Dredd_?

Dredd is a project developed by the company I work for, [Apiary](https://apiary.io/) (acquired by Oracle in 2017). Apiary pioneered the market of API design tools and contributed a bunch of open source projects to the world on the way, such as [Dredd](https://dredd.org/), [API Blueprint](https://apiblueprint.org/), or [API Elements](https://apielements.org/). The original author of Dredd is [Adam Kliment](https://twitter.com/ntmlk). I took over the project in 2016, leading and maintaining it until today.

And why did we create Dredd? It clicks together with the _design-first_ approach to developing APIs which we've been preaching for years.

Especially people focusing on the frontend and working on API-backed [SPAs](https://en.wikipedia.org/wiki/Single-page_application) know the frustration experienced when they need to work with an API which has been designed without their needs in mind. It is a common problem, and I believe it's mostly this frustration which drives people to try [GraphQL](https://en.wikipedia.org/wiki/GraphQL) instead of web APIs based on embracing [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) and some of the ideas behind the [REST architectural pattern](https://en.wikipedia.org/wiki/REST).

In Apiary we firmly believe that hard-to-use APIs come to this world mainly by being developed without any communication with their future users and by documentation being generated out of the final code instead of written with human beings in mind. The right way to develop APIs, according to us, is to design them first, to write the documentation first, and to communicate before any code gets written.

But if you're supposed to write down a document and only then start to write code, how do you ensure that the implementation is done according to that document? The answer is Dredd. Dredd is essential for the _design-first_ approach. So to be able to preach _design-first_, we had to create Dredd.

## What next?

We've introduced experimental [OpenAPI 3](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) support in Dredd and are currently working on making it a first-class citizen among the supported formats.

Except for that, I have many ideas on how to improve the developer experience with Dredd. The reporters could have better arranged and more useful output, for example.

## What does the future look like for _Dredd_ and web development in general? Can you see any particular trends?

As I already mentioned, I can see people trying GraphQL as an alternative to web APIs. I believe there are [good reasons](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/) why those two should coexist in symbiosis instead of replacing each other. I think that the future of Dredd in such a world isn't in supporting GraphQL, but in doing more for the web APIs so that developing them feels easier.

Dredd could, for example, introduce a way to test not only the API server implementation but also the API client so the contract would be validated from both sides. Imagine Dredd could read the API description document, then test your frontend or mobile app requests, and in the end give you a verdict on whether they conformed to the API description.

One more thing I'd love to have in Dredd is testing scenarios, i.e., series of requests and responses.

## What advice would you give to programmers getting into web development?

Even if you don't build web APIs in particular, I believe the _design-first_ approach is a general idea you can apply to any interface as a programmer, whether it is an interface of a library you're building or a user interface of your website.

My advice? Read [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) by Tom Preston-Werner and [How I Develop Things and Why](https://www.kennethreitz.org/essays/how-i-develop-things-and-why) by Kenneth Reitz. Then embrace the concepts and build stuff other people will love to use.

## Who should I interview next?

You should interview Mila Votradovec ([@MilaVot](https://twitter.com/MilaVot/)) from [Snyk](https://snyk.io/). The company is doing a great job allowing people to use the open source ecosystem of their language to the maximum while making it easy for mere mortals to pay attention to security.

## Any last remarks?

Thanks for the interview! I'm happy to answer any questions about Dredd on [Twitter](https://twitter.com/honzajavorek) or in Dredd's [issues](https://github.com/apiaryio/dredd/issues).

If by any chance anyone reading this happens to be interested in Python as well, consider visiting this year's edition of the [PyCon CZ](https://cz.pycon.org/2019/) happening on June 14–16th. It's the first time it's in Ostrava, and the team has managed to secure a fantastic venue for the event - former steelworks and coal mines premises.

## Conclusion

Thanks for the interview, Honza! For me, it's an entirely new way of testing I hadn't considered before and I can see value in the approach. I'm sure other people will too.

T> To learn more, [check out Dredd site](https://dredd.org/en/latest/) and [Dredd on GitHub](https://github.com/apiaryio/dredd).
