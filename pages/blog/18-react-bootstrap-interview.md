---
title: 'React-Bootstrap - Bootstrap Rebuilt for React - Interview with Matt Smith'
date: 2015-10-13
headerImage: 'assets/img/bootstrap.jpg'
keywords: ['interview', 'react', 'ui']
---

[Bootstrap](http://getbootstrap.com/) is easily one of the most popular CSS frameworks out there. Beyond grids and basic layout utilities, it provides a nice set of widgets to use. Even though you can use the CSS with React, this may become cumbersome quite soon. You will likely end up wrapping portions of Bootstrap within components of your own.

[React-Bootstrap](https://react-bootstrap.github.io/) is a project that solves this problem for you. To understand the project better, I'm interviewing Matt Smith, one of the authors.

## Can you tell a bit about yourself?

<p>
  <span class="author" style="float: right">
    <img src="https://www.gravatar.com/avatar/2edcba3f73592de39dc2e83826e22fe2?s=200" alt="Matt Smith" class='author' width='100' height='100' />
  </span>

I have been writing software since I was in High School back in the 90s. I wasn't able to land my first real job though until the mid 2000s as a QA Engineer. Automating the UI of desktop applications I didn't write was not what I'd call fun, though the learning experience was immeasurable.
</p>

Shortly after that I was serving in the United States Marine Corps Reserve which required a break from coding to serve a 1 year tour of duty in Al Ramadi, Iraq. Soon after my return I was able to find a new job where I built a number of internal web applications for my employer.

It was there that I first tested out the waters of OSS Development. I mainly stayed in the realm of the C# or .Net community until about two years ago when I started branching out. Writing well crafted quality software is my passion.

## How would you describe React-Bootstrap to someone who has never heard of it?

React-Bootstrap is a collection of React Components that are primarily designed to work with
Bootstrap CSS classes. Bootstrap does provide some JavaScript but it's tightly coupled to jQuery which does not play well with React idioms. We aim to provide parity with Bootstrap CSS in functionality and styling, though we differ in the JavaScript API.

## Why did you develop React-Bootstrap?

I didn't that credit goes to [Stephen J. Collings (stevoland)](https://github.com/stevoland) and [Pieter Vanderwerff (pieterv)](https://github.com/pieterv). Though when I came into the picture active development on React-Bootstrap wasn't really going anywhere. From what I could tell it had been abandoned, though the number of issues and pull requests kept growing.

The design team at our dev shop has been using a slightly modified version of Bootstrap for years, and when we started moving to React we found React-Bootstrap. We were using Angular and didn't use a core UI library leaving us to implement a lot of the Bootstrap JavaScript ourselves in an Angular world. We didn't want to make that mistake again so we grabbed a hold of React-Bootstrap pretty quick.

At the same time that we started this transition to React, we were also going after Section 508 and WCAG 2.0 AA Compliance. We were continually finding that the React-Bootstrap components are not compliant so we wanted to contribute back.

## What kind of challenges have you experienced while developing React-Bootstrap?

As I mentioned earlier, the React-Bootstrap project felt like a dead project around February/March of 2015. The release up on npm at that time didn't even work nor had it for a few months. I had submitted a PR or two prior to that time so I reached out to Stephen and Pieter to ask if there was anything I could do to help. They were kind enough to include me in the organization and granted me push access to npm.

The npm release was broken because there was a tedious manual process in place to build the JSX code and manually push that to the Bower repo and Docs repo. Most of my background is in DevOps build engineering so this was something that I knew I could fix. I moved the project from the old JSX Transformer tools and Browserify to Babel and Webpack. This made the Bower release and Docs site easier to build and develop against. Then I automated the push to those separate repos on GitHub. Common tools for this with Grunt and Gulp just weren't fast enough for me, so I rolled our own tailored experience.

During this time I was also working to triage issues and review/accept pull requests from the community. On most issues I was quick to say that I'd accept a pull request, which many people did do. This presented the next biggest problem, which was around the Firehose of issues and pull requests that just kept coming in.

It was at this time that me employer sent me to the [.Net Fringe](http://dotnetfringe.org/)
conference. At my dev shop we have been active contributors to OSS in the .Net ecosystem for years, and this was a conference devoted to that community. While at that conference a large number of the sessions were mainly focused on breaking down the barriers that folks encounter when contributing to OSS projects. The basic undertone I walked away from that was that we as an open source community need to reach out to those that are testing out the OSS waters and welcome, no pull, them in with a warm embrace.

I was already feeling overwhelmed with the number of issues and pull requests that were coming in on React-Bootstrap and my colleagues in the office didn't have the bandwidth to really help. Some of them have tried, but viewed it as a second class citizen to our development efforts. I can't entirely blame them for this since most of our code was still in Angular. So there was a huge cost benefit deficit competing for attention with the newer features we were getting asked to produce by the business.

It was at this time that I reached out to the more frequent pull request authors that showed attention to testing and documentation with an invite to join the organization. I worked on improving the Contributing Guide and Maintaining Guide to stand as a governance for this growing team. In a sense I didn't want to see the project cease progression again because of my own inabilities to keep up. I also knew that I would be moving off our front-end sites in the coming months to head up a DevOps team.

Many folks did accept the invite to join the organization and we haven't really heard much from them since. Though there were others that did accept the invite and are now thriving contributors. In fact I'd say that [Jimmy Jia (taion)](https://github.com/taion) and [Jason Quense (jquense)](https://github.com/jquense) now stand as the current technical leads with [Alexander Shemetovsky (AlexKVal)](https://github.com/AlexKVal) as the bulldog that just keeps fixing everything he can as fast as he can.

I can say that my goal to build a community that worked together to continue building the project was a success that continues to refine the project.

## What next?

React-Bootstrap still has some work to achieve Section 508 and WCAG 2.0 AA compliance, at which point we'll declare a 1.0 release. We'll need to keep up with React and Bootstrap to keep the project up to date with the latest features of both projects.

## What does the future look like for React and front-end in general? Can you see any particular trends?

The future of React is undeniably bright. I have full confidence in the core community involved in defining the best practices for building these front-end frameworks and tools.

## Who should I interview next?

Jimmy and Jason would have more current insight to the affairs of React-Bootstrap.

## Conclusion

Thanks a lot for the interview Matt! I hope React-Bootstrap will have a bright future and more people will find the project. There's a [getting started guide](https://react-bootstrap.github.io/getting-started/introduction) for those interested. Also check out [the component listing](https://react-bootstrap.github.io/components/alerts/) to get a better idea of the capabilities of the library.
