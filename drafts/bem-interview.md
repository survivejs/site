---
title: 'BEM - Methodology to enable reuse in front-end development - Interview with Sergey Berezhnoy'
date: 2017-11-27
headerImage: 'https://hsto.org/getpro/habr/post_images/718/4cc/331/7184cc3315c0b8d89931593d5d6862e3.png'
keywords: ['interview']
---

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/69aab18f21bd89606bf19a11c4989bb4?s=200" alt="Sergey Berezhnoy" class="author" width="100" height="100" />
</span>

</p>

Web developer in [Yandex](https://yandex.com/company/) since 2005. Participate in development of such Yandex services as Search, Mail, Blog Search, Yandex blogging platform, Video and Images searches. Along with service development created internal tools for web development.
One of the co-authors of BEM.

## How would you describe *BEM* to someone who has never heard of it?

BEM is an architecture pattern allowing to achieve flexible and maintainable code.
It's a way to make your code self-descriptive and predictable keeping everything consistent and familiar for all the devs on a project.

And all you need to achive this for literally any interface is just a few concepts:
1. [Blocks](https://en.bem.info/methodology/key-concepts/#block) to split an interface into components
2. [Elements](https://en.bem.info/methodology/key-concepts/#element) to split complex blocks into parts
3. [Modifiers](https://en.bem.info/methodology/key-concepts/#modifier) to express state
4. [Mixes](https://en.bem.info/methodology/key-concepts/#mix) to have different blocks or elements on the same DOM node
5. [Redefinition levels](https://en.bem.info/methodology/redefinition-levels/) to build a project layer by layer avoiding copy/paste.

## How does *BEM* work?

The idea behind BEM is similar to Web Components or any other component approach to web development.

It's hard to grasp large complex system at once. But developers may split it into simple reusable blocks which are easy to use and maintain. And then they can be used as Lego bricks to build literally anything.

BEM provides best practices for that as well as ready-made [tools](https://en.bem.info/toolbox/) and [block libraries](https://en.bem.info/platform/libs/bem-components/6.0.0/).

## How does *BEM* differ from the other solutions?

First of all BEM is just a concept (similar to OOP).

Main power of BEM is that it works for any tech (HTML, CSS, JS, tests, documentation, etc) and everything can be described with just a few simple concepts.

BEM can be implemented in many different ways on any programming language.

Ofcourse we have [our own](https://en.bem.info/platform/) and as we love JavaScript it's totally JS based.

## Why did you develop *BEM*?

Initially we faced a few problems:
1. Avoiding copy/paste on different projects with the same design style guide
2. Keeping large projects maintainable
3. Having unified structure on different projects to make it familiar for developers

So BEM was started to solve these problems but eventually became much more powerful.

For all the steps of BEM evolution see [The history of BEM](https://en.bem.info/methodology/history/).

## What next?

I'll continue to popularize BEM methodology and develop examples of implementations in different techs.
Here's one of them for React:
* https://github.com/bem/bem-react-core
* https://github.com/bem/bem-react-components
* https://github.com/bem/create-bem-react-app

There's also a [video](https://skillsmatter.com/skillscasts/10327-bem-the-unknown) from FullStackConf where we talked about all the features of BEM.

Everything about interaction design in large teams is also very important for me. As the Department of search interfaces development continues to grow we want to get benifits from the fact that so many cool people gathered in one place. It's a pity though such insights are hard to opensource ;-)

## What does the future look like for *BEM* and web development in general? Can you see any particular trends?

I'm sure that the component approach will continue to evolve. For example, nowadays in React the same ideas we used in our code several years ago are implemented. I hope that other concepts of the BEM methodology will be more widely known because ultimately it will make it easier to do web interfaces and it is beneficial to all of us as users ;-)

## What advice would you give to programmers getting into web development?

Be always open to learn something new. On the other hand do not reinvent the wheel but improve it — do not hurry to create your own solution, take your time to find existing once and improve them.

## Who should I interview next?

Have no idea ;-)

## Any last remarks?

Thank you for the interview and sorry for such a long answer.

## Conclusion

To learn more about BEM please visit [bem.info](https://en.bem.info/).

Thanks for the interview Sergey!