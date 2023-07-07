---
title: "RelativeCI - In-depth bundle stats analysis and monitoring - Interview with Viorel Cojocaru"
date: 2023-07-07
headerImage: "assets/img/headers/relative.jpg"
keywords: ["interview", "ci", "webpack"]
---

In terms of development productivity, Continuous Integration (CI) has become a common technique across development teams across the world.

In this article, I'll interview [Viorel Cojocaru](https://twitter.com/vio) about the topic to learn more.

## Can you tell a bit about yourself?

![Viorel Cojocaru|100|100|author](https://www.gravatar.com/avatar/b3fc8f72b34d2d56bf44c7d3b58f1785?s=200)

Hi! I am Vio, the founder of [RelativeCI](https://relative-ci.com) and the maintainer of [bundle-stats](https://github.com/relative-ci/bundle-stats). I started programming for the web over 15 years ago with Java, PHP, and HTML/CSS/Javascript. In the last ten years, I've worked on web applications with React/Preact/Angular and Typescript/GraphQL/Node.js.

When I'm not coding, I enjoy spending time with family and friends outdoors, exploring southern Spain.

## How would you describe _RelativeCI_ to someone who has never heard of it?

RelativeCI is a web service that helps developers to optimize and fix web application bundles before shipping to production by analyzing and monitoring every build.

## How does _RelativeCI_ work?

RelativeCI agents ([webpack plugin](https://github.com/relative-ci/agent), [CLI](https://github.com/relative-ci/agent), [GitHub action](https://github.com/relative-ci/agent-action)) extract, validate, and filter the bundle stats during the CI build task and send it to the service along with the build information. The service generates the bundle-stats report, compares it to the baseline report, and shows the impact of the change on the web bundle.

![Report assets](assets/img/relative/ci-job-assets.png)

You can review the report summary directly on GitHub (pull request comment, check report, status review) or Slack. Click on any insight/metric link to navigate directly to the corresponding section of the report.

![GitHub Pull Request comment](assets/img/relative/pr-comment.png)


![Slack notification](assets/img/relative/slack.png)


You can also monitor changes over extended periods by exploring the project insights or the metric insights.

![Project insights](assets/img/relative/project-insights.png)

## How does _RelativeCI_ differ from other solutions?

RelativeCI generates an in-depth bundle report with insights and metrics and compares assets, modules, and packages with the baseline report. The report allows us to quickly determine the cause of a change during the code review phase without having to rebuild and re-analyze older versions. Thanks to the report, you can:

1. Notice regressions including
  - large assets
  - duplicate packages
  - new direct or transitive packages
2. Identify opportunities for optimization such as
  - extract async chunks
  - improve commons chunks
  - replace large dependencies

Depending on the project's needs, you can set up dynamic conditions to get the report summary via a Slack notification or trigger the GitHub review flow.

![Review pending](assets/img/relative/review-pending.png)

## Why did you develop _RelativeCI_?

While migrating the build flow from Grunt/Gulp to webpack for a half dozen projects, I followed a manual process that involved running long build tasks, saving the webpack assets and modules stats data into spreadsheets, and comparing the results. It was error-prone and time-consuming, and I had to repeat the process multiple times for every change.

To automate the process, I built an open-source tool that compared multiple webpack stats and generated a standalone report: bundle-stats. To allow the team to proactively fix or optimize the web application bundle before shipping to production, we needed to continuously analyze the bundle stats as part of the CI flow and surface the report summary directly on GitHub.

## What next?

We recently started working on bundle-stats v5. The plan for the new major version is to improve the support for Rollup & Vite, add the foundation for esbuild/parcel support and start exploring the module & package dependency graph. Also, we are working on making it easier to monitor and set up monorepos. [Our roadmap is publicly available online.](https://relative-ci.com/roadmap)

## What does the future look like for _RelativeCI_ and web development in general? Can you see any particular trends?

The web platform increased capabilities and performance, and the modern frameworks and tools empower us to build web applications that solve more problems for our users, at scale, with better performance, UX, and DX. At RelativeCI, we are seeing our users build web applications that are becoming more complex, getting closer in terms of functionality with native applications: no/low code editors, design tools, programming playgrounds, productivity tools, home automation platforms, and so on.

I expect this trend to accelerate even more when implementing other capabilities at scale (for example, Web Assembly). I am amazed by the progress made by the front-end ecosystem in recent years and excited to see what new projects will emerge.

## What advice would you give to programmers getting into web development?

Modern web development stack can appear intimidating at first. Starting with the fundamentals (HTML, CSS, Javascript) can help create a solid base and speed up the learning process for the latest tools, libraries, and frameworks.

## Who should I interview next?

- [Tobias Koppers](https://github.com/sokra) - Turbopack/Webpack
- [Devon Govett](https://github.com/devongovett) - ParcelJS, React Aria Kit, LightningCSS
- [Miško Hevery](https://github.com/devongovett) - Qwik, Angular
- [hardfist](https://github.com/hardfist) - rspack
- [Zoltan Kochan](https://github.com/zkochan) - pnpm

## Any last remarks?

If you have any questions, please feel free to reach out on [Twitter](https://twitter.com/vio) or via [email](mailto:vio@relative-ci.com).

## Conclusion

Thanks for the interview Vio! I like your fresh take on a CI and I am sure many developers will find your solution useful in their work.

To learn more about RelativeCI, consider the following resources:

- [RelativeCI homepage](https://relative-ci.com)
- [RelativeCI - How to get started](https://relative-ci.com/documentation/setup/install-github-application)
- [RelativeCI Twitter account](https://twitter.com/relative_ci)
- [RelativeCI GitHub](https://github.com/relative-ci)
