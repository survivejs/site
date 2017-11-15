---
title: 'a-plus-forms - A+ forms. Would use again - Interview with Nikolay Nemshilov'
date: 2017-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.
https://pbs.twimg.com/profile_images/857346028952891392/lbqP7S4z_400x400.jpg

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e950e05c2a6b18cf53ac12d8d2c73e7c?s=200" alt="Nikolay Nemshilov" class="author" width="100" height="100" />
</span>
</p>

Well, over the years of trying to answer this question, I narrowed it down to the following:

> Hi, I'm Nikolay, I'm here to help

That's usually enough to start. But, I suppose you want something more tangible in this case. Well, I'm a software engineer, I think. And I've been doing this long enough to start feeling a bit awkward about it. I think my "career" as a software engineer started when IE4 was the tip of the spear and I still had my hands on the keyboard every single day.

Recently, however, I've been more focused on building teams of software engineers at my day job. I see this as just another way to create software. I suppose it's a natural outcome of attempts to realize larger and larger projects.

Ok, I admit, this was a big vague. Don't get me wrong, I am not trying to dodge the question. But I feel like a personal story of a Siberian born, working class nerd who lives in Australia is going to be a bit confusing and beside the point.

## How would you describe *a-plus-forms* to someone who has never heard of it?

*a-plus-forms* is a React forms library that helps you not cry yourself to sleep every time your boss asks you to build a twelve-field form. It solves tedious problems like state management, validation, and data transformation in a predictable manner with minimal configuration.

## How does *a-plus-forms* work?

I think this question can be answered from multiple angles: how it works internally, what it exposes externally, and how it works in the context of an engineering team.

It basically revolves around a concept of an input field. I started with the familiar idea of a HTML input tag. It's something that has `name`, `value`, and `onChange` hook. But then everything is treated as a field. For example, fields might have sub-fields. Or a form is one large field.

The big idea here is to work with the grain of an engineer's understanding of forms. We, engineers think of forms as a bucket of input fields that in the end spits out a blob of data. Which we then pick up and send to the server. And this is exactly the type of developer experience A+ forms provide:

```javascript
import { Form, TextInput, PasswordInput } from 'a-plus-forms';

cosnt sendToServer = ({ username, password }) => ...;

<Form onSubmit={sendToServer}>
  <TextInput name="username" label="Username" />
  <PasswordInput name="password" label="Password" />
  <button type="submit">Sign In</button>
</Form>
```

This, obviously, a simplistic example that doesn't do justice to the level of complexity the A+ forms handle. But it demonstrates the principle behind the though:

> Here are my fields, please give me the data, because I don't care about anything else at the moment.

And that mentality works really well with engineers and teams. It's a universal truth of forms if you will. All you really want is data.

## How does *a-plus-forms* differ from other solutions?

Ok, let's get this straight. I'm not going to say anything negative about other solutions, I'm not here to bash on other people's work. Besides, most problems could be eventually solved with any tool available; it's just the question of determination. Instead, let me explain what's important to me.

As technology matures, we humans are trying to use it to solve more and more complex problems. Which, in turn, requires more and more complex solutions. Over time, this complexity starts to piling up, until we forget what we were doing in the first place.

Most solutions on the market are providing this extra fire power complexity to combat the complexity of the tasks. Which is expected, but over time, inevitably becomes taxing. And here is where A+ forms differ. A+ forms is an attempt to add simplicity into the task of creating and maintaining complex forms.

## Why did you develop *a-plus-forms*?

To become rich and famous, and achieve the world domination, obviously. But, seriously though. I think I have little patience for BS in my work. I don't know about you, but I'm easily distracted and discouraged when things are not going smoothly. There are so many awesome things waiting to be built in the world, that spending time dealing with already solved mundane problems is just borderline treacherous.

That's the same principle why you use React. You totally could assert yourself to vanilla JavaScript and DOM. But after 10 times, you probably want this to be done, you just want to focus on building the actual app, not figuring out why `onChange` is not triggered on a range input in IE10.

I built A+ forms for the same reason, so my engineers and I didn't have to worry about this problem again, and could focus on building what we want to build.

## What next?

I'm glad you've asked. A+ forms itself represent just the data handling core. All the components are just standard HTML looking abstractions, which depending on a context can be implemented in all sorts of things. A those _"all sorts of things"_ is the next step in my view.

Here is several next extensions that I'm planning to build:

**1) Bootstrap tailored fields**

A+ forms has a bunch of standard fields out of the box, but they're not tied to any particular implementation. So, I want create an extension that will convert those fields into standard Bootstrap fields as a mean to make the adoption even simpler.

**2) React Native fields**

This one is my favorite. Form management in native mobile apps is so alien to us web developers. but this doesn't have to be so. If we re-implement those fields in react native components, then engineers could have a 100% the same forms experience between different platforms. Heck, they could even finally share their forms code between them.

**3) HTML5 props validator**

At my dayjob we're using JSON Schemas as a way to validate forms, but it's a bit of an overkill for simpler cases. So, I want to build an extension that will pick up the standard `required`, `pattern`, etc props from the input fields and validate them accordingly.

The goal, as you can see is to make A+ forms into sort of a Barbie doll, where the community could build extensions and extra accessories for it, and share their solutions between each other.

## What does the future look like for *a-plus-forms* and web development in general? Can you see any particular trends?

If you ask my opinion, i think we should stop calling it "web development" by now and just call it "development". Experiencing the history of the web first hand from almost the beginning of its adoption, I can tell one thing. Engineers tend to be overprotective; right to the point of being real jerks.

When I started my career, the word "web developer" was sort of an oxymoron. The older generation didn't even want to call us "developers", they called us "webmaster" as a way to distance themselves as "real engineers".

If you have joined the bandwagon a bit later, you might caught the times when JavaScript developers were not considered real "programmers" either. Humans do this stuff to each other now and then.

But, by now "web" became pretty much the standard practice in most areas of software. The process for building UIs we've developed in the "web" beats the traditional "native" UI practices. Same goes for building API side. Node.js based microservices, Serverless, load balancing, high efficiency networking, etc. It all grew out of the "web".

The kid had grown into an adult and feels its strength. I suppose I just needs to learn how to act like one. And that will be the trend in the near future.

## What advice would you give to programmers getting into web development?

Tread without fear my friends. "Web" is here to stay. And for the love of god, don't listen to anyone who says to you it's not "real software engineering".

Also, a bit of a downer, but the sooner you accept the idea that 99% of your time won't be about "writing clever algorithms" the better off you will be. It's just a fairy tale that has nothing to do with the reality. It's called "development", not "slinging out code" for a reason. It's really about building things, not showing how smart you are. Because, guess what, everyone else is just as smart :)

Which brings me to the third and last advice. Learn how business works. I know, ewww!... But, it will help you to make better decisions, and it will help you to understand how other people see your role in a company. This will help you to cut BS to the minimum and get back to doing what you love. Creating things.

## Who should I interview next?

Oooh, I love this! Okay, so, anyone really from thinkmill, envato or buildkite. They all strong technically and most of them are very good people.

## Any last remarks?

Right. So, don't forget to eat well, get enough sunlight, and, if you're an introvert, don't forget to give yourself plenty of downtime cuddling with a book to recharge your batteries. The world is one exhausting place, but it has pancakes in it.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Nikolay!
