---
title: 'Progressive Web Apps - The Why and How - Interview with Maciej Caputa'
date: 2018-06-25
headerImage: 'assets/img/capsule.jpg'
keywords: ['interview']
---

Even though the web started from content, it has transformed into an application platform. Approaches like Progressive Web Apps are a clear sign of this.

[Maciej Caputa](https://twitter.com/MaciekCaputa) will explain the topic in more detail in this interview.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/26152f965d5974e7a30deaa5ab19641f?s=200&d=wavatar" alt="Maciej Caputa" class="author" width="100" height="100" />
</span>

I’m a frontend developer at Netguru – a cool software consultancy that provides design and development services for companies from all over the world. I have four years of experience in web development in various technologies.

</p>

In Netguru, we change our main project every 6-9 months. This way of working gives me ample opportunities to gain experience quickly, code in different environments or tech stacks, and work with different users and clients’ needs.

I focus mostly on JS and React (and all their quirks and quarks), but I always keep in mind the importance of providing excellent user experience with modern and intuitive design. I think that the critical features of making the user happy are performance, interactions, and smooth animations.

I value inclusiveness, openness, and equality – and that’s probably the main reason, why the philosophy behind [Progressive Web Apps](https://www.netguru.co/services/progressive-web-apps) is so important to me.

## How would you describe _Progressive Web Apps_ to someone who has never heard of them?

A PWA is standard web application build with a focus on performance, responsiveness and native experience. Thanks to the manifest file and service workers, you can add the app to your home screen with one click, and then it behaves like a regular mobile app.

An app can offer a full-screen, native experience even when the user is offline. PWAs are capable of downloading data in the background, caching communication with the server, and support push notifications. At the same time, PWAs are lightweight, always up-to-date, and, in many cases, more performant than regular mobile and web applications.

In other words, a PWA looks like a native app, but under the hood, it is a regular website. Thanks to that you can quickly provide a native experience on mobile, which will undoubtedly increase user engagement.

## How do _Progressive Web Apps_ work?

From the technical point of view, a PWA is a web application built with HTML and JavaScript, to which we add progressive features (mostly with manifest and service worker files). The implementation process of a PWA is no different from that of a regular web app.

A PWA lives on top of fullscreen browser view (without the browser’s address bar and navigation), and can provide the same or even better experience than a native app. It can perform background tasks, work offline, and support push notifications.

PWA strongly relies on caching – it is capable of caching web assets and requests on your device. Moreover, it can save user-generated data when the user is offline and push it to a server when the user becomes online again.

## How do _Progressive Web Apps_ differ from other solutions?

A Progressive Web App does not require downloading big packages of data to install; you don’t need to publish in the App Store or prompt the user for updates. At the same time, PWAs provide a native experience.

A PWA can share the codebase with your regular website, but it will engage users more than a traditional mobile/responsive website. It seems that users prefer to use applications instead of mobile sites on smartphones, but at the same time, they are not eager to install apps from the stores. PWAs solve that problem.

#### What other solutions are there

If we consider a PWA as a replacement for a mobile app, then building a native app would be the other solution. We can do it in a standard native way (separate apps for iOS and Android) or use some tools that allow us to share the same codebase, but still get a native app (like React Native, Xamarin). The other option would be to create a hybrid app – an app build in HTML and JavaScript, working on top of a browser engine, such as PhoneGap, ionic, etc.

All the above solutions have different pros and cons, but what they have in common is that they need to be distributed via the App Store/Google Play Store, often requiring the user to download a large installation package.

Building apps this way, in most cases, means that you can’t share the codebase between mobile and web, and you will have to build two or even three separate apps (and also maintain them separately). It also requires paid developer accounts and using platform-related tools such as Xcode or Android Studio.

The other solution would be to use regular responsive/mobile websites, but in most cases, users prefer to use apps on mobile instead of sites in a browser.

Another buzzword promoted some time ago by Google are AMPs (Accelerated Mobile Pages). Their goal is similar to PWAs: to build performant and fast loading websites that provide a great experience on mobile. However, the main difference is that AMPs are focused on web pages that contain content and sell products, not on applications that offer features. On top of that, to build an AMP, you need to use a particular tool, which has some limitations.

## What does the future look like for _Progressive Web Apps_ and web development in general? Can you see any particular trends?

[Looking at many success stories of PWA from big companies like Financial Times, Twitter, Tinder, Aliexpress and more](https://www.netguru.co/blog/10-popular-companies-that-do-progressive-web-apps), I think that the popularity of Progressive Web Apps will be increasing dramatically. PWAs can significantly improve user experience and engagement, especially on mobile devices with slow or even no connection.

The support for PWA features is still growing. Lately, Apple introduced the support for service workers and manifest in their new iOS release. That’s a clear indication that something serious is going on. That said, the support is not perfect yet and still requires some tweaks to provide a fully native experience, for example, the splash screen is not generated from the manifest, as you can see in my [article](https://www.netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native).

Some say that 2018 is the year of PWAs. I think that many people still aren’t aware of the possibilities and benefits that come with PWA. It’s our job as developers to choose the best tech stack and consult on the tools used for the product.

I imagine that in the future we will only build one, progressive, app, and it will work natively regardless of a device it is run on.

## What advice would you give to programmers getting into web development?

Regardless of the seniority level, I would advise programmers to always keep in mind two simple rules:

1. Always think about users’ needs and expectations. Remember that the solutions and tools you use as a frontend developer have a great impact on the intuitiveness and usability of the product you’re building.

2. Always use the best tool for the job, regardless of what is the hype at the moment.

As soon as you start behaving like a sensible programmer – responsible not only for the code you write but also for the features you deliver – you will be able to add real value to the web world.

## Who should I interview next?

I am a fan of React, but I’m watching closely as the new star begins to shine brightly – and I mean Vue. I would suggest interviewing Michał Sajnóg (who has just joined Vue Core Team) about it! Vue and PWA are a match made in heaven. 💪 🌈 🦄

## Any last remarks?

PWAs aren’t only a replacement of mobile apps. They also stand for the openness and inclusiveness of the web because they work independently from the device, platform, and connection, providing the best possible user experience on every device.

A lot of people still need to do with a poor Internet connection or slow devices. I think that PWAs will be a huge factor that would make the web more available to them, as they are so light on resources.

## Conclusion

Thanks for the interview, Maciej! I think PWAs are a great compromise and a particularly good idea to adopt for web developers. Browsers and devices are starting to get there, and although you cannot always match a native application, PWAs are the perfect fit for specific purposes.
