---
title: "a-plus-forms - A+ forms. Would use again - Interview with Nikolay Nemshilov"
date: 2017-11-20
headerImage: "assets/img/crystal.jpg"
keywords: ["forms", "interview", "react"]
editors: ["bebraw", "karlhorky"]
---

If you think about it, a lot of web development has something to do with forms. Every time you capture information, you most likely require a form. It's one of the basic skills for a front-end developer.

There are plenty of options for React and I've [reviewed the directions briefly on my slides](https://presentations.survivejs.com/forms-in-react/). To get a better idea of one of them, I'm interviewing [Nikolay Nemshilov](https://twitter.com/nemshilov) about A+ forms.

T> I met Nikolay over the internet roughly a decade ago while I was writing my first bigger web application. I used his RightJS library there. It was sort of an alternative for jQuery at the time. It has been fun to see both of our careers evolve since those days.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e950e05c2a6b18cf53ac12d8d2c73e7c?s=200" alt="Nikolay Nemshilov" class="author" width="100" height="100" />
</span>

Well, over the years of trying to answer this question, I narrowed it down to the following: Hi, I'm Nikolay, I'm here to help.

</p>

That's usually enough to start. But, I suppose you want something more tangible in this case. Well, I'm a software engineer, I think. And I've been doing this long enough to start feeling a bit awkward about it. I guess my "career" as a software engineer began when IE4 was the tip of the spear and I still had my hands on the keyboard every single day.

Recently, however, I've been more focused on building teams of software engineers at my day job. I see this as just another way to create software. I suppose it's a natural outcome of attempts to realize more extensive and more significant projects.

Ok, I admit, this was a bit vague. Don't get me wrong; I am not trying to dodge the question. But I feel like a personal story of a Siberian born, working-class nerd who lives in Australia is going to be a bit confusing and besides the point.

## How would you describe _a-plus-forms_ to someone who has never heard of it?

A+ forms is a React forms library that helps you not cry yourself to sleep every time your boss asks you to build a twelve-field form. It solves tedious problems like state management, validation, and data transformation in a predictable manner with minimal configuration.

## How do _a-plus-forms_ work?

I think this question can be answered from multiple perspectives: how it works internally, what it exposes externally, and how it works in the context of an engineering team.

It primarily revolves around the concept of an input field. I started with the familiar idea of an HTML input tag with its `name`, `value`, and `onchange` attributes and then applied these to all fields. Fields may also have sub-fields. In some cases, a form is one large field.

The big idea here is to work with the grain of engineers' understanding of forms. Engineers think of forms as a bucket of input fields that spits out a blob of data which we then retrieve and send to the server. A+ forms provide this the type of developer experience. For example:

```javascript
import { Form, TextInput, PasswordInput } from 'a-plus-forms';

cosnt sendToServer = ({ username, password }) => { /* ... */ };

<Form onSubmit={sendToServer}>
  <TextInput name="username" label="Username" />
  <PasswordInput name="password" label="Password" />
  <button type="submit">Sign In</button>
</Form>
```

The above is just a simple example that doesn't do justice to the level of complexity A+ forms can handle. But it demonstrates the principle behind the library:

> Here are my fields. Please give me the data entered into them, because I don't care about anything else at the moment.

This mentality is shared by engineers and teams. It's a universal truth of forms if you will. All you want is data.

## How do _a-plus-forms_ differ from other solutions?

Ok, let's get this straight. I'm not going to say anything negative about other solutions - I'm not here to bash other people's work. Besides, given enough determination, most problems can be solved with any tool available. Instead, I'll explain what's important to me.

As the technology matures, we humans try to use it to solve increasingly complex problems. Which in turn requires increasingly sophisticated solutions. Over time this complexity starts accumulating until we forget what we were doing in the first place.

Most solutions on the market address the complexity of the task with increased complexity. Over time this inevitably becomes taxing. A+ forms differ here by attempting to keeping the task of creating and maintaining complex forms simple.

## Why did you develop _a-plus-forms_?

To become rich and famous and achieve world domination, naturally. But seriously, I think I have little patience for wasting time in my work. I don't know about you, but I'm easily distracted and discouraged when things are not going smoothly. There are so many awesome things waiting to be built in the world, and spending time dealing with mundane problems that have already been solved is unproductive.

That's the same principle why you use React. You could devote yourself to vanilla JavaScript and DOM. But after ten times of writing the same repetitive boilerplate code and dealing with browser inconsistencies, you probably just want to focus on building the actual app, not figuring out why `change` events are not triggered on a range input in IE 10.

I built A+ forms for the same reason, so my engineers and I don't have to solve this problem over and over again and can focus on making what we want to develop.

## What next?

I'm glad you've asked. A+ forms itself represents just the data handling core. All the components are just standard HTML-looking abstractions, which depending on a context, can be implemented in all sorts of things. Those _"all sorts of things"_ is the next step in my view.

Here are the next extensions that I'm planning to build:

**1) Bootstrap-tailored fields**

