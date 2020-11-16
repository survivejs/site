---
title: "BEM - Methodology to enable reuse in front-end development - Interview with Sergey Berezhnoy"
date: 2018-01-12
headerImage: "assets/img/bem.png"
keywords: ["interview", "architecture", "react"]
---

Developing large scale applications requires a certain amount of discipline. Sometimes it is enforced by the environment; sometimes you have to apply it yourself through conventions. Likely both are needed to some extent. As applications grow in complexity, the need for clear architecture grows unless you want to end up with a [big ball of mud](http://www.laputan.org/mud/) or a similar disaster.

To learn more about the topic, I am interviewing [Sergey Berezhnoy](https://twitter.com/veged), one of the authors of [BEM](https://en.bem.info/).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/69aab18f21bd89606bf19a11c4989bb4?s=200" alt="Sergey Berezhnoy" class="author" width="100" height="100" />
</span>

I am a web developer in [Yandex](https://yandex.com/company/) since 2005, and I participate in the development of such Yandex services like Search, Mail, Blog Search, Yandex blogging platform, Video and Images searches. Along with service development created internal tools for web development. I am one of the co-authors of BEM.

</p>

## How would you describe _BEM_ to someone who has never heard of it?

BEM is an architecture pattern allowing to achieve flexible and maintainable code. It's a way to make your code self-descriptive and predictable keeping everything consistent and familiar to all the developers on a project.

And all you need to achieve this for literally any interface is just a few concepts:

1. [Blocks](https://en.bem.info/methodology/key-concepts/#block) to split an interface into components
2. [Elements](https://en.bem.info/methodology/key-concepts/#element) to split complex blocks into parts
3. [Modifiers](https://en.bem.info/methodology/key-concepts/#modifier) to express state
4. [Mixes](https://en.bem.info/methodology/key-concepts/#mix) to have different blocks or elements on the same DOM node
5. [Redefinition levels](https://en.bem.info/methodology/redefinition-levels/) to build a project layer by layer avoiding copy/paste.

## How does _BEM_ work?

The idea behind BEM is similar to Web Components or any other component approach to web development.

Grasping sizeable complex system at once is hard. Developers may split it into simple reusable blocks which are easy to use and maintain. And then they can be used as Lego bricks to build anything.

BEM provides best practices for that as well as ready-made [tools](https://en.bem.info/toolbox/) and [block libraries](https://en.bem.info/platform/libs/bem-components/6.0.0/).

## How does _BEM_ differ from the other solutions?

First, BEM is just a concept (similar to OOP).

The main power of BEM is that it works for any tech (HTML, CSS, JS, tests, documentation, etc.) and everything can be described with just a few simple concepts.

BEM can be implemented in many different ways on any programming language.

Of course, we have [our own](https://en.bem.info/platform/), and as we love JavaScript, it's JS based.

## Why did you develop _BEM_?

Initially, we faced a few problems:

1. Avoiding copy/paste on different projects with the same design style guide
2. Keeping large projects maintainable
3. Having unified structure on different projects to make it familiar to developers

So BEM was started to solve these problems but eventually became much more powerful.

For all the steps of BEM evolution see [The history of BEM](https://en.bem.info/methodology/history/).

## What next?

I'll continue to popularize BEM methodology and develop examples of implementations in different techs. Here's one of them for React:

- [bem-react-core](https://github.com/bem/bem-react-core)
- [bem-react-components](https://github.com/bem/bem-react-components)
- [create-bem-react-app](https://github.com/bem/create-bem-react-app)

There's also a [video](https://skillsmatter.com/skillscasts/10327-bem-the-unknown) from FullStackConf where we talked about all the features of BEM.

Everything about interaction design in large teams is also important for me. As the department of search interfaces development continues to grow, we want to get benefits from the fact that so many cool people gathered in one place. It's a pity though such insights are hard to open source.

## What does the future look like for _BEM_ and web development in general? Can you see any particular trends?

I'm sure that the component approach will continue to evolve. For example, nowadays in React the same ideas we used in our code several years ago are implemented. I hope that other concepts of the BEM methodology will be more widely known because ultimately it will make it easier to do web interfaces and it is beneficial to all of us as users.

## What advice would you give to programmers getting into web development?

Be always open to learning something new. On the other hand, do not reinvent the wheel but improve it — do not hurry to create your solution, take your time to find existing once and improve.

## Conclusion

Thanks for the interview Sergey! Conventions have power!

To learn more about BEM, visit [bem.info](https://en.bem.info/).
