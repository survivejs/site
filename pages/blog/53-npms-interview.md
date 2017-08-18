---
title: 'npms.io - A better and open source search for node modules - Interview with André Cruz'
date: 2016-06-13
headerImage: 'assets/img/fern.jpg'
keywords: ['interview', 'npm']
---

As I [lamented earlier this year](http://www.nixtu.info/2016/02/discovery-and-quality-services-for-npm.html), it's increasingly difficult to find npm packages. One way to describe this is *npmopeia*. The feeling that the package you need exists. The problem is how to find that package.

That is where services like [npms.io](https://npms.io/) by [André Cruz](https://twitter.com/satazor) come in. To learn about the problem and this service in particular, let's hear more.

### Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/1a691c6ddec4c073246eeaf13afeb0ef?s=200" alt="André Cruz" class="author" width="100" height="100" />
</span>

My name is André Cruz. I'm 28 years old and I live in Porto, Portugal with my wife and little child.
</p>

When I was a kid, I used to sneak into my brothers computer. Every time I used his computer, I asked myself how this little metal box was able to interpret and execute commands on my behalf. I quickly become intrigued and interested in knowing how it was built. Several years passed and, in the IRC apogee, I developed a several scripts for mIRC.

![mIRC scripts](assets/img/npms/mirc.jpg)

That's where my passion in coding and programming started. Since then, I've explored and used several technologies, became graduated in Computers and Telematic Engineering, gave a couple [of](https://www.youtube.com/watch?v=PHlZan97TN0) [talks](https://www.youtube.com/watch?v=5h66mv6Ve4o) and built many projects.

Fast-forward to the future, I'm the lead developer of [BABOOM](http://baboom.com) and I contribute to many open-source [projects](https://github.com/IndigoUnited). Working in open-source heavily influenced me as a developer and as a person, for the better. I encourage everyone to the same. Not doing so is like going to Paris without visiting the Eiffel tower :)

## How would you describe *npms* to someone who has never heard of it?

[npms.io](https://npms.io/) is a replacement to the official [npmjs.com](https://www.npmjs.com/) search but with a key difference: the quality of the results are much much better:

- npmjs.com search is not fine tuned and, because of that, produces strange results. Try searching for `promise` and `promises` and you get totally different results just because of the plurality. This is just an example, but there are many more.
- npmjs.com search results are simply based on the relevance they have to the terms you put into the search box. npms.io combines the relevance with the modules' score producing results with far greater quality.

## How does *npms* work?

*npms* may look simple but is actually complex and it's composed of several projects:

- npms-analyzer: analyzes the npm ecosystem, collecting info, evaluating and scoring each module.
- npms-api: the http API that serves the search results
- npms-www: the frontend for http://npms.io
- npms-cli: a cli program that allows searching in the command line (not yet done)
- npms-badge: generates and serves score badges for developers to put into their modules' README.

The most interesting stuff happens in the `npms-analyzer`. Its role is to process and analyze every single module from the npm ecosystem. The analysis process collects as much information as possible about a module which is then used to evaluate and produce a score. If you are interested in knowing more, you may read our [architectural documention](https://github.com/npms-io/npms-analyzer/blob/master/docs/architecture.md).

## How does *npms* differ from other solutions?

When I started the project, I knew that there were several other projects that tried to solve the npmjs.com problem. While they were an improvement over the official search, I felt that there was room for improvement.

What really makes `npms` stand out from solutions like [npmsearch](http://npmsearch.com/) or [nipster](http://nipstr.com/) is the quality of the search results. We collect much more information about a module, using sources like GitHub, [David](https://david-dm.org/) and [Node Security Platform](https://nodesecurity.io/).

The more information we have from a module the better we can evaluate and score it. We have also invested a lot of time into polishing the scoring algorithm and the search weights to make the results even better.

Another strong point of *npms* is the clean and carefully written code. This makes it easier to do additions and modifications and will certainly benefit contributions.

Last but not least, *npms* is a new and shiny project which uses recent technologies such as ES6 modules, React and Redux.

## Why did you develop *npms*?

npmjs.com allows developers to search for node modules, but, having used it for several years, I always felt that the overall experience and quality of the results were bad. I wanted to make my life and yours easier every time we wanted to search for a module.

I also saw an opportunity to learn and use new technologies, which I couldn't do due to my job's nature.

## What next?

*npms* is far from being finished and every contribution is much appreciated:

- We urgently need a logo and identity. If you have the design skills please [help](https://github.com/npms-io/npms-www/issues/15)!
- Both `npms-cli` and `npms-badge` projects are yet to be done. Those will make the whole `npms` project more complete.
- We want to make the search results more personal. The goal is to use data from your GitHub account (who you follow, what you starred, etc.) to further improve the quality of the search results.
- We are paying the infrastructure costs ourselves to provide this service for free. Though, if you use the service regularly, please consider [donating](https://salt.bountysource.com/teams/npms) to cover these costs.

## What does the future look like for *npms* and web development in general? Can you see any particular trends?

*npms* will become obsolete by the time the official npm improves its current offering. Until then, *npms* will continue to evolve and improve over time. Diversity drives change.

## Who should I interview next?

You should definitively interview [André Duarte](https://github.com/atduarte). He has built *npms* with me and he has proven to be very valuable both conceptually and technically to the project.

## Conclusion

Thanks for the interview André! The quality of the official npm search is definitely something I've felt personally. Sometimes finding the right package can be more painful than it has to be. Services like [npms.io](https://npms.io/) are therefore valuable as they save developer time.

Beyond using [npms.io](https://npms.io/), [consider contributing to the project](https://github.com/npms-io). I'm sure André won't mind. :)
