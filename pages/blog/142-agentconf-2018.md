---
title: 'Experiences on AgentConf 2018'
date: 2018-02-06
headerImage: 'assets/img/agentconf-2018/lech-02.jpg'
keywords: ['conference', 'javascript']
---

I was invited to [AgentConf 2018](https://www.agent.sh/) on its second iteration about a month ago as one of the organizers saw [a presentation of mine about npm packaging](https://presentations.survivejs.com/the-whys-hows-and-whats-of-npm-packaging/). I gained free entry to the conference against a lightning talk but more on that later.

The concept is simple. After two days of single track talks in Dornbirn, there are two days of skiing (alpine, not cross-country) in Lech. Skiing is optional, but at least for me, it was the highlight even if the talks were good quality. There were around 180 people in the main conference, and roughly 50 remained for skiing.

## The Arrival Day

![Dornbirn at night](assets/img/agentconf-2018/dornbirn-night.jpg)

As a large part of the hotel capacity of Dornbirn was taken, I decided to stay at a local Airbnb with a friend that was going to the conference as well. We shared the costs and felt it was good value.

The train trip from Vienna took six and half hours, but given the quality of train service in Austria, the travel didn't feel cumbersome. The train network worked well, and the price level of the restaurant was reasonable at least compared to what I'm used to personally. The quality was excellent as well.

After we arrived at Dornbirn, we dropped our bits to Airbnb and headed to the center. From there we went to [Panoramarestaurant Karren](https://www.karren.at/panoramarestaurant/) with a cable car for the speakers' dinner after a short trip by car.

It was a great way to start the conference, and I met several people that I knew online already. The food was amazing, and the views were great. Especially the mushroom soup (steinpilzsuppe) was a favorite of mine.

There was some complication on the way back, and after the cable car came back down, we ended up walking back to our Airbnb. It wasn't a long distance, and it didn't matter that much after a satisfying dinner.

## The First Presentation Day

![Breakfast at Spielboden kino](assets/img/agentconf-2018/spielboden-kino-breakfast.jpg)

The first day started with an hour-long breakfast and registration at 8:00. That was early enough for me at least! The breakfast was disappointing, though, as there was only single kind of bread and something to drink with it. Fortunately, this was fixed on the second day.

### Max Stoiber on Open Source

![Max Stoiber on open source](assets/img/agentconf-2018/max-stoiber.jpg)

Max's presentation covered his successful career with open source so far. It was interesting for me to contrast it with [the one by Evan You on ScriptConf](/blog/scriptconf-2018/#evan-you-on-open-source) as the take was somewhat different. Whereas Evan's presentation felt more grounded to the rough reality, Max's was more on the lighter, optimistic side.

The viewpoints complement each other. I think the key understanding is that open source is not an end itself but more of a means. The whole situation changed in two decades as first the industry resisted the idea and then ended up adopting it as a mainstream idea.

For me, there's not much left to sell in the idea, and I'm more interested in finding sustainable models as I feel that's where we still have work left to do.

### Guillermo Rauch and Leo Lamprecht on Folding Space and Time

![Guillermo and Leo on folding space and time](assets/img/agentconf-2018/guillermo-and-leo.jpg)

Guillermo and Leo discussed how their company Zeit approaches scalability. Once you understand what takes time in your requests, you can start to think about where and how to perform the work.

[pkg](https://github.com/zeit/pkg) was one of the highlights of the presentation for me. As it happens, precompiling your code with Node.js can speed it up considerably. One benefit of doing this is that then you can run your application without having to install Node.js although you still have to compile somewhere.

### Peggy Rayzis on Apollo

![Peggy on Apollo](assets/img/agentconf-2018/peggy.jpg)

After a coffee break, Peggy gave a talk on Apollo. I've seen Peggy present twice before. Even though there tend to be similar elements in her Apollo talks, you also learn new things as their GraphQL client keeps evolving.

It seems that at least in some cases you might be able to eschew state management solutions like Redux entirely by using something like [apollo-link-state](https://www.npmjs.com/package/apollo-link-state) instead. It would not surprise me if this trend continued although you lose some control in the process.

### Kaylie Alexa Kwon on Yarn Workflow

![Kaylie on Yarn](assets/img/agentconf-2018/kaylie.jpg)

Kaylie discussed [Yarn](https://yarnpkg.com/) package manager and how they use it in their company. It was a good talk given it showed how she got involved with the project and also about the impact she has made on it so far as an outside contributor.

The important point of the talk for me is that you should find tools that fit your process. And if there's something missing, you should look into improving the tool. Yarn seems to be open to improvements as a project. The development has motivated npm to become better as well, so everybody has won.

After the talk, there was a lunch break although I don't remember what we had for lunch, but I am quite sure it had beans in it, but it wasn't a memorable one.

### Carly Litchfield on Testing

![Carly on testing](assets/img/agentconf-2018/carly.jpg)

Although I missed the majority of Carly's talk, I did gain a few insights from it. I learned particularly of [Percy](https://percy.io/), a tool for visual regression testing. I was aware of the technique, but I didn't know there's such a good solution available yet.

Carly has made her [demo application](https://github.com/cjlitch/screenshot-test-app) and [presentation slides](https://github.com/cjlitch/screenshot-test-app/blob/master/Make%20backend%20devs%20jealous%20of%20your%20test%20suite.pdf) available.

### Andrey Okonetchnikov on Linting

![Andrey on linting](assets/img/agentconf-2018/andrey.jpg)

Andrey discussed his story with [lint-staged](https://www.npmjs.com/package/lint-staged) so far. The plan was to get a particular feature done by the presentation, but no matter how hard we tried, there was always some edge case we couldn't manage to resolve. Alas, development has to continue.

*lint-staged* is interesting because it allows you to run commands on the files that are **only** in the staging mode of Git. Doing this can save a considerable amount of computation and make development flow smoother.

The beautiful thing is that although the tool has been written using JavaScript, you can run the tool against any other language since it operates on a command level.

Since I know the tool already and helped Andrey with the slides, there wasn't anything new in the presentation for me. But I'm sure people that don't know it yet, gained a lot from the talk and it was pleasant to follow.

### Javi Velasco on Agnostic Component Design for React

![Javi on React components](assets/img/agentconf-2018/javi.jpg)

Javi discussed his journey with [React Toolbox](http://react-toolbox.io/). It is an implementation of Google Material Design for React, and he is currently working on the next major version. I know from experience API design is hard to get right, so it was a fitting talk. I had seen it before in ReactiveConf, though, so there weren't many new insights for me.

When it comes to APIs, the key point for me is figuring out the right coupling and responsibilities for each part of the API. An API should be solid on a conceptual level so that it's easy to explain.

### Lightning Talks

![Benedikt on strange features of JavaScript](assets/img/agentconf-2018/lightning.jpg)

The lightning talks were the part where I got my ten minutes of fame or so. I was supposed to go first, but due to some misunderstanding, a local team went on the stage instead. I didn't follow their twenty-minute presentation too closely, but I did learn that if you wrap a web application in a desktop shell and it looks roughly the same, the enterprise clients won't care.

[My presentation](https://drive.google.com/open?id=1dYwzzByKugHIrfA48cdhV0N-b2S2Ms_Ojd8I4ux_QRg) was about static sites. I built my first one over twenty years ago and decided to revisit that era while discussing why static sites and static site generators are so relevant these days. See the resulting site at [juhoshomepage.com](https://juhoshomepage.com/). Creating an expanded version of this talk would be fun.

After me, Patrick Stapfer discussed ReasonML and how he uses CSS Modules with it. I was still too excited about my time on the stage, so I don't remember much else.

Finally, Benedikt Meurer discussed strange features of JavaScript. The core point was to avoid using `with` anywhere ever as it's a horrible feature. Incidentally, it's disabled in the strict mode. The problem is that you cannot remove features from the language as that would break the internet. Therefore it can only gain features.

### Dinner and Afterparty

The dinner and afterparty were organized at the venue. The venue itself was an old cinema and fit the event quite well although the atrium was a little narrow and forced people to two floors. Apart from that, it seemed to work nicely, and usually, there was enough space.

I don't have much to say for the dinner, but I'm sure it was something in an Italian style. The afterparty felt weak, so I decided to join other speakers at the center of the city in a cozy little restaurant. I'm not a great fan of afterparties, so not much was lost.

## The Second Presentation Day

![Spielboden kino](assets/img/agentconf-2018/spielboden.jpg)

The second day of presentations started with breakfast as well. This time around there was more variety to choose from although this time around I was better prepared by bringing something to eat myself.

### Sara Vieira on Depression

![Sara on depression](assets/img/agentconf-2018/sara.jpg)

The first presentation of the day was about depression by the famous Sara Vieira. I know her personally, so it was interesting for me to hear how she ended up where she is right now and the effort it took.

It was an interesting choice for a keynote although the topic itself was highly important. People tend not to discuss mental health in public, so it was a good opening.

Given it's a massive topic and demands discussion, I would have left it at the end of the first presentation day to give people space. I feel it took some attention away from the following one although maybe that's just me.

### Nacho Martin on Integrating Redux with a Server

![Nacho on integrating Redux with a server](assets/img/agentconf-2018/nacho.jpg)

Nacho Martin, an internet acquaintance of mine, discussed how they are using Redux and integrating it with their Elixir server. The key insight for me was that if you consider what your real problem is, then it's easier to solve it. In their case, they had a problem with duplicating logic over both server and client. If I understood right, the way to solve this was to simplify the state management and push a large part of this to the server.

### Benedikt Meurer on TurboFan

![Benedikt on TurboFan](assets/img/agentconf-2018/benedikt.jpg)

After a coffee break, Benedikt discussed V8's new engine, TurboFan. The talk made me appreciate all the work Google puts into it. JavaScript isn't a straightforward language to optimize yet they keep finding ways to achieve that, and there's more in store.

One of the learnings for me was that it's better to write close to standard instead of trying to optimize code yourself. The interpreter can optimize the execution likely better than you can.

### Michel Weststrate on Reactivity

![Michel on reactivity](assets/img/agentconf-2018/michel.jpg)

Michel gave a skiing themed variant on his MobX talk. It was an excellent introduction to the topic, and I'm sure it inspired people to try it. A solid talk.

This time around, the lunch was a burger. Both meat and vegetarian options were provided. Also, there was dessert for speakers at least. The lunch was much better than on the first day.

### Emil Sjölander on Yoga

![Emil on Yoga](assets/img/agentconf-2018/emil.jpg)

Emil discussed [Yoga](https://facebook.github.io/yoga/), a cross-platform layout engine. I didn't get much out of the talk, but that might have been due to the excellent lunch, not the presentation.

### Kristijan Ristovski on State Management

![Kristijan on state management](assets/img/agentconf-2018/kristijan.jpg)

Kristijan, also known as kitze by the community, discussed the concept of rock stars, trends, and following them. The points he made were fair. Instead of going with the popular option, it makes sense to consider your options and constraints, and only then make a decision. Going against the mainstream is an option too. Most importantly you should focus on providing value. Wrong thing done right is still the wrong thing.

### Sia Karamalegos on React Performance

![Sia on React performance](assets/img/agentconf-2018/sia.jpg)

Sia discussed React performance and provided multiple viewpoints on the topic. It was a good overview and you can [check out the slides online](https://speakerdeck.com/siakaramalegos/lightning-fast-react-apps) for the primary ideas. The topic is ideal for a small workshop.

### Asim Hussain on Bots

![Asim on bots](assets/img/agentconf-2018/asim.jpg)

Asim gave the last presentation of the conference about bots. The point was simple. A certain famous American president writes tweets where [sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) can be applied. Given he is an influential figure, the argument is that this affects economics. If you created a bot that uses the technique and then trades, you would be able to make money.

Asim did simulated trades based on this. Although the bot wasn't a great success, it still proved the point. Asim's talk helped to show how emerging techniques will change computing in the coming years and it was an elegant way to end the spoken part of the conference.

After Asim's talk, we headed to Lech for skiing.

## The First Skiing Day

![Lech in the morning](assets/img/agentconf-2018/lech-01.jpg)

Given I hadn't been skiing in twenty years (just cross-country), I decided to play it safe and go with the beginner group. It didn't take long for my skiing instincts to kick in, though, and it began to feel comfortable by the end of the day.

## The Second Skiing Day

![Before the epic ride](assets/img/agentconf-2018/lech-02.jpg)

I decided to tackle the most prominent hill near the starting point in the second morning. The conditions weren't as sunny as during the first day, but they were still quite good. The ride was epic, and after that, I headed back to a smaller one to chill out before heading for lunch with other attendees.

Lech proved to be surprisingly expensive (2-3x Vienna), so therefore it's not the best place for a cost-conscious person. It was still nice to visit and experience.

## The Good, The Bad, The Ugly

![Lech in sunset](assets/img/agentconf-2018/lech-03.jpg)

Overall, AgentConf was great, and I enjoyed it a lot. Skiing was the highlight for me although I'll prepare better next year so I can spend more time on the more challenging slopes. I was physically fit for it, but it takes a certain amount of adaptation to get most out of skiing.

The presentations had high quality although I might have used a different order. I wish the second day had lightning talks as well and I would have loved to see panels in the program. One of the neat things AgentConf did was that they got Christoph Nakazawa to host them. If the audience was feeling shy, he had a few questions in store. I think it improved the quality of the conference a lot.

When you visit a lot of conferences, it's easier to see what's missing. Compared to ScriptConf, I noticed I was missing an MC although Christoph compensated for this well. Still, having strong audio in place seems to help with the ambiance a lot which was interesting for me to notice.

Food was excellent especially for the speakers' dinner and the second day. For some reason, the first day felt weaker when it came to this although I didn't have to go hungry.

## Conclusion

![The organizers of AgentConf](assets/img/agentconf-2018/organizers.jpg)

I might go to [AgentConf](https://www.agent.sh/) again next year, and it was one of the better technical conferences I've ever been. There are always little details you can do better, but the primary offering is solid and good value.

I spent more money on the trip than I would have liked as I didn't expect Lech to be so expensive. For me, even a less fancy place to ski would have been more than enough especially given I'm far from the level in which I can enjoy the most challenging slopes.

If you want to go to a good conference and enjoy skiing, AgentConf is a great choice. I like the idea of combining high quality technical content with leisure and I wish more conferences followed this route.

T> You can find more of [my AgentConf 2018 photos at Flickr](https://www.flickr.com/photos/bebraw/sets/72157691195161201/). See also [the official photos](https://www.flickr.com/photos/142568661@N06/).
