---
title: 'lint-staged - Run Linters on git Staged Files - Interview with Andrey Okonetchnikov'
date: 2018-04-08
headerImage: 'assets/img/headers/lint.jpg'
keywords: ['interview', 'javascript', 'testing']
---

Although [linting a project](/maintenance/code-quality/linting/) is a good technique to adopt, it comes with a cost as you have to wait for the linter to complete its work.

[Andrey Okonetchnikov](https://twitter.com/okonetchnikov) figured out a way to solve the problem.

## Can you tell a bit about yourself?
<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/69bb6b30cd7b682ba5d5a1f352e6862a?s=200" alt="Andrey Okonetchnikov" class="author" width="100" height="100" />
</span>
I’m a Front End Engineer and User Interaction Designer from Russia living in Vienna, Austria. I have been working with web technologies since 1999, and I love solving complex problems, no matter if it’s a design or a technical challenge. I’m passionate about UI and UX design, typography, music, photography, mountain biking, and coffee.
</p>

## How would you describe *lint-staged* to someone who has never heard of it?

lint-staged is a simple to use tool to enforce code quality in teams.

## Why did you develop *lint-staged*?

I care a lot about code readability and maintainability. To keep my code in good shape I use linters and other code analysis tools that help me catch simple bugs earlier. While working with different teams I noticed that:

1. Not everyone cares so much about code quality.
2. Not everyone has proper linter setup in their editors. 

As a result, even though some people were committed to using linters, the overall quality of the code was far from great, and it wasn’t improving. This kept me thinking about how to enhance the quality of code in teams without becoming a pain.

The idea behind of lint-staged is to make the setup process for all developers on the team as simple as possible. Instead of writing instructions on “how to setup XXX linter in YYY code editor” and hoping everyone will follow it, you can commit lint-staged configuration to the repository and next time anyone pulls the code from the remote server they will have the proper setup up and running.

## How does *lint-staged* work?

Lint-staged is supposed to be used with git pre-commit hook. Pre-commit hook prevents developers from submitting their work to the repository if it’s not up to the project’s standard. Unfortunately, there are two problems with git hooks:

1. They are hard to setup and manage across teams. The problem can be solved by using packages like [husky](https://www.npmjs.com/package/husky) or [pre-commit](https://www.npmjs.com/package/pre-commit).
2. Running linters on pre-commit can be time-consuming since it will lint the whole repository on every commit.

Lint-staged solves the second problem by only running linters on files that are “staged” for the commit. If you follow good commit practices, you might have edited ten files, but you’d like only two of them in the single commit.

In git, you select those two files by “staging” them using `git add …` command. When you then run `git commit`, lint-staged will only run linters on those two files keeping your work in progress unchecked! By doing so, lint-staged reduces the time needed to run linters but also makes sure that only relevant to commit changes are linted.

## How does *lint-staged* differ from other solutions?

There are not so many alternatives as far as I know. [pre-commit](https://pre-commit.com), which is written in Python, is the closest alternative and it has similar goals so you might want to take a look at it, too.

## What next?

I’m fascinated by code analysis tools and would like to work on tools that are the intersection of design and technology: an automated way for better web typography or static analysis tools for design systems and components libraries maintainers.

## What does the future look like for *lint-staged* and web development in general? Can you see any particular trends?

I hope to crack the long-standing issue with [partially committed files](https://github.com/okonet/lint-staged/issues/62) which I’ve been working on for more than a year now. So if you think you can help me, please feel free to join me!

As for general trends: I think JavaScript trend will keep growing and this will lead to:

1. Better code analysis tools that optimize JavaScript code and reduce runtime payload will appear.
2. The search for more robust languages will continue. One of the candidates to become the type-safe JavaScript is [ReasonML](https://reasonml.github.io) which makes me very excited. If you’re interested in this trend, you should attend [ReasonConf](https://www.reason-conf.com) which I’m co-organizing.

## What advice would you give to programmers getting into web development?

Don’t jump on the technology hype-trains—those come and go all the time. Instead, learn basics of the web platform: HTML, CSS, accessibility since they are the foundation of the open and accessible web. Take some time to learn basics of the graphic design, computer science, algorithms. Focus on creating and shipping products that are useful and user-friendly and not on the technology behind it.

## Conclusion

Thanks for the interview, Andrey! I use lint-staged actively and it even made it to [the maintenance book](https://survivejs.com/maintenance/infrastructure/automation/). You can see how to set it up there.

To learn more about the tool, [check lint-staged on GitHub](https://github.com/okonet/lint-staged)!
