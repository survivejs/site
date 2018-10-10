---
title: 'Experiences on WebCamp Zagreb 2018'
date: 2018-10-10
headerImage: 'assets/img/webcampzg2018/selfie.jpg'
keywords: ['conference']
---

I was invited to [WebCamp Zagreb](https://2018.webcampzg.org/) as a speaker and a workshop trainer. I gave one of my webpack workshops at the event and [discussed static websites](https://drive.google.com/open?id=1WyuJkhwKj3sTmoAqQm9yBWoYwZJyAIbe1EenrP34xAE) and the way I see them in my talk.

It was my first time in Zagreb, and I was pleasantly surprised by the city. Zagreb reminds me of Prague or Vienna architecture-wise. There are fewer tourists and no subway, though. Price-level tends to be low, though, and using a taxi is a realistic option.

## Overview of WebCamp Zagreb 2018

![Oh, well](assets/img/webcampzg2018/well.jpg)

There were close to a thousand people at WebCamp Zagreb. The event was sold out. One unique aspect of WebCamp Zagreb is that the community organizes it. There isn't an equivalent event in Vienna for example. The conference has been running for many years, and during this time they have honed the process and the conference.

The conference started with two workshop days. After that, there were two days with talks and an afterparty to end it all. The schedule was relaxed and the talk lengths varied from roughly 25 minutes to 45 minutes.

The conference was split into two main tracks and a smaller unconference one. The conference venue had one big hall that was divided into the half after keynotes of each day. Sometimes you could hear some noise (applause, laughter) through but that wasn't a big issue. Overall the arrangement felt fine, and there was enough space in the venue for all the people.

The topics were varied. There were technical, design, and business talks of different levels. In this way, it reminded me of WebExpo, and I like the concept as it allows you to get exposed to more ideas. You learn more. Overall, the talks had a high quality, and there were a couple of pleasant surprises included.

## Day 1

![Selfie by proxy](assets/img/webcampzg2018/selfie.jpg)

I traveled to Zagreb a day before my workshop on Thursday. Next time I might reserve a day or two more to enjoy the city more. The accommodation arranged by the organizers was in an apartment hotel right next to the venue. The apartments were close to new, and there was plenty of space. Compared to what conferences usually offer to their speakers, this was luxury.

### Taking CI and automated testing seriously - Alen Ladavac

![Alen Ladavac](assets/img/webcampzg2018/alen.jpg)

The first conference day started with a keynote by Alen Ladavac, the CTO of Croteam. Croteam is famous for developing the Serious Sam franchise and The Talos Principle in addition to many other titles.

In his talk, he discussed how game developers approach Continuous Integration and automated testing. Unlike in the web space, there isn't established tooling for automation and testing is a severe problem. Often studios end up developing their solutions. That's what Croteam did.

According to Alen, it is highly essential that gamers can complete a game and they don't get stuck due to a bug or a design issue. How to ascertain this for a complex game like The Talos Principle? Alen suggested a couple of ways - using bots, allowing game testers to add notes to the game world in-game.

Although puzzles of a game might be too challenging for a bot to solve the game, they can follow recordings made by people. The advantage of using bots is that instead of having people to play through the game after each change, they can be run on a server while using accelerated time within the game engine itself. A bot can be able to complete a 10-20h game within a twenty-minute run as a result.

Bots cannot replace human testers, but they can complement the effort and allow people to focus on other aspects such as "do things look right". People are also sometimes more clever in finding issues. To make it convenient, Croteam has implemented bug tracking within their game engine so you can attach notes to game assets and see notes other people have done.

The lesson for web developers is two-fold here: 1. It likely makes sense to run a bot against the app/service you are developing (acceptance testing ). 2. Making it easier for the users to report issues gives you higher quality issues.

### Property-based testing is a mindset - Andrea Leopardi

![Andrea Leopardi](assets/img/webcampzg2018/andrea.jpg)

Andrea's talk was about property-based testing. It's a testing technique that can be used to generate test cases, and I've used the approach in the past and written a solution of my own even. Although I knew the basic idea, it was good to get a recap.

Property-based testing relies on invariants for values and for property to test. Consider array sorting for example. You know that at least properties such as the following must hold always:

* The output must have the same length as the input.
* The output must contain the same items as the input.
* The output must be in ascending order.

Also, we have to define the types of parameters for the function to test. We could say we are sorting an array of integers for example. The information is required to generate a pseudorandom array passed to the invariants above and to check they hold. If a test fails, proper implementation can reduce the failure to a minimal example.

The problem is that often these invariants can be challenging to discover. Therefore the technique should be seen as complementary to unit testing. The most significant difference has to do with input value coverage. A property can cover a broader range of values and find corner cases you might otherwise miss.

To solve the discovery problem, sometimes it's possible to use another implementation as an oracle. You could try to improve performance this way for example.

### Designing with Accessibility in Mind - Bermon Painter

![Bermon Painter](assets/img/webcampzg2018/bermon.jpg)

Bermon discussed accessibility and its impact on design. If accessibility is considered in the design, it can open your software to new groups of people. Accessibility isn't a zero-sum game as even so-called regular users can benefit from the improvements. Sometimes you may also be required to implement specific measures by law.

Considering accessibility in the design phase may add to the initial cost of development and require different development practices. That's something I would have loved to learn more.

### A Token Walks Into a SPA... - Ado Kukic

![Ado Kukic](assets/img/webcampzg2018/ado.jpg)

Ado's talk discussed the authentication flow of JSON Web Tokens. I gained a couple of insights:

* Authentication server that gives the keys against successful authentication should be as a separate service.
* You should never store authentication related information to local/session storage. Instead, it makes sense to have it in-memory (think Redux or a similar state management solution).
* To solve the problem of refresh the browser, a session cookie on the authentication server is enough. It should be able to renew the auth on request after refreshing.

I would have loved to see a live demo, but apart from that, the talk was excellent.

### Where are the women? - Dora Militaru

![Dora Militaru](assets/img/webcampzg2018/dora.jpg)

Dora's talk was about the absence of women in the industry. Perhaps the key point for me was that it's not only about fixing some percentages. Instead, it's at least as important, if not more, to be inclusive instead of only diverse.

Having a diverse environment isn't enough if old decision structures remain in place. There's more structure than what's apparent. Depending on the action, different structures of a network become active. And that's where inclusivity comes in. Fixing the gender gap also means adjusting the structures and based on that gender quotas may be justified until the structures have been repaired.

Dora mention [Project Implicit](https://implicit.harvard.edu/implicit/). It's a project by Harvard meant to discover social attitudes. Overall, the talk was thought-provoking and provided a new perspective to the discussion.

### How did we open source our knowledge and practices - Robert Šorn

![Robert Šorn](assets/img/webcampzg2018/robert.jpg)

Robert discussed how he changed the knowledge processes of his company by starting an effort to document. It started small, but once people realized the value, his Git wiki-based approach started bearing fruits. Eventually, people developed it into a website and added features such as search to it.

Sometimes a lot of these things are implicit. Even though a process hasn't been documented, doesn't mean there isn't one. Exposing what's known allowed people to improve the content further. One side benefit was that onboarding new people to the company became more comfortable as a result.

### Headless architecture and the future of websites - Heidi Olsen

![Heidi Olsen](assets/img/webcampzg2018/heidi.jpg)

Heidi's talk discussed how her company approaches technical problems by allowing multiple different technologies used. The critical point here was to maintain a headless API in between to separate the frontend from the backend. The approach is similar to what I use to develop my sites these days.

She also mentioned [the strangler pattern](https://www.martinfowler.com/bliki/StranglerApplication.html) that's useful for refactoring legacy software by writing around it and eventually removing the old parts.

## Day 2

![Random statue](assets/img/webcampzg2018/statue.jpg)

Day two of the conference continued in the same format.

### Nitpicking terminology: are we using the right terms - Miro Svrtan

![Miro Svrtan](assets/img/webcampzg2018/miro.jpg)

Miro's keynote was about the terminology we use and how we interpret them. What agile means to someone, isn't the same to someone else. The critical point was that it's good to consider what terms we use and how we use them.

### Writing Superpowers for Geeks - Ivan Brezak Brkan

![Ivan Brezak Brkan](assets/img/webcampzg2018/ivan.jpg)

Ivan discussed why writing is an essential skill for programmers to acquire. By being able to write and articulate yourself well, it's easier to get complex messages through, and most importantly to respond appropriately to trolls.

### Pricing shouldn't be hard - Vladimir Bogdanić

![Vladimir Bogdanić](assets/img/webcampzg2018/vladimir-bogdanic.jpg)

Vladimir's talk was one of the highlights of the conference for me. He discussed how he approaches business and pricing in particular. One of the key points was how to approach proposals. You should be clear on the value to the client and make it easy to understand the exact offering. By articulating well, you can charge more since there's more value on the table.

Pricing-wise he mentioned that you should charge a fixed price for known quantities and hourly one for something that's not. Sometimes you might go from hourly pricing to a fixed one once you have enough experience. It's a different model as then you tie your price to the value delivered instead of hours worked.

### The Power of Persuasive Design - Alex Kuhn

![Alex Kuhn](assets/img/webcampzg2018/alex.jpg)

The critical point of Alex's talk was that design could be used to persuade or dissuade people to perform specific actions. That's how calls to actions work since they shape attention. Discouraging is another pattern as they try to convince the user not to do something. Sometimes these are so-called dark UX patterns as they play against the user.

Alex's talk helped me to understand that design is also about motivating people. Indirection can be the way as for some things, like getting fit, there aren't any shortcuts. Instead, you should help the users to develop habits and encourage them as they reach towards their goals.

### Designing for impact - Vladimir Koncar

![Vladimir Koncar](assets/img/webcampzg2018/vladimir-koncar.jpg)

Vladimir discussed how he grew his web business over the years and there was a lot to digest. One of the key points was that even the best design wouldn't help you if there's no business case. Sometimes design can turn business into something great as they did with a language learning platform. By addressing the problems in design, they pushed the existing platform into new heights.

### Delivering Fast and Beautiful Images and Video - Doug Sillars

![Doug Sillars](assets/img/webcampzg2018/doug.jpg)

Doug's talk focused on how to get more performance out of images and videos on the web. It's a domain where there are a lot of low hanging fruits ready to be picked since people tend to miss these optimizations. At the simplest level, you should compress your assets well. You should also consider asset dimensions and load them only if needed.

### Fluid typography - Sebastijan Dumančić

![Sebastijan Dumančić](assets/img/webcampzg2018/sebastijan.jpg)

Sebastijan's talk showed how to achieve fluid typography without ugly breakpoints. It's one of those techniques I'll try out in my work as then I'll have more control over what a site looks like in different resolutions.

## Conclusion

![Resting at WebCamp Zagreb](assets/img/webcampzg2018/rest.jpg)

WebCamp Zagreb was a new acquaintance to me, and if there's time, I'll try to go back next year. I liked the variety of topics present, and the venue was great as well. The conference is quite inexpensive compared to others with a similar caliber, and I have no doubt they'll be sold out next time too. In short, WebCamp Zagreb is a quality conference, and the city is excellent also.

T> [Find my photos of the event at Flickr.](https://www.flickr.com/photos/bebraw/sets/72157699028672052)
