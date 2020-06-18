---
title: "Synthetics - Monitor availability and performance of your website and APIs - Interview with Siva Kaliappan"
date: 2020-06-18
headerImage: "assets/img/rope.jpg"
headerAuthor: "freyer"
headerSource: https://pixabay.com/photos/rope-green-synthetic-industrial-1457381/
keywords: ["interview", "monitoring"]
---

Anything you don't measure or test, you cannot improve. The wisdom applies particularly to web as we develop our websites and applications. Without any kind of monitoring solution in place, you are flying blind.

To learn more about the topic, I am interviewing [Siva Kaliappan](https://twitter.com/sivasamyk) from Sematext.

## Can you tell a bit about yourself?

My name is Siva Kaliappan and I am the Product Lead for Sematext Synthetics. I primarily work on the Sematext Monitoring product line across all parts of the stack from the front-end, backend, and agents.

Lately, I have mainly worked on the design and development of Sematext Synthetics. I am also an open-source developer and author of the popular [LogTrail](https://github.com/sivasamyk/logtrail) Kibana plugin included in Sematext.

## How would you describe _Synthetics_ to someone who has never heard of it?

[Sematext Synthetics](https://sematext.com/synthetic-monitoring/) is like your trusted user who monitors your APIs/websites 24x7 from multiple locations around the globe and alerts you when things go wrong. Sematext Synthetics also provides detailed reports on the availability and performance of your web applications.

## How does _Synthetics_ work?

At a high level, Synthetics works by periodically sending requests to your HTTP endpoints or launching your website in an embedded browser from multiple locations around the globe and recording various performance metrics and errors, if any. Then we check if the actual results meet the expectations and also persist the results for reporting.

As a user, you start by creating an HTTP or Browser monitor, specify the interval to run, list of locations to run the monitor from, monitor specific details, and a list of expected conditions for the monitor to pass.

An [HTTP monitor](https://sematext.com/docs/synthetics/http-monitor/) is used to monitor HTTP endpoints like APIs or Web URLs. HTTP monitor sends a single HTTP request to the configured HTTP endpoints with specified request details and records the response and performance timings.

A [browser monitor](https://sematext.com/docs/synthetics/browser-monitor/) is used to monitor a web page or user journey. Browser monitor uses a [Puppeteer](https://github.com/puppeteer/puppeteer) API based script to drive an embedded Google Chrome browser. Sematext Synthetics runs the script and records the various performance timings and errors, if any. It also captures one or more screenshots of the loaded page for visual inspection.

## How does _Synthetics_ differ from other solutions?

One of the major differentiators for Sematext Synthetics is it being part of Sematext Cloud, the integration it provides with [infrastructure monitoring](https://sematext.com/spm/), [log management](https://sematext.com/logsene/), and [real user monitoring](https://sematext.com/experience/).

While you can independently use each of these solutions, you can reap the benefits of their tight integration. Each of them is just a click away makes debugging a _lot_ faster & easier. And with the flexibility to create custom reports and have data from all the above in a single dashboard, you could create a completely customized view of your application performance that suits your needs.

## Why did you develop _Synthetics_?

After releasing [Experience](https://sematext.com/experience/), our Real User Monitoring solution last year, we felt Synthetic Monitoring would be the right addition to Sematext Cloud.

Now with Synthetics, our customers can get end-to-end visibility of their applications from a single place. Also, we needed availability monitoring for our applications. We have been using Synthetics to monitor our applications and also found it uncovering issues with our APIs on a few occasions.

## What next?

We have lots of exciting features lined up for Sematext Synthetics. Consider a part of our roadmap below:

- Support for a browser-based recorder to quickly record Synthetics scripts for non-developers.
- The ability to monitor resources behind firewalls using private agents for enterprise users.
- Public status pages to share your API status with your customers.

And of course, we listen to our users and customers always and will be adding features based on their input, too.

## What does the future look like for _Synthetics_ and web development in general? Can you see any particular trends?

We see more interest in below areas in the future concerning Synthetic monitoring:

- The performance metrics measured in the Synthetic environment are moving from browser-centric metrics like page load time, DOM interactive, etc. to user-centric metrics like First Contentful Paint (FCP), Time To Interactive (TTI), Speed Index, etc.
- Adding more intelligence around failures - When things fail, instead of just alerting the user that they failed, providing more information for the user to debug and identify the root cause quickly. In some cases, point them to possible root causes. We think Sematext is in a perfect position to do this since we can leverage the end to end visibility of application performance using the Sematext platform.
- Integration of Synthetic monitoring into the development workflow to catch web performance issues much earlier in the application lifecycle. It would be made more accessible by providing the ability to run Synthetic tests as part of the CI/CD pipeline.

As far as web development trends are concerned, we see below area getting more interest:

- A move away from classic multi-page websites in favor of single-page apps, even informational/presentational websites thanks to the emergence of static page generators for popular JS frameworks like Gatsby.js.
- Single page applications are a defacto standard for any web development. Again thanks to JavaScript frameworks.
- We also see that web accessibility is becoming a standard, due to recent regulations and inclusion in most JavaScript frameworks.
- To summarize, web standards are driven by major JavaScript frameworks and we don't see this changing soon. There will always be attempts to pass something new. But until big players adopt this, it will not be a standard.

## What advice would you give to programmers getting into web development?

As computers and mobile devices are becoming faster, the websites are becoming slower. It should be the other way around. The average page size keeps increasing.

As someone new to front-end development, I would advise you to think about the web performance from the beginning. A website that loads quickly and consumes fewer resources results in happier users and a lower carbon footprint. Let us all help build a more sustainable web!

## Who should I interview next?

Otis Gospodnetic, Sematext Founder.

## Any last remarks?

We are excited about the release of Sematext Synthetics and its future road map. Thanks for having me and excellent work with SurviveJS!

## Conclusion

Thanks for the interview, Siva! If you haven't already, adding a monitoring solution to your toolkit is a valuable asset for a web developer as that will allow you to put the effort where it matters and understand when things go wrong in a way you might not expect.

> Sematext offers a [free 30-day trial](https://apps.sematext.com/ui/registration). Give it a go and send Siva your feedback!
