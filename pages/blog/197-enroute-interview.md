---
title: "Enroute - Envoy Route Controller - Interview with Chintan Thakker"
date: 2020-08-12
headerImage: "assets/img/gateway.jpg"
keywords: ["interview", "api", "kubernetes"]
---

When developing APIs, you often get questions like how to combine and control data coming from different sources. That's where proxy-based approaches come in.

To understand one such in better detail, I am interviewing [Chintan Takker](https://www.linkedin.com/in/chintant/) as he developed a solution called Enroute.

## Can you tell a bit about yourself?

![Chintan Thakker|100|100|author](assets/img/chintan.jpg)

Hi There, My name is Chintan Thakker, and I am the founder at Saaras Inc. Our primary product is the [Enroute Universal Gateway](https://getenroute.io), an automation-first API Gateway built on [Envoy Proxy](https://www.envoyproxy.io/). Both are open source solutions.

## How would you describe _Enroute_ to someone who has never heard of it?

Enroute makes it easy to run Envoy as an API Gateway. You can use it for microservices running inside [Kubernetes](https://kubernetes.io/) or any service running standalone when there is no Kubernetes.

What makes it easy is simple REST APIs to configure the Standalone gateway or CRDs to configure the Kubernetes Ingress Gateway. Plugins provide the ability to add fine-grained route-level or global policies and traffic control.

T> Kubernetes is an open source solution for scaling containerized applications.

## How does _Enroute_ work?

Enroute works by abstracting away complexities of underlying proxy and providing a simple API, both for Kubernetes and Standalone use-cases. Enroute makes it flexible to add traffic policies at global or route level using a plugin (or filter) architecture. Add a plugin and control all the traffic on the fly, without any restarts or reboots. Simple API calls are all that is needed to get fine-grained control over the traffic.

## How does _Enroute_ differ from other solutions?

Enroute is an API gateway with batteries included. Since it runs on Envoy, there is a lot of functionality that is included in the solution. Other solutions typically charge for it or have to do extensive development for it.

Enroute is also 100% automatable and there are APIs for everything. Enroute state management is also flexible as you can store state in a database, or run stateless without any database. When running stateless, even a file from GitHub can be used to completely restore the gateway state. For Kubernetes, the state is stored in CRDs and state management is completely Kubernetes-native without any external databases.

Enroute is the only gateway on Envoy proxy that works for both Kubernetes Ingress and Standalone use-cases. Typically solutions either target one or the other. A majority of users have a mix of workloads, and this capability comes in handy, especially with the same consistent policy model across all deployments. And running Envoy makes it a super performant solution.

## Why did you develop _Enroute_?

We saw a clear gap in the automation capabilities of the existing gateways. We took an api-first 100% automation approach when building Enroute. We also see a lot of organizations want to adopt Envoy for their use-cases. Now, you'd think why Envoy? Envoy is highly performant since it is written in C++.

Some were running service meshes that have Envoy. Running Envoy outside provided the same consistent experience with deep visibility, superlative performance and end-to-end tracing. We realized that an API Gateway like Enroute can accelerate time to value for these organizations while solving API Gateway use-cases for all their workloads.

Adoption of Kubernetes is on the rise. With a solution like Enroute, Kubernetes adoption is really simplified, since the same policy for standalone gateway can be easily transferred.

## What next?

We just released complete OpenAPI automation capabilities and this has a strong security benefit as it eliminates shadow API blind spots. Enroute can now ingest OpenAPI spec and [help flag shadow APIs](https://thenewstack.io/shadow-apis-breaking-your-security-the-enroute-api-gateway-could-help/).

We see an opportunity in Security and Compliance. That is another big focus for us and we are actively building features for that.

## What does the future look like for _Enroute_ and web development in general? Can you see any particular trends?

Cloud adoption is accelerating and there is a need for cloud-agnostic multi-cloud solutions that just work. The ability to integrate with different clouds is a necessity. Enroute with it's API first approach is well-positioned for that.

We also see a clear trend in developer-driven self-serve use cases where a small team is responsible for driving operations for a multitude of services. These teams rely on automation. Developer tools that enable these trends will be key to attaining this agility. Again, we are excited Enroute was built with these goals in mind.

## What advice would you give to programmers getting into web development?

Web developers are the folks that try out the latest tech and set the trend for what comes next. Stay current, and have fun doing it!

## Who should I interview next?

A developer who just went from zero-to-production on their first project.

## Any last remarks?

Thank you for this opportunity.

## Conclusion

Thanks for the interview, Chintan! Enroute sounds like an excellent solution for anyone dealing with APIs and orchestrating their usage.

Backend development has changed a lot during the past decades, and I agree with your assessment that we'll get even more done with less in the future as this type of work becomes automated.

You can [find Enroute on GitHub](https://github.com/saarasio/enroute) and [get news about it on Twitter](https://twitter.com/SaarasInc).