~~A+ forms have a bunch of standard fields out of the box, but they're not tied to any particular UI component implementation. I want to create an extension that will convert those fields into standard Bootstrap fields as a means to simplify adoption further.~~

This has been done. See [a-plus-forms-bootstrap](https://www.npmjs.com/package/a-plus-forms-bootstrap).

**2) React Native fields**

This one is my favorite. Form management in native mobile apps is alien to us web developers. But it doesn't have to be like this. If we re-implement those fields in React Native components, then engineers could have the same developer experience between web and native apps. Heck, they could even finally share their forms code between them.

**3) HTML5 props validator**

At my day job, we're using JSON Schema as a way to validate forms, but it's a bit overkill for more straightforward cases. I want to build an extension that will read standard validation props like `required` and `pattern` on the input fields and set validation rules accordingly.

The goal is to make A+ forms into a sort of "Barbie doll", where the community can build extensions and extra accessories for it and share their solutions with each other.

## What does the future look like for _a-plus-forms_ and web development in general? Can you see any particular trends?

If you ask my opinion, I think we should stop calling it "web development" and instead just use the term "development". From first-hand experience since almost the beginning of widespread adoption of the web, I can say one thing: engineers tend to be overprotective of their reputation, to the point of being real jerks.

When I started my career, the word "web developer" was an oxymoron. The older generation didn't even want to call us "developers", they called us "webmasters" as a way to distance themselves from us. They saw themselves as "real engineers", where we were just playing with toys.

If you joined the bandwagon a bit later, you might have seen web developers belittled as not being "real programmers". Humans do nasty stuff to each other now and then.

But, by now techniques developed for the "web" have become pretty much the standard practice in most areas of software. For example, the process for building UIs we've developed for the "web" beats the traditional "native" UI practices. The same goes for building APIs. Node.js based microservices, Serverless, load balancing, high-efficiency networking, and so on all grew out of the "web".

The child has grown into an adult and feels strong. Now that adult just needs to learn how to act like an adult. That will be a trend in the near future.

## What advice would you give to programmers getting into web development?

Tread without fear, my friends. The "web" is here to stay. Don't listen to anyone who tells you it's not "real software engineering".

Also, a bit of a downer: 99% of your time won't be about "writing clever algorithms". The sooner you accept that the better off you will be. It's just a fairy tale that has nothing to do with reality. It's called "development", not "slinging out code" for a reason. It's really about building things, not showing how smart you are. Because guess what, everyone else is just as bright :)

This observation brings us to the third and last piece of advice. Learn how business works. I know, business, ewww! But it will help you to make better decisions and understand how other people see your role in a company. Most importantly, this will help you to keep hassle to a minimum and get back to doing what you love - creating things.

## Who should I interview next?

Ooh, I love this! Okay, so, anyone really from Thinkmill, Envato or Buildkite. They are all strong technically, and most of them are outstanding people.

## Any last remarks?

Don't forget to eat well, get enough sunlight, and, if you're an introvert, don't forget to give yourself plenty of downtime cuddling with a book to recharge your batteries. The world is an exhausting place, but it has pancakes in it.

## Conclusion

Thanks for the interview Nikolay! A+ forms looks like a solid form handling solution for React.

You can learn more about [A+ forms at GitHub](https://github.com/MadRabbit/a-plus-forms).
