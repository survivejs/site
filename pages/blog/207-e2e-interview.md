---
title: "End-to-end testing - Interview with Erik Fogg"
date: 2020-10-29
headerImage: "assets/img/screwdrivers.jpg"
keywords: ["interview", "testing"]
---

Testing is topic that comes up often in software development as it's an important part of verifying what we did works. That said, it's a complex topic given there are [so many ways to test](/maintenance/code-quality/testing/).

To understand end-to-end testing better, I am interviewing Erik Fogg from [ProdPerfect](https://prodperfect.com/).

## Can you tell a bit about yourself?

![Erik Fogg|100|100|author](assets/img/erik.jpg)

I'm Erik Fogg, the Chief Operating Officer at ProdPerfect. My background is actually in process improvement and operations efficiency, which seems odd for a tech company. But I'm surrounded by lots of great engineers who are much smarter than myself, and a big part of my job is making sure that our customers can embed us into their processes in a way that makes developing software far more efficient.

## How would you describe end-to-end testing to someone who has never heard of it?

I have a favorite analogy: when you're going to send Curiosity to rove around Mars, you need to test the heck out of it. You test individual components such as the camera or the drive train in isolation; this is like a unit test, and you can do it cheaply and frequently, allowing you to iterate.

You want to make sure the camera and drivetrain can talk to the onboard computer; this is integration testing, and it's a little more expensive. But you do not know if the rover will work on Mars until you put it all together and drive it around in a Mars-like environment.

Above is the essence of end-to-end testing: you put together and launch the entire web application and send a simulated person to use it. During testing, the server and network and integrations and all the chaotic complexities with it are live.

You use end-to-end testing to make sure your application works in the wild. It's expensive and time-consuming, so you can't do it nearly as frequently as your lower-level tests.

## How does end-to-end testing work?

The old school way of doing end-to-end testing is to launch the application on a test server and use it. We call this "manual testing." It's still done today, and sometimes that's the right way of doing it.

In manual testing, you, as a human, follow several steps on the application, and you check to make sure you're getting the response you want. So you might buy a product and check out, and you want to make sure that the credit card was charged, that the shipping address is correct, etc.

You've probably already figured out that you need to set up your test environment in some way to pretend it charged a credit card or shipped a product. All of that setup is necessary to make sure that you can test your application without (for example) buying a product every time.

The other way of doing end-to-end testing is to automate it. It's here where you get Quality Assurance (QA) Automation Engineers getting involved. Instead of just using the application, QA Automation Engineers write scripts that send simulated users (think: bots) to use the application, and those scripts look for the kinds of responses (such as "credit card is charged" or "product is shipped"). So by writing these scripts, you can test an application more quickly, reliably, and cheaply than doing it manually.

## How does end-to-end testing differ from other solutions?

It's part of the whole picture. [Martin Fowler has a great article](https://martinfowler.com/articles/practical-test-pyramid.html) on how end-to-end testing fits into a more extensive collection of testing methodologies that are necessary for a great software team to ship high-quality code quickly. The Mars Rover analogy works well for us here: you need to test the components of your code in different ways:

- **Unit testing** - Test each module of code to ensure it does what it's intended to do. For example: does your Sales Tax Calculator correctly apply a 6.25% sales tax when you enter Massachusetts as the state?
- **API/Integration testing** - Modern applications are architected as multiple semi-independent services that work together. API and integration testing makes sure these services can effectively interface with each other (this is a vast oversimplification, but if you're new to API testing, it gets the idea across).
- **End-to-end testing** - As explained above.

All three of these are critical parts of functional testing. There are other important things to test in your application, including performance, load, UX, and accessibility. The pyramid largely encapsulates types of functional testing.

## Why did you develop ProdPerfect?

End-to-end testing is a mess in a lot of ways. It's expensive to build, it's challenging to maintain (you have to change tests when you change code), and it's unstable (some tests will flip between passing and failing even when the code has not changed). Many solutions attempt to make it a little easier to maintain end-to-end testing, but the biggest problem is otherwise going unaddressed: what tests should you write?

You can't write tests for every possible workflow through your application: you'd have a test codebase bigger than the application codebase. So you're forced to prioritize: what do you write?

Teams have different heuristics to decide what they will and won't test, but these are all forms of guessing. That guessing means critical tests are missed, and unnecessary tests are written. Bugs make it into production, and test suites are more extensive (and thus more expensive and longer-running) than they need to be.

ProdPerfect analyzes product analytics data to build and maintain test code automatically. In practice, this means we let the users of our customers tell us what's important to test, just by using the application. We use this data to prioritize tests to make sure what users care about always works. As we can automatically build and maintain the tests, we can support test automation far more efficiently than humans.

## What's next?

For us, it's improving our machine learning systems to begin anticipating what new tests need to be developed even earlier in the software development lifecycle. It will be hugely valuable for our customers.

After that, we want to port what we're doing over to mobile applications – which is a lot harder than it seems at first glance. What does the future look like for end to end testing and web development in general?

## Can you see any particular trends?

I think the software industry is in a bit of denial about Machine Learning and AI coming after everyone's jobs. Part of that is because we're building the AI – how could it get us?.

Web development is becoming increasingly modular and repeatable. Testing is already there. I see ML and AI getting smart enough, pretty quickly, to build most web applications with a Product Manager at the steering wheel, without engineers writing code. Give it five years.

## What advice would you give to programmers getting into web development?

Well, based on the above: "develop other skills!". Slinging code is excellent, but we've forgotten why engineers exist: to solve problems. Become a great problem solver. Learn to analyze complex situations with limited data and competing priorities. You'll have incredible job security if you can do this.

## Who should I interview next?

[Jason Arbon of Test.ai](https://www.linkedin.com/in/jasonarbon/). Guy's a genius; he and I have highly complementary perspectives on testing and software development.

## Any last remarks?

"Don't fear the machine". By the time ML or AI can do something, it's already stopped being a creative human task that stimulates the mind and helps you learn and flourish. We should always be moving forward to the new frontiers of where human creativity is at its best. [I have a post of my own that expands on this.](https://prodperfect.com/blog/culture/enthusiasm/)

## Conclusion

Thanks for the interview, Erik! I feel end-to-end testing is often underappreciated technique and I hope developers see more value in it in the future.

T> You can [learn more about ProdPerfect online](https://prodperfect.com/).
