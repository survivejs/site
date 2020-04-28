---
title: "JavaScript Security - Interview with David Balaban"
date: 2020-04-28
headerImage: "assets/img/lock.jpg"
headerAuthor: "Free-Photos"
headerSource: https://pixabay.com/photos/padlock-shed-locked-lock-secure-690286/
keywords: ["interview", "security"]
---

Given JavaScript dominates the world of web development, it has become a good target for malicious actors. Furthermore, the flexibility has led to a plethora of attack vectors for cybercriminals making JavaScript security an important topic for web developers.

In this interview, I am discussing with David Balaban, a cybersecurity specialist.

> To learn more about the topic, [read the interview with Liran Tal](/blog/secure-coding-interview/).

## Can you tell a bit about yourself?

![David Balaban|100|100|author](https://www.gravatar.com/avatar/a9abfe289a5aada968d3e489b7fd83f2?s=200)

My name is David Balaban. I work with [MacSecurity.net](https://macsecurity.net/) and [Privacy-PC.com](https://privacy-pc.com/) outlets specializing in a vast range of cybersecurity issues, from Mac and Windows malware analysis and ransomware mitigation to software evaluation and the fundamentals of secure web development. The latter has been my particular focus for quite some time, with insights into JavaScript security helping me expand my professional horizons.

## How would you describe JavaScript security to someone who has never heard of it?

JavaScript is a lightweight scripting language best known for its use in dynamic web page environments. Its purpose is to specify how a web page responds to specific events initiated by the user. A few examples include form submission, animations, and events triggered when you press a button.

To deliver this interactivity, JavaScript is integrated into an HTML page, where it operates in tandem with what is called the Document Object Model (DOM), the underlying tree structure interface of that page. Whereas this tight interplay is the basis for ensuring a seamless user experience, it is also the weakest link in JavaScript implementation because it can allow attackers to deploy harmful scripts over the web and execute them on users' computers.

In other words, the most significant security challenge about JavaScript is that threat actors can mishandle it to inject rogue scripts triggering unwanted website behavior. Combined with classic site hacking, this activity can become a launchpad for the massive distribution of malicious code in a highly covert way. The security side of the matter is all about patching loopholes in JavaScript deployment to prevent perpetrators from tweaking the code for nefarious purposes.

## What is JavaScript security?

There are three significant reasons why writing secure JS code is easier said than done. All of them stem from the very design and capabilities of JavaScript.

### The dynamism of the language

JavaScript is dynamic, asynchronous, and scarcely typed. While being on the plus side of JS, these hallmarks also make it reasonably easy to exploit. For instance, the use of a sketchy ‘eval’ function and the injection of third-party code via ‘script src’ may enable an attacker to execute stings in runtime. As a result, you cannot “statically guarantee” that your code will work in a specific way.

Asynchronous callback functions can be invoked through the likes of the setTimeout method, and XMLHttpRequest object statistically conceals the bulk of treacherous JS errors.

### Extensive capabilities

JavaScript has assumed quite a few unique characteristics in the course of its evolution. These include prototypes, first-class functions, and closures. They further bolster the dynamic nature of JS, but – you guessed it – they may hamper the process of writing secure code.

### Close ties between JavaScript and DOM

As I previously mentioned, this binding is the foundation of a smooth user experience. JavaScript modifies DOM dynamically so that the browser instantly reflects these changes. However, the fragments of code used for this interoperability are highly susceptible to errors and third-party interference.

### Mainstream attack vectors

The mainstream attack vectors piggybacking on the weaknesses of JavaScript include:

- Cross-site scripting - [XSS](https://www.veracode.com/security/xss)
- Cross-site request forgery - [CSRF](https://www.veracode.com/security/csrf-attacks)
- Server-side JavaScript injection - [SSJI](https://www.cyberpunk.rs/server-side-javascript-injection-with-nodexp-usage-example-ssji-metasploit)

The trio can fuel malware propagation, identity theft, and account takeover.

Security is a matter of minimizing or eliminating the above risks. All it takes is writing flawless code that cannot be exploited by attackers. JS code analysis using specially crafted tools is what bridges the gap between web development and immaculate JavaScript implementation.

## What are the distinctive features of JavaScript security solutions?

All instruments that assess the JS code for errors and vulnerabilities fall under one of the following categories:

**JavaScript code testing frameworks.** These tools automatically check the JS code for common syntax errors. From where I stand, the most important ones are [QUnit](https://www.npmjs.com/package/qunit), [Jasmine](https://www.npmjs.com/package/jasmine), [Mocha](https://www.npmjs.com/package/mocha), and jsTestDriver. There are also APIs such as [Selenium](https://github.com/SeleniumHQ/selenium) and [PhantomJS](https://phantomjs.org/) that emulate browser behavior when specific code is executed.

**Static analysis tools.** Their purpose is to inspect the code for compliance with web development best practices. They help tidy up your code by pinpointing redundant strings and scrutinizing dependencies between JS functions, Cascading Style Sheets (CSS), HTML tags, and images. My personal favorites include WARI, [JSLint](https://www.npmjs.com/package/jslint), [Google Closure Compiler](https://developers.google.com/closure/compiler), and WebScent.

**Solutions for dynamic JS code analysis.** These traverse your code for anti-patterns and help you better understand the ties between components and events they trigger. I prefer utilities called [DOMPletion](https://github.com/saltlab/dompletion), [JSNose](https://github.com/saltlab/JSNose), and [Clematis](https://github.com/saltlab/clematis).

## Why did you start working on JavaScript security?

In my experience, cybercrime is a complex fusion of different attack mechanisms, and JavaScript abuse is one of them. Malicious actors are increasingly embedding dubious JS code into compromised web pages to deposit malware onto visitors’ machines silently and orchestrate large-scale online scams. It is what encouraged me to dive into this particular security domain.

## What next?

I am going to ramp up efforts to explore the ways cybercriminals repurpose JavaScript code to spread predatory software in general and the increasingly prolific Mac adware, in particular.

What does the future look like for JavaScript security? Can you see any particular trends? JavaScript use cases are continuously expanding beyond the original realm. It is increasingly used for developing applications, both mobile and desktop ones.

Environments such as Node.js facilitate JavaScript deployment on web servers. More implementations mean there are potentially more exploitation scenarios that need proper response security-wise.

## Conclusion

Thanks for the interview David! Although JavaScript lets developers create complex web applications with a relative ease, it also comes with a cost in terms of security. Being able to create secure JavaScript code is a critical prerequisite for making the internet a safer place.

> To learn more about the topic, I recommend checking out [OWASP Top Ten](https://owasp.org/www-project-top-ten/) as it lists the main threats and explains them in a great detail.
