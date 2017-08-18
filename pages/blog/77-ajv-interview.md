---
title: 'ajv - The Fastest JSON Schema Validator - Interview with Evgeny Poberezkin'
date: 2017-01-23
headerImage: 'assets/img/chess.jpg'
keywords: ['interview', 'json']
---

Describing what things are is an essential skill for a programmer. We might do that implicitly, but we often have to think about structure regardless. [JSON Schema](http://json-schema.org/) is a specification that allows us to do this in a more formal manner.

Assuming you were creating a form, you could describe its fields and their details using a schema. Once you have a schema, you could generate the form and its validation based on that information.

The same idea applies to tools like [webpack](https://webpack.js.org/). There we use a JSON Schema to describe the configuration webpack expects. This way you can get a schema invalidation error over a cryptic runtime one which you would have to debug.

Underneath webpack uses a library known as Ajv by [Evgeny Poberezkin](https://twitter.com/EPoberezkin) to handle validation. Read on to learn more about JSON Schema and the library itself.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/f0e97301983c1019d98740935009ab6e?s=200" alt="Evgeny Poberezkin" class="author" width="100" height="100" />
</span>

I've been interested in software since school. I've spent a big part of my life creating and managing businesses, only occasionally creating software for them. I've been coding full time for several years. Currently I lead the team of great software engineers at [MailOnline](http://dailymail.co.uk) (and we are hiring!).
</p>

## How would you describe *Ajv* to someone who has never heard of it?

[Ajv](https://github.com/epoberezkin/ajv) implements [JSON Schema](http://json-schema.org) - a standard to describe and validate a JSON document using a schema. For example, the schema below describes an object that must have two properties: "first_name" and "last_name".

```json
{
  "type": "object",
  "required": ["first_name", "last_name"],
  "properties": {
    "first_name": { "type": "string" },
    "last_name": { "type": "string" }
  }
}
```

To comply with the schema, you could write a definition like this:

```json
{
  "first_name": "John",
  "last_name": "Doe"
}
```

Assuming you provided a wrong type or failed to pass a required field to the schema, the validation step would fail. This way you can know for sure that your data is exactly the way you expect it to be. Beyond simple field definitions, you could describe how data relates to each other. Even more complex invariants are possible.

Ajv implements several extensions to JSON Schema specification (e.g., [$data reference](https://github.com/epoberezkin/ajv#data-reference)) and allows users to define their own custom keywords. [ajv-keywords](https://github.com/epoberezkin/ajv-keywords) defines several useful keywords, some of which will be included in the next versions of JSON Schema specification - `propertyNames` is included in draft-06 (soon to be published) and `if/then/else` is considered for draft-07.

## How does *Ajv* work?

Ajv compiles JSON Schema into JavaScript - it generates the code used to validate user data against the constraints defined in the original JSON Schema (and creates a validation function using the `Function` constructor).

For example, use this code to compile the above schema to a validation function:

```javascript
const Ajv = require('Ajv');
const ajv = new Ajv({allErrors: true});

// Schema from the example above
const validate = ajv.compile(schema);

console.log(validate.toString());
```

The result of the compilation is a JavaScript function:

``` javascript
function(data /*, ... */) {
  'use strict';
  var vErrors = null;
  var errors = 0;

  if ((data && typeof data === "object" && !Array.isArray(data))) {
    if (data.first_name === undefined) {
      var err = { keyword: 'required' /*, ... */ };

      if (vErrors === null) {
        vErrors = [err];
      } else {
        vErrors.push(err);
      }

      errors++;
    } else if (typeof data.first_name !== "string") {
      var err = { keyword: 'type' /*, ... */ };

      if (vErrors === null) {
        vErrors = [err];
      } else {
        vErrors.push(err);
      }

      errors++;
    }
    if (data.last_name === undefined) {
      var err = { keyword: 'required' /*, ... */ };

      if (vErrors === null) {
        vErrors = [err];
      } else {
        vErrors.push(err);
      }

      errors++;
    } else if (typeof data.last_name !== "string") {
      var err = { keyword: 'type' /*, ... */ };

      if (vErrors === null) {
        vErrors = [err];
      } else {
        vErrors.push(err);
      }

      errors++;
    }
  } else {
    var err = { keyword: 'type' /*, ... */ };

    if (vErrors === null) {
      vErrors = [err];
    } else {
      vErrors.push(err);
    }

    errors++;
  }

  validate.errors = vErrors;
  return errors === 0;
}
```

The generated function performs validation against exactly the schema above without using the schema itself - all the keywords are translated into code.

The generated code is verbose. However, it is very efficient as it has no loops or function calls. The developer does not need to see the generated code to use it, so the size doesn't matter.

There are several other validators using the same approach - it allows to achieve more than 100 times performance of interpreting validators.


## How does *Ajv* differ from other solutions?

Ajv is the fastest JSON Schema validator - in [some tests](https://github.com/pandastrike/jsck#benchmarks) it is almost 3 times faster than the nearest alternative.

Its main advantage is that it is the most standard-compliant JavaScript validator, particularly when it comes to resolving references between schemas - all other validators have [limited support of references](https://github.com/epoberezkin/test-validators#most-failed-tests-related-to-ref).

Ajv is also the most extensible validator - it allows to create custom validation keywords in [several different ways](https://github.com/epoberezkin/ajv/blob/master/CUSTOM.md) and also has support of [asynchronous validation](https://github.com/epoberezkin/ajv#asynchronous-validation) (when validation keywords make asynchronous calls). Users have managed to use this functionality to include the business logic validation into their schemas, that is often more manageable than having it in the code.


## Why did you develop *Ajv*?

I was working on [JSONScript](http://www.jsonscript.org) (a language for scripted server-side processing of existing endpoints and services). I needed a JSON Schema validator. However, all the existing validators were failing in some of my tests – tests that were expected to pass according to the JSON Schema specification.

Before Ajv I created [json-schema-consolidate](https://github.com/epoberezkin/json-schema-consolidate) - a collection of adapters to many JavaScript validators to be able to switch between them easily without changing my code. I've learned a lot about the inner workings of the validators and I've found out that there was no validator as good as I needed. So I decided to create another JSON Schema validator.

## What next?

One of the problems in JSON Schema adoption is the lack of tools to test the schemas. From what I have observed, developers write only a handful of tests where validation passes and from these tests make a conclusion that their schemas are correct. Even an empty schema `{}` without any keywords would satisfy all passing tests!

The only way to thoroughly test JSON Schemas is to write tests when validation fails sufficient to cover all keywords used in the schema. But how "sufficient to cover" can be measured?

### Testing Schemas

Given that Ajv compiles schemas to JavaScript functions, it is possible to measure **code coverage** of the schemas. The problem though is that the coverage reports are not very useful - it is not very easy to see JSON Schemas behind generated JavaScript code (as you can see in the earlier example).

I've started working on tools that allow to test schemas and generate code coverage reports. These packages can already be used:

- [json-schema-test](https://github.com/MailOnline/json-schema-test) - a package that was used in Ajv from the very beginning to execute platform independent tests that are written as JSON files in [the same format](https://github.com/json-schema-org/JSON-Schema-Test-Suite) that JSON Schema specification uses. Although this format was created to test validators with very simple schemas it can be used to test schemas (assuming that the validator is working correctly).
- [ajv-istanbul](https://github.com/epoberezkin/ajv-istanbul) - a package to instrument generated validation code to measure its code coverage.
- [json-source-map](https://github.com/epoberezkin/json-source-map) - a package to parse/stringify JSON and to provide source-map for JSON-pointers to all nodes.

### Current Work

I am working on adding source maps to generated validation code (where the "source code" is JSON Schema itself) and on generating coverage reports for JSON Schemas. That would allow to test JSON Schemas using JSON files as test cases and measuring code coverage in a platform independent way.

It can be used for schemas used in any language. This assumes that the validator available in that language complies with the standard.

## What does the future look like for *Ajv* and web development in general? Can you see any particular trends?

The next major version of Ajv will implement the next version of JSON Schema standard (draft-06) that should be published very soon. [Beta version](https://github.com/epoberezkin/ajv/tree/5.0.1-beta.1) of Ajv that supports preliminary draft-06 specification is already available.

With JSON Schema coverage tool I described above it will be possible to use Ajv to help develop validators for other languages. I believe that JSON Schema specification still requires both some simplification and at the same time some additional features to make it more flexible and powerful.

### Reactive Programming - Explicit and Implicit Graphs

Regarding the web, I think the most promising developments are happening in **reactive programming**. I think with React etc. we are only making the first steps. Reactive programming paradigm allows to define a graph connecting different parts of application data/state using some expressions/rules. There are two different approaches in defining such graphs - explicit and implicit.

In the explicit approach the graph is defined using some syntax connecting data structures (it is used in some libraries for JavaScript, e.g. [milojs](https://github.com/milojs/milo)). In the implicit one, the observer pattern is used to translate messages to the changes in data/application state (e.g. React/Redux).

While the second approach is easier to implement and in some cases it allows to better manage some common reactive programming problems (glitches, cycles, mutable state, race conditions), the advantage of the first approach is that it allows to write code at a higher level of abstraction.

I think in the near future we will see new implementations of explicit approach to building data graph in JavaScript. It can be a library, syntax extensions or even a whole new language that allows to explicitly define data graph without worrying about internal mechanics of change propagation.

### Abstraction of HTML/CSS

I also hope that we will either see some new web standard for defining UI in the browser that could supersede HTML/CSS or at the very least some mature libraries that abstract these details from the developer.

HTML/CSS that was created for hypertext documents seems very clunky when used for building UI. Although it keeps millions of web-developers busy, I think they could achieve much more with something more suitable for UI creation. Web components seem to be a step in that direction.

## What advice would you give to programmers getting into web development?

I think the most important thing is to understand the foundations of the technologies you are using - JavaScript features (closures, classes, prototypes, etc.), DOM API and node.js core packages, rather than limit your understanding to a particular library/framework APIs and conventions.

Firstly, because the foundational technologies have much longer life cycle than frameworks, so any time spent learning them is a long term investment. Secondly, because by understanding the foundation of the frameworks you use you can easily solve problems that these frameworks can't help you with.

I think it's important to be able to solve the problem by just writing code rather than only be able to glue together pieces created by other people - I see that a bit too often when developers try to avoid writing code manipulating some simple data structures.

It's also very important to be very critical, I'd even say skeptical, towards all new tools and libraries, particularly those that generate a lot of hype. Quite a few of them may spend more of your time than they promise to save. Some others may simply not be around in 3-5 years. So heavily relying on them should be a carefully made decision rather than a default choice.

## Who should I interview next?

I think your readers could be interested to learn about [nodent](https://github.com/MatAtBread/nodent) - `async`/`await` transpiler created by [Matt Woolf](https://github.com/MatAtBread) that generates the fastest ES5 code. It's been tested with Ajv for asynchronous validation and I can say that it is much more performant and stable than the alternatives.

Also, I would be quite interested to read about the history and the future of Istanbul - code coverage library created by [Krishnan Anantheswaran](https://github.com/gotwarlost). This library revolutionised the way we write and test JavaScript code.

## Conclusion

Thanks for the interview Evgeny! I've seen the power of schema many times and it feels like an underappreciated approach especially in front-end.

By relying on a standard, like JSON Schema, you simply eliminate a part of the work altogether and can focus on something more important. That said, there are always cases a standard won't cover, but regardless I would recommend studying the idea of schemas.

There are several tutorials about JSON Schema, e.g. a [very good guide](https://spacetelescope.github.io/understanding-json-schema/) for schema authors by the Space Telescope Science Institute. Evgeny has also written a [tutorial about JSON Schema](https://code.tutsplus.com/tutorials/validating-data-with-json-schema-part-1--cms-25343) that is available on tuts+. [The site of Ajv](https://epoberezkin.github.io/ajv/) is worth studying and you can [find the project on GitHub](https://github.com/epoberezkin/ajv).
