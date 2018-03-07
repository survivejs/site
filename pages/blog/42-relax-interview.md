---
title: 'Relax - New generation CMS on top of React and Node.js - Interview with Bruno Mota'
date: 2016-04-11
headerImage: 'assets/img/relax.jpg'
keywords: ['interview', 'react']
---

Even though I've spent a lot of time with web development, I never really delved into the world of Content Management Systems (CMS). I'm of course aware of WordPress, Drupal, and such. I've managed to get away with either something entirely custom or a static site generator. Even this site has been developed using [one](https://antwarjs.github.io/).

Given how much effort developing a static site generator takes, I can only imagine how hard it is to develop an entire CMS. [Bruno Mota](https://twitter.com/bruno12mota) and friends have developed a system known as Relax on top of React and Node.js. He claims it is a new generation CMS. What does this mean? Let's find out.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/18af7addb03d91d4659db11dc8c6c325?s=200" alt="Bruno Mota" class='author' width='100' height='100' />
</span>

My name is Bruno Mota and I'm one of the creators of Relax CMS. I've been working on web projects for the past few years, specially with JavaScript. I started making Flash projects with ActionScript when I was in high school which started my developer vein. Eventually switched to JavaScript and gradually to more advanced stuff.
</p>

Soon enough I was selling plugins and themes online, mainly on the [Envato](https://envato.com/?ref=plusquare) marketplace. And now, in the last months, Relax, a full CMS built using latest techs in the JavaScript world.

## How would you describe Relax to someone who has never heard of it?

Relax is a CMS, in longer terms a content management system, with some additional powers. The idea behind relax is that anyone should be able to build a website without needing to make a single line of code.

The two most important features on Relax that differentiates it from other CMSs is the page builder and the content types builder.

The page builder lets you build any page with drag and drop, providing you instant feedback on how your page will look. It is component based, so you have a bunch of components from the most basic such as text and image, to more complex ones, such as music player or video. For each of these components you can alter a bunch of settings to change its looks and behavior.

<p>
<iframe src="//player.vimeo.com/video/162203892?autoplay=0&loop=1&portrait=0&title=0&byline=0&badge=0" width="100%" height="300px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

The content types builder let's you create data models to use in your site or just to save information. A good and standard example of a content type is a blog, each blog post might have a featured image, a title, a description, etc. With Relax you can create this in a simple and graphic way on the admin area.

![Asset types](assets/img/relax/relax_01.jpg)

But wait, isn't there already page builders and content types builders around? Yes there is, but Relax takes it up a big notch integrating the both. You can link data from your created content types in the page builder itself, and all with drag and drop! So you can create a blog posts list using the page builder only. You can also create singles for the blog posts by linking data in the page builder as well.

<p>
<iframe src="//player.vimeo.com/video/162203696?autoplay=0&loop=1&portrait=0&title=0&byline=0&badge=0" width="100%" height="300px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

## Why did you develop Relax?

Relax was product of my user experience perfectionist frustration with other CMSs such as WordPress. Don't get me wrong, WordPress is a really solid and a great CMS that has been in the top for a long time. And I used to work with it, making plugins and themes, which is where my frustration comes from.

It all started on a project to make a multipurpose WordPress theme to sell on [Themeforest](http://themeforest.net/?ref=plusquare). A multipurpose theme is basically providing a lot of control to the theme user to customize their site with almost endless possibilities. This proved to be a hard challenge. Almost endless work on creating options and plugins such as: a page builder, a menu builder, options to control colors, sizes, fonts, etc.

I definitely needed help, and that's when [José Magalhães](https://github.com/magalhas) and [Ivo Silva](https://github.com/ivomiguelas) started to work with me on it. Short after, we came to a conclusion. Not only it was a lot of work but we were also being limited by the CMS itself. By creating plugins and options for the theme we were adding dynamism but loosing big time in user experience. It was literally hundreds of options bloated into the already bloated WordPress interface.

We thought it was time to change that. The technology is available, so why not do something that prevents these issues and give total control to the user? That's where Relax, the idea, started to take its form.

## What kind of challenges have you experienced while developing it?

Whole sort of challenges! But there are two main reasons:

* **User experience** - It has been really hard to come up with solutions that don't overflow the user with options, but at the same time, provide all the options needed. We've made a huge effort in this area and one of it is currently undergoing. We're re-designing the whole admin area, and our focus has been in providing a drill down experience where the user is presented with the minimum data he needs for each action or area of action.
- **Fast environment** - In the last months the JavaScript world has been affected by an avalanche of new trends, libs and setups. This was great for Relax in the way that it could benefit from these new techs. But bad in the way that it slowed the project down quite a lot. Since Relax was created, we've switched from ES5 to ES6, from a REST system to GraphQL, grunt build to webpack, Backbone to Redux and React Router, and recently we've introduced Relate into the mix.

We're now at a stable path with the techs we're using. User experience is something that is never finished but something that is constantly worked on. We do have almost everything designed and planned for the beta release.

## What next?

Well, we should finish the dashboard design development the next 3-4 weeks. It will be a fresh face to Relax and a much better user experience overall. Then it's a matter of concluding some pendent issues towards the beta release. We've set up a macro view of what's missing at [the roadmap](https://github.com/relax/relax/blob/master/ROADMAP.md).

![Asset search](assets/img/relax/relax_02.jpg)

We have bigger plans later down the road for Relax. Relax CMS will always be free as an open source project. Although, we have plans to make a marketplace where developers and designers can sell themes and more complex components for Relax. It will be a review based marketplace to assure every item will be top notch.

## What does the future look like for React and front-end in general? Can you see any particular trends?

Front-end development changed dramatically in the last few years. I mean, not a long time back we were serving html files, introducing some JavaScript here and there. And now, the trend has shifted to full JavaScript applications. It has been really great to see and live through these changes.

React broke a lot of barriers as a "view layer". Composability enables us to focus on each piece of our application at a time. And this is a trend I see growing even more in the future. With recent build processes such as [Webpack](https://webpack.github.io/), not only components define what they show, but also how they look, the assets it uses and, in more recently movements, the data needs from the server with [GraphQL](http://graphql.org/).

[Relay](https://facebook.github.io/relay/) is an awesome solution provided by the facebook team that takes this step exactly of defining server data needs in the components. For Relax we've made [Relate](http://relax.github.io/relate/), a custom solution that meets its kind of demands, which we open sourced separately so other people can use it. There is still a lot of experimenting to do in this area, and I think there will be great advances in the following year.


## Who should I interview next?

[John-David Dalton](https://twitter.com/jdalton), the creator of [lodash](https://lodash.com/). Would love to know if there are some plans for some lodash immutable utils.

## Conclusion

Thanks a lot for the interview Bruno! It is definitely an exciting time to be a web developer. Projects like Relax are a good example of that.

If you want to take a better look at Relax, check out the [GitHub repository](https://github.com/relax/relax). There is also [Slack](http://slack-relax.herokuapp.com/) if you want to chat about the topic with the authors.
