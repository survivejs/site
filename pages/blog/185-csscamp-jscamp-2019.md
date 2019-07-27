---
title: 'Experiences on CSSCamp and JSCamp 2019'
date: 2019-07-27
headerImage: 'assets/img/jscamp2019/hello.jpg'
keywords: ['conference']
---

I was invited to [CSSCamp 2019 (17.07)](https://csscamp.tech) and [JSCamp 2019 (18-19.07)](https://jscamp.tech) by David Pich, the main organizer, to help out. I performed speaker interviews and a part of the Twitter coverage while documenting the event a bit.

## Overview of CSSCamp and JSCamp 2019

![Hello from CSSCamp or JSCamp](assets/img/jscamp2019/hello.jpg)

CSSCamp and JSCamp were held as a dual conference in Barcelona, Spain. CSSCamp was held for the first time while JSCamp was the second time in a row. Before that, there used to be a year of AngularCamp before the event was rebranded last year.

In total, the events attract roughly 600 developers, and especially the conference portions seemed close to sold out although there was space in the workshops. I know from experience selling can be unpredictable, and many things can go wrong.

![Preparing for the speaker interviews](assets/img/jscamp2019/interview.jpg)

### The Venue

![Especially the lighting of the venue was impressive](assets/img/jscamp2019/lighting.jpg)

The event was held at Auditorio AXA, the same venue as last year. Although not the most spacious, it's one of the more attractive conference venues I've seen, and it fits the purpose quite well. Capacity-wise the conference cannot grow from this within the same space, but that said, the scale seems fine even now. Sometimes events become too big, and as a result, the atmosphere suffers.

### The Workshop Days - 15-16.07

![Coffee at the workshops](assets/img/jscamp2019/coffee.jpg)

The conference began on Monday with a workshop by Kyle Simpson. He held another one on Tuesday, and that's when I joined the event. On Tuesday, Sean Larkin and Harry Roberts held theirs in addition to a second workshop by Kyle. The workshops were held in a full-day format. I cannot comment on the quality of the workshops as I didn't attend any this time.

![Learning hard at a workshop](assets/img/jscamp2019/workshop.jpg)

### CSSCamp - 17.07

[CSSCamp](https://csscamp.tech) was held right after the workshop days. It was targeted towards both designers and developers, and I feel it made the whole conference more diverse than the last year.

The day started with a keynote by Tatiana Mac, where she discussed how to build socially inclusive design systems. It's easy to forget the context in which we design, and by understanding our biases, we'll be able to create more accessible designs.

![Tatiana Mac delivering her keynote](assets/img/jscamp2019/tatiana.jpg)

After the keynote, Jason Pamenthal followed with a technical talk about variable fonts and their potential for the web. Variable fonts move away from the traditional thinking of fonts where you have multiple separate variants of the same typeface to choose from. Instead, we have a single typeface we can alter on various dimensions using variables, hence the name variable fonts.

Cassie Evans talk showcased how to use SVG for animation on the web, and it was well-received by the audience. I think there's a lot of potential there we are still missing as developers. The funny thing is that as a specification SVG is old but we still don't use it to its full potential. It's nice to see SVG receiving more attention as especially now with high resolution displays using it pays off.

![Cassie Evans at the makeup lady - each speaker received the treatment](assets/img/jscamp2019/makeup.jpg)

Oliver Turner continued on Houdini, the upcoming standard that's going to change the way we write and think about CSS. The talk was valuable as it showed perhaps a glance of a future where innovation in CSS is driven by the community, not by the standards bodies.

![Oliver Turner captured from the backstage](assets/img/jscamp2019/oliver.jpg)

After the lunch break, Stéphanie Walter dived into design techniques that let us improve perceived performance. Although actual, absolute performance is essential, by understanding a bit of psychology, we can create applications that feel faster by designing the right way.

Adam Argyle's following talk went into the opposite direction, claiming that sometimes our user interfaces are too fast. By slowing down the animations, you create an entirely different perception of the application. The idea is related to increasing padding on a site as having more room creates a distinct impression.

In his talk, Sergei Kriger discussed how to make asynchronous user interfaces accessible. Many applications are like this, and it was interesting to see how you might perceive such an interface from an accessibility perspective. It's an aspect I hadn't thought about before.

Harry Roberts dug into the concept of resource hints. They are asset loading annotations that tell the browser something about your preference but doesn't force it to do anything. That's why they are called hints. Perhaps the most known example is [`rel="preload"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) as you can use it to tell the browser to load assets even before you need them to speed up subsequent usage of your application or a site.

Lara Schenck took a refreshing look at how to write and test CSS. Her thesis was that you could treat CSS as a programming language. Especially the trendy topic of utility classes taps into this. In the approach, you wrap specific functionality behind a particular class and then combine the result to create the user interface you prefer.

Although the method requires effort when you construct the classes, now you have something you can share between views, and most importantly, to test. Testing CSS is an underappreciated topic, and it was great to see an approach that lets us do that.

### JSCamp - 18.07 - Day 1

![Kyle Simpson preparing for his keynote](assets/img/jscamp2019/kyle.jpg)

After the CSSCamp day, it was time for JSCamp and its two days. The first conference day began with an 80-minute keynote by Kyle Simpson. His main point was that we should rethink the way we develop our sites and applications. Although ideas like progressive enhancement were valid in the past, we need a bit more.

Kyle's thesis was that we should let the user define which fidelity they prefer by using a quality metric. The implementation can be a slider that allows the user to choose the version of the site they prefer. To implement the scheme, we'll have to change our thinking and make our work more composable. We have to begin to think in terms of feature sets and different versions of a feature. The idea would push the control over the quality of service to the user from the developer end and shift the focus.

Jenn Creighton's talk continued on the topic of iterators. She held the presentation in a refreshing "choose your own adventure" format that made it a bit more interactive while discussing the issue. Iterators are behind many of the basic structures of JavaScript, and understanding them lets us access some of the power introduced in the new features of the language over the past few years.

Sigurd Schneider, a part of the V8 team at Google, dug into the internals of V8. He gave an in-depth talk on many of the features that aren't discussed so often. In terms of memory management, weak collections seem like a way forward. I expect most JavaScript developers won't end up using them, and it's a feature for especially library authors to leverage.

After a lunch break, Maya Shavin discussed the rise of CSS-in-JS. Overall, it was an excellent introduction to the topic, and I'm definitely in favor of the approach as it lets me develop component libraries effectively. The utility class movement is parallel to this as it addresses the same concerns of CSS maintainability.

Adam Argyle's second talk dug into pwototyping. By this, he means using modern PWA approach to prototype a high fidelity mobile application fast. It's achieved by using a set of techniques that let us deliver high performance. The idea is not to develop the functionality but rather to envision what it might look like to a potential investor or a client. The approach optimizes development speed and fidelity in favor of architecture and other concerns. The point is to use a spike like this to sell the project which you then implement properly.

Shawn Wang continued on the idea of [JAMStack](https://jamstack.org). His thesis was that JavaScript is eating the world of static site generation, and this, in turn, is affecting the way we approach even large content-driven sites. As time goes by, it becomes possible to push more and more functionality into this realm while gaining many benefits of static websites.

I'm a proponent of the approach, and I've seen its power in practice as I've developed my sites. Especially creating your content API and then driving site generation from that is powerful, and I believe there's still more to come as technology evolves.

### JSCamp - 18.07 - Afterparty

![Sala Bikini](assets/img/jscamp2019/bikini.jpg)

The afterparty of the event was held at Sala Bikini right underneath the main venue. Space itself was great although the party may have been too late for people to join. I decided to turn in early to prepare for the last day of the conference as it had been a rough week already.

![Partying at afterparty](assets/img/jscamp2019/party.jpg)

One of the main attractions of the afterparty was a synthpop band. Although I missed the show, I had a chance to discuss with the band during a speakers' dinner and they seemed like fun people and I bet the gig was great.

![Preparing for the gig](assets/img/jscamp2019/discolights.jpg)

### JSCamp - 19.07 - Day 2

![There was something interesting to look at but I don't know what](assets/img/jscamp2019/looking.jpg)

Day two of JSCamp started with a talk about accessibility patterns by Garance Vallat. She included many practical examples, and it was an informative talk to follow. For me, as a conference organizer, it would have been interesting to pair the presentation with Sergei Kriger's one as then you gain an enhanced perspective on the topic.

Ruben Bridgewater's talk discussed the topic of error handling. I think it was an excellent topic for the conference often given JavaScript developers don't provide a lot of thought to it. I should leverage inheritance to create a hierarchy of Error classes, so when I raise an error, then I get its category straight out of the box.

The other learning was that it makes sense to have a layer where you at least capture and log possible errors. When discussing with him, I learned he is in favor of letting applications crash fast as at least then you have a clear state which to fix. Based on that, I would say it's essential to take care of your monitoring, so you fix potential runtime issues as you notice them.

Sean Larkin's presentation delved into how Microsoft makes applications fast. It makes sense to have a protocol on how you track performance issues and document what you are doing so other people can learn as well. Sometimes the fix itself is trivial. To fix something, you have to be aware that something was wrong in the first place. It's one of the points where monitoring what you and your users are doing can help.

Paul Verbeek-Mast's talk went into the evolution of dev tools. It's an underappreciated topic, and it was great to see how much the tooling has evolved. I learned that Firefox has particular functionality in its tooling to visualize flex and grid while Chrome tooling seems better for tracking performance issues.

After the lunch break, Vladimir Agafonkin, the author of leaflet and many other popular libraries, discussed algorithmic performance and its implications in practice. It's one of the things many people learn during their time at university. Given there's a large number of developers that don't understand the topic, it was great to see the talk.

It was particularly instructive to see practical examples of speedups whereby first understanding the problem, Vladimir was able to speed up the code significantly. It can mean your code won't look as clean after optimization, but that's the tradeoff to make to cut algorithmic complexity. It's an especially valuable skill to have if you work on code that requires high performance.

Rich Harris' talk was about [Svelte](https://svelte.dev). It's a web framework using a compiler-heavy approach. Compared to libraries like React, the amount of code you have to write is significantly smaller, and that was also the central thesis of Rich's presentation. By writing less code, you end up writing fewer bugs. The declarative approach provided by Svelte is refreshing.

T> [You can learn more about an earlier version of Svelte at the interview.](/blog/svelte-interview)

Henri Helvetica ended the conference by discussing the evolution and the shape of the web. It was more of a philosophical talk that put what we are doing as web developers into a context. As web developers, we have a great responsibility in how the web develops. We should take good care of it, so it's there for future generations to use as we did in our time.

![Did you know Helvetica is Henri's stage name?](assets/img/jscamp2019/henri.jpg)

## Conclusion

![At Tibidabo, one of the speakers' dinner locations](assets/img/jscamp2019/tibidabo.jpg)

For me, both CSSCamp and JSCamp are reliable conferences. They seem to pull the local communities together and compared to the last year, and I think the audience was more diverse. It was a good move to attract more designers to the events by having the CSS theme included. The venue itself is excellent although now it's running at its limit meaning the conference cannot grow further.

If you want to experience Barcelona in Summer, it's not the worst idea to visit the conferences. The content is good, and the city is fantastic. I can't wait to see what David has in mind for the next year.

T> [You can find my conference photos online.](https://www.icloud.com/sharedalbum/#B0pG6XBubLzvzF)
