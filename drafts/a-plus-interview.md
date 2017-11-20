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

A+ forms is a React forms library that helps you not cry yourself to sleep every time your boss asks you to build a twelve-field form. It solves tedious problems like state management, validation, and data transformation in a predictable manner with minimal configuration.

## How does *a-plus-forms* work?

I think this question can be answered from multiple perspectives: how it works internally, what it exposes externally, and how it works in the context of an engineering team.

It basically revolves around the concept of an input field. I started with the familiar idea of a HTML input tag with its `name`, `value`, and `onchange` attributes and then applied these to all fields. Fields may also have sub-fields. In some cases a form is one large field.

The big idea here is to work with the grain of engineers' understanding of forms. Engineers think of forms as a bucket of input fields that spits out a blob of data which we then retrieve and send to the server. This is the type of developer experience A+ forms provides. For example:

```javascript
import { Form, TextInput, PasswordInput } from 'a-plus-forms';

cosnt sendToServer = ({ username, password }) => { /* ... */ };

<Form onSubmit={sendToServer}>
  <TextInput name="username" label="Username" />
  <PasswordInput name="password" label="Password" />
  <button type="submit">Sign In</button>
</Form>
```

This is just a simple example that doesn't do justice to the level of complexity A+ forms can handle. But it demonstrates the principle behind the library:

> Here are my fields. Please give me the data entered into them, because I don't care about anything else at the moment.

This mentality is shared by engineers and teams. It's a universal truth of forms if you will. All you really want is data.

## How does *a-plus-forms* differ from other solutions?

Ok, let's get this straight. I'm not going to say anything negative about other solutions - I'm not here to bash other people's work. Besides, given enough determination, most problems can be solved with any tool available. Instead, I'll explain what's important to me.

As technology matures, we humans try to use it to solve increasingly complex problems. This, in turn, requires increasingly complex solutions. Over time this complexity starts accumulating, until we forget what we were doing in the first place.

Most solutions on the market address the complexity of the task with increased complexity. Over time this inevitably becomes taxing. A+ forms differ here by attempting to keeping the task of creating and maintaining complex forms simple.

## Why did you develop *a-plus-forms*?

To become rich and famous and achieve world domination, obviously. But seriously, I think I have little patience for BS in my work. I don't know about you, but I'm easily distracted and discouraged when things are not going smoothly. There are so many awesome things waiting to be built in the world, and spending time dealing with mundane problems that have already been solved is unproductive.

That's the same principle why you use React. You totally could devote yourself to vanilla JavaScript and DOM. But after ten times of writing the same repetitive boilerplate code and dealing with browser inconsistencies, you probably just want to focus on building the actual app, not figuring out why `change` events are not triggered on a range input in IE 10.

I built A+ forms for the same reason, so my engineers and I don't have to solve this problem over and over again, and can focus on building what we want to build.

## What next?

I'm glad you've asked. A+ forms itself represents just the data handling core. All the components are just standard HTML-looking abstractions, which depending on a context, can be implemented in all sorts of things. Those _"all sorts of things"_ is the next step in my view.

Here are the next extensions that I'm planning to build:

**1) Bootstrap-tailored fields**

A+ forms has a bunch of standard fields out of the box, but they're not tied to any particular UI component implementation. I want create an extension that will convert those fields into standard Bootstrap fields as a means to simplify adoption further.

**2) React Native fields**

This one is my favorite. Form management in native mobile apps is so alien to us web developers. But it doesn't have to be like this. If we re-implement those fields in React Native components, then engineers could have the same developer experience between web and native apps. Heck, they could even finally share their forms code between them.

**3) HTML5 props validator**

At my day job we're using JSON Schema as a way to validate forms, but it's a bit overkill for simpler cases. I want to build an extension that will read standard validation props like `required` and `pattern` on the input fields and set validation rules accordingly.

The goal is to make A+ forms into a sort of "Barbie doll", where the community can build extensions and extra accessories for it and share their solutions with each other.

## What does the future look like for *a-plus-forms* and web development in general? Can you see any particular trends?

If you ask my opinion, I think we should stop calling it "web development" and instead just use the term "development". From first hand experience  since almost the beginning of widespread adoption of the web, I can say one thing: engineers tend to be overprotective of their reputation, to the point of being real jerks.

When I started my career, the word "web developer" was sort of an oxymoron. The older generation didn't even want to call us "developers", they called us "webmasters" as a way to distance themselves from us. They saw themselves as "real engineers", where we were just playing with toys.

If you joined the bandwagon a bit later, you might have seen web developers belittled as not being "real programmers". Humans do nasty stuff to each other now and then.

But, by now techniques developed for the "web" have become pretty much the standard practice in most areas of software. For example, the process for building UIs we've developed for the "web" beats the traditional "native" UI practices. The same goes for building APIs. Node.js based microservices, Serverless, load balancing, high efficiency networking, and so on all grew out of the "web".

The child has grown into an adult and feels strong. Now that adult just needs to learn how to act like an adult. That will be a trend in the near future.

## What advice would you give to programmers getting into web development?

Tread without fear, my friends. The "web" is here to stay. And for the love of god, don't listen to anyone who tells you it's not "real software engineering".

Also, a bit of a downer: 99% of your time won't be about "writing clever algorithms". The sooner you accept that the better off you will be. It's just a fairy tale that has nothing to do with reality. It's called "development", not "slinging out code" for a reason. It's really about building things, not showing how smart you are. Because, guess what, everyone else is just as smart :)

Which brings us to the third and last piece of advice. Learn how business works. I know, business, ewww! But it will help you to make better decisions and understand how other people see your role in a company. This will help you to keep BS to a minimum and get back to doing what you love - creating things.

## Who should I interview next?

Ooh, I love this! Okay, so, anyone really from thinkmill, envato or buildkite. They are all strong technically and most of them are very good people.

## Any last remarks?

Don't forget to eat well, get enough sunlight, and, if you're an introvert, don't forget to give yourself plenty of downtime cuddling with a book to recharge your batteries. The world is an exhausting place, but it has pancakes in it.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Nikolay!
