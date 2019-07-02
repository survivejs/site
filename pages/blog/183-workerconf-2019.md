---
title: 'Experiences on WorkerConf 2019'
date: 2019-07-02
headerImage: 'assets/img/workerconf2019/workerconf.jpg'
keywords: ['conference']
---

I was invited to [WorkerConf 2019 (27-28.06)](https://www.worker.sh) as a speaker. I also participated a workshop and went hiking after the conference. It was a small-scale conference (about 80 people) held in Dornbirn, Austria. It was my second time in the city and I enjoyed especially exploring the alpine scenery and the nearby cities on my way to [the yearly webpack meetup held at Munich](https://www.meetup.com/webpack-munich/events/261324233/).

## Overview of WorkerConf 2019

![Dornbirn at night](assets/img/workerconf2019/dornbirn-at-night.jpg)

WorkerConf was held second time in Dornbirn. It's a sibling to [Agent Conf](https://www.agent.sh) by the same organizers. While Agent Conf is about the frontend and skiing, WorkerConf has focus on the backend and Summer activities such as hiking or swimming.

Both events have workshops available and I think it's a good idea to combine conferences with something more than just technical content as it allows you to experience the region and the culture while making your trip more complete.

### The Workshop Day

![Tractor at Dornbirn](assets/img/workerconf2019/tractor.jpg)

I took part in the Node.js and [Fastify](https://www.fastify.io) workshop by Matteo Collina and Tomas Della Vedova. The half-day workshop (4 hours) covered the Fastify web framework in detail and gave the participants a good idea of its capabilities and approach.

The instructors were knowledgeable but I would have enjoyed more relaxed pace by having an entire day to dedicate to the topic. Often there are technical issues to debug and a day format gives more room for discussion.

That said, I think Fastify is a great framework to study especially as a replacement to the aging Express. The promise of high performance combined with a robust plugin architecture make this forward-looking framework a winner in my eyes.

### The Conference Day

![Atmosphere](assets/img/workerconf2019/atmosphere.jpg)

As it's usual for smaller conferences, WorkerConf ran in a single day format. The conference day was long as the program begun 9:00 after a brief breakfast and ended around 20:30 after the last talk. There were thirteen speakers in total and the talks varied from more general ones to technology specific ones.

### The Venue

![Waterguns!](assets/img/workerconf2019/waterguns.jpg)

The organizers were rather unlucky with the weather as the event was hit by a heatwave. The small venue (Plattform_V) and its air conditioning couldn't keep up with the conference and I prefer the nearby venue used for Agent Conf instead. The organizers arranged refreshments and there was plenty to drink so that helped a notch.

The screen of the venue was quite nice (limited to 720p) but unfortunately a part of it was obscured by the pedestal setup making it difficult to follow the presentations from the side at times. That's more of a limitation of the space, though, and it wasn't a major annoyance.

The catering for the lunch and the dinner was provided by a food truck parked nearby. The venue itself had occasional snacks and overall the food had better quality than most conferences I've been to.

Likely the venue would have worked much better if the weather hadn't been so hot. Now a large portion of the attendees had left the venue well before the last talks.

### 13 Speakers, Broad Web Topics

![WorkerConf](assets/img/workerconf2019/workerconf.jpg)

In total, the conference had thirteen speakers with varying web-related topics. The topics were well organized and there were plenty of tidbits to learn even for an experienced practitioner. The breaks were long enough and gave a good chance to escape the heat a bit.

### Ultralight Java Microservices with GraalVM - Thomas Würthinger

![Thomas Würthinger](assets/img/workerconf2019/thomas.jpg)

Although I don't develop Java, there are lots of technologies that emerge from the space. Oracle's [GraalVM](https://www.graalvm.org) is one of those. I wasn't familiar with the virtualization solution before so it was nice to get an introduction to the topic.

The main thesis of Thomas Würthinger was that there's a gap between interpreted and compiled languages. Both have their strong sides and it's possible there are some ways to bridge this gap over time. At the moment you'll have to compromise between the characteristics you want.

The interesting thing about GraalVM is that the environment has been to designed to run a lot of different languages and even to mix them. You could run Java inside JavaScript and vice versa if I understood correctly. This means you could implement portions of an application in the language best suited for it.

### JavaScript Class Features: A case study in TC39 - Dan Ehrenberg

![Dan Ehrenberg](assets/img/workerconf2019/daniel.jpg)

Dan Ehrenberg from TC39 discussed the standardization process to show people how JavaScript evolves through the influence of the committee and people taking part in its operation. You don't have to be a member of TC39 working group to affect the evolution of its language as their [work is public on GitHub](https://github.com/tc39).

When it comes to decorators, Dan's main topic, it was interesting for me to see how the community forced the hand of TC39 to standardize the feature by first having unofficial implementations of the requested feature in the wild. The rising popularity of the feature meant it will most likely have to become a part of the official standard.

### JavaScript - Quo Vadis - Juho Vepsäläinen

![Quo Vadis](assets/img/workerconf2019/quo-vadis.jpg)

I gave my talk about the future of JavaScript. I had given the talk a few times before. The first time I did it was in 2016 so it was interesting for me to go through the slides and update everything. Many of the original points still stood while a few new ones had appeared.

It feels like the ecosystem is in a constant motion. The current struggles seem to center around package management (npm) and the increasing popularity of typing (TypeScript). My expectation is that we'll see progress in these fronts during the next 5-10 years as the community will adapt both to use distributed alternatives for package management while adopting typing even in larger scale.

It's likely the awareness on the value of typing will lead people to new ecosystems. It feels like [ReasonML](https://reasonml.github.io) is in the same place where TypeScript was five years ago while it was still a young language. I don't expect the Reason to become mainstream but I think it will contribute a lot to the development of JavaScript and its ecosystem by showing us better ways of developing while innovating in the space.

T> [You can find the slides of my talk online.](https://presentations.survivejs.com/javascript-quo-vadis/)

### Visualizing cloud architectures in real time with d3.js - Julie Ng

![Julie Ng](assets/img/workerconf2019/julie.jpg)

Julie Ng's talk focused on her experiences around cloud architectures and microservices in particular. Her talk was a great tutorial to the topic and the challenges related to developing applications this way.

She built a visualization based on the popular [D3.js](https://d3js.org) to illustrate how a fault on a graph of microservices would cascade. The point was that it's a debuggable option to standard dashboards that show only numbers without telling much about the exact faults.

### Next.js: The React Framework - Tim Neutkens

![Tim Neutkens](assets/img/workerconf2019/tim.jpg)

Tim Neutkens' presentation gave an overview of the popular [Next.js framework](https://nextjs.org) for React. As a recent user of Next.js, it helped me to understand its capabilities and future better. The framework has been progressing furiously over the past few years so it was great to see the vision for it.

### Server-Side Rendering using Nuxt.js - Vanessa Böhner

![Vanessa Böhner](assets/img/workerconf2019/vanessa.jpg)

Vanessa Böhner's talk complemented Tim's talk by discussing [Nuxt.js](https://nuxtjs.org), a Next.js inspired framework for Vue.js. She explained how she approached developing a site for her podcast under a strict deadline. It was cool to see the contrast with the React approach.

### Speeding Up React SSR with ESX - David Mark Clements

![David Mark Clements](assets/img/workerconf2019/david.jpg)

According to David Mark Clements, if React was invented today, we wouldn't be using JSX. Instead, we would rely on ES6/ES2015 template strings. And that's what he achieved in by developing [esx](https://www.npmjs.com/package/esx). esx lets you write JSX within template strings.

The great benefit of the approach is that it can speed up server-side rendering by avoiding work through caching. The more complicated your application is, the greater the potential gains.

The best thing is that to get the benefits, you don't even have to use esx as it's possible to precompile JSX to esx without having to change the way you write code. It's good to note approach is still experimental, though, and you should test the behavior and output carefully in a production environment.

My hope is that the ideas explored by David find their way to React code eventually as then a large community could benefit from the performance benefits.

### JavaScript: The fairly odd parts (explained) - Benedikt Meurer

![Benedikt Meurer](assets/img/workerconf2019/benedikt.jpg)

Benedikt Meurer, one of the organizers of the conference, gave a lightning talk on fairly odd parts of JavaScript. I saw the original version of the talk in YGLF Kiev 2018 and now Benedikt dove into the details. Overall it was an entertaining bit and a great addition to the conference by one of the authors of the legendary V8 engine.

### Benchmarking inside and out - Tomas Della Vedova

![Tomas Della Vedova](assets/img/workerconf2019/tomas.jpg)

Tomas Della Vedova, one of the authors of Fastify, discussed his approach to benchmarking. The main points for me were that before measuring, you should make sure the JIT is warm by performing a few runs before starting the main ones. You also have to be careful about what you measure. You may end up measuring something entirely different than what you want if you don't think about the test setup.

### Automating Your Vulnerabilities Away - Tierney Cyren

![Tierney Cyren](assets/img/workerconf2019/tierney.jpg)

Tierney Cyren from Node.js discussed security of npm and applications built on top of it. You should maintain a cached version of the registry to protect against catastrophic failures from registry side. It's also important to keep track of the current versions of the packages and leverage tools such as `npm audit`.

You should also have a process for dealing with security issues so if something happens, you are at least ready instead of having to improvise. Given Node itself can have security issues, you should have means to get notified so you can update as needed.

### Reason: A ML language for the Masses - Patrick Stapfer

![Patrick Stapfer](assets/img/workerconf2019/patrick.jpg)

Patrick Stapfer, the founder of [Reason Association](https://www.reason-association.org), discussed Reason language and why it's finally ready for the masses. He gave an overview of the capabilities of the language and after that he gave a live demonstration showing the value of the type system.

I think Reason is starting to get to a good place and you can already see especially product houses adopting it for their own development.

### Stream into the future - Matteo Collina

![Matteo Collina](assets/img/workerconf2019/matteo.jpg)

Matteo Collina, one of the authors of Fastify and the maintainer of Node.js streams, discussed the complexity of streaming. Handling streams has always been challenging in Node.js and it's even more complex than I thought. Fortunately Matteo is doing his best to improve the primitives while avoiding breaking too much in the process.

One of the hard parts will be remedying the differences between the browser and Node.js streaming so APIs like `fetch` work as we expect. To make things worse, using promises brings its own problems. As it happens, generators might be the right primitive to use with streams instead of what we've seen so far.

### Security: the serverless future - Olga Skobeleva

![Olga Skobeleva](assets/img/workerconf2019/olga.jpg)

Olga Skobeleva discussed how Cloudflare is moving towards edge computing and what it means in practice. Compared to what we had before, pushing computation close to the consumer seems like the next natural step as it means in some cases we can avoid a round-trip to the server. The approach is new still but there's enough capability to experiment with.

To demonstrate, Olga showed how to develop two-way authentication using a traditional password combined with a message sent to Telegram messaging platform to confirm login to a service.

## Hiking Day at Latschau

![Hiking at Latschau](assets/img/workerconf2019/latschau.jpg)

The highlight of the conference for me was hiking on Saturday at Latschau. It's simply amazing to go up and down the hills. The views are amazing and there's even snow. Best of all, it's not too hot although you have to be careful with the sun. I wouldn't mind hiking in the mountainous region of Austria more. The experience alone made the whole trip worth it.

There was one more activity day on Sunday but I didn't have enough time to stay for that as I went to Munich to run [the yearly webpack meetup](https://www.meetup.com/webpack-munich/events/261324233/).

## Conclusion

![If you don't like clowns, don't visit Bregenz](assets/img/workerconf2019/bregenz.jpg)

Although the conference venue could have been better, I enjoyed the conference overall. Likely I would try to develop the format further. Single track is fine but given you have some of the leading minds of the industry in the same place, there could be room for more open sessions instead of a conference alone. Especially the outdoor activities seem to be the thing for WorkerConf and I hope they emphasize the aspect further.

T> [You can find my conference and hiking photos online](https://www.icloud.com/sharedalbum/#B0pGWZuqDGKqbRM)
