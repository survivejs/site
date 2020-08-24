---
title: "Midway - A Node.js framework for Serverless - Interview with Harry Chen"
date: 2020-08-24
headerImage: "assets/img/server.jpg"
headerAuthor: "jarmoluk"
headerSource: https://pixabay.com/photos/cyberspace-data-wire-electronic-2784907/
keywords: ["interview", "nodejs", "serverless"]
---

[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing) is one of those approaches that has taken the world by storm. The idea is to make computing a flexible resource you consume on-demand. Compared to earlier models, it scales in terms of demand instead of requiring an upfront investment on in server infrastructure.

[Harry Chen](https://twitter.com/czy88840616) has developed a solution, [Midway](https://github.com/midwayjs/midway), that makes it easier to develop serverless applications using Node.js. In this interview, we'll learn more about the approach and how it's affecting the technology landscape.

## Can you tell a bit about yourself?

![Harry Chen|100|100|author](https://avatars2.githubusercontent.com/u/418820?s=460&v=4)

Hi, I'm [Harry Chen](https://github.com/czy88840616), a Staff Front-end Engineer of [Alibaba](https://www.alibabagroup.com/en/global/home). I've worked on Node.js technology stack for a long time. During this time, I have provided framework and middleware solutions for [Taobao](https://www.crunchbase.com/organization/taobao) and other Alibaba business units.

I have been responsible for Serverless Arch standardization specification of Alibaba Group and overall Node.js system infrastructure for Taobao. During this time, I've solved various maintenance and stability issues for full-stack development. I am also responsible for Midway on-premise and open-source development.

The work includes the development and maintenance of community open source products, such as [Midway](https://github.com/midwayjs/midway), [Sandbox](https://github.com/midwayjs/sandbox-docker), [Pandora.js](https://github.com/midwayjs/pandora), [Injection](https://github.com/midwayjs/injection), and many others.

## How would you describe Midway to someone who has never heard of it?

Midway is a framework that allows applications written in a pure function pattern to be deployed to various cloud platforms without any code modifications. The idea is to avoid lock-in on a single Function as a Service (FaaS) vendor.

Midway Serverless alleviates the pain of migrating traditional deployment pattern applications to elastic serverless platforms. At Alibaba Group, many legacy Node.js applications are still working online and require heavy operational maintenance. All of this can be costly.

Midway Serverless is the solution we adopted to accelerate the migration and reducing the costs. There is no action to be taken to deploy the app to a FaaS platform other than composing a single YAML configuration file with Midway Serverless.

As React Hooks gain popularity rapidly, coding with functions is becoming more popular. Midway previously is built based on the decorators and dependency injections to provide inversion of control, augmenting JavaScript classes to be basic grouping units of code snippets.

Writing in a function pattern doesn't mean it is not possible to achieve inversion of control. Midway Serverless apps can share the same coding pattern between the web and server-side.

## How does Midway work?

Midway provides a set of runtime adaptation tools that can smooth out the different cloud vendors in the community. These tools encapsulate and standardize the different cloud vendor access parameters, help migrate different types of Node.js products (applications and functions) to the cloud vendor, and also provide their own lifecycle for extensions.

All of this makes on-premise deployments easy. On the other hand, Midway itself is a framework that makes code decoupling efficient through TypeScript + IoC capabilities.

## How does Midway differ from other solutions?

Usually the common FaaS handlers look like this:

```javascript
// for events
exports.handler = (event, context, callback) => {
  callback(null, "hello world");
};

// for HTTP
exports.handler = (request, response, context) => {
  response.send("hello world");
};
```

Let's check out the Midway Serverless solution:

```typescript
// Midway IoC decorator to declare this class to be provided
@Provide()
export class MyFirstFunctionClass {
  @Inject()
  ctx;
  // first function, for events
  @Func("api.user")
  async myFn1() {
    return "hello world";
  }

  // second function, for HTTP
  @Func("api.book")
  async myFn1() {
    this.ctx.type = "html";
    this.ctx.body = "<html><body>hello world</body></html>";
  }

  // third function
  @Func("api.store")
  async myFn1() {
    const data = await request("http://xxxx/api/data.json");
    this.ctx.set("X-HEADER-TIMEOUT", 2000);
    this.ctx.body = {
      data: {
        success: true,
        result: data,
      },
    };
  }
}
```

It's obvious that the first option seems easier to start quickly while being clearer. On the other hand, we can almost reuse the Midway Web Framework's decorator, even arbitrarily port the IoC-formed code between Midway Web and Midway Serverless.

Furthermore, Midway provides a runtime isolation architecture that is unique in the community. It not only allows functions to run on top of the architecture, keeping the code isolated, but also allows the original application to be migrated quickly, which maintaining a relatively elegant state.

There might be some frameworks like Midway's solution. However, we provide the ability to convert functions and applications, in addition to the traditional decorator for different scenarios, so that the application can decide whether to deploy to functions or applications at build time. Doing this allows developers to focus on the business itself without worrying about the platform they are deploying to in the first place.

## Why did you develop Midway?

In the past, we used a traditional function architecture to support our logic. After we had been using it for a while, we realized that the cloud vendor itself didn't provide a good package. The required functions had to be combined or even rewritten, and the community didn't have a web framework specifically for Serverless scenarios, which made the development of our business slow.

The experience made us think about the need to solve the problem of migration between different platforms, which led to Midway's first goal on the Serverless system: to prevent vendor lock-in. After designing a set of Serverless lifecycles and implementing some function runtimes, we realized that the community had the same issue.

While the [Serverless Framework](https://www.serverless.com/) did some things, it didn't smooth out the differences between platforms at the code level. As a result, we decided to open source Midway Serverless and make this capability available to the community.

## What next?

We're working on the second major version of Midway, which will provide a combination of full-stack applications, functions, and front-end code to make the whole development experience better.

At the API level, we'll be opening up more scenario decorators, such as @Socket, as well as some logic processing decorators, such as `@Pipeline`. From a functional perspective, Midway will evolve into an ecosystem that developers can use out of the box, similar to [Spring Boot](https://spring.io/projects/spring-boot).

## What does the future look like for Midway and web development in general? Can you see any particular trends?

Whether it's the current full-stack, Serverless Arch, edge computing, AI, 3D, etc., the web developers will use Node.js in many areas, and Midway will also provide capabilities in different scenarios, which will facilitate the Node.js ecosystem evolution and web development.

## What advice would you give to programmers getting into web development?

Web development is a creative position, and we should explore more than web technology itself, like Serverless Arch WebAssembly etc., to look at the big picture and become full application engineers.

## Who should I interview next?

[Eric Li](https://github.com/WenheLI), contributor of [pipcook](https://github.com/alibaba/pipcook).

## Conclusion

Thanks for the interview, Harry! I can see why developed Midway and I hope other developers find the solution as well. Serverless computing is an emerging space and it looks like Midway could become a vital part of it.

T> You can [find Midway on GitHub](https://github.com/midwayjs/midway) and [follow Midway news on Twitter](https://twitter.com/js_midway).
