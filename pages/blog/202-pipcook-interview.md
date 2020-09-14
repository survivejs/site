---
title: "Pipcook - Bridging JavaScript with Python for machine learning - Interview with Wenhe Li"
date: 2020-09-14
headerImage: "assets/img/server.jpg"
keywords: ["interview", "machine-learning"]
---

There's a lot of excitement about machine learning and its applications. The question is, what can you do with and where to apply the technique and how.

To learn more, I am interviewing Wenhe (Eric) Li, the creator of [Pipcook](https://github.com/alibaba/pipcook).

## Can you tell a bit about yourself?

Hi folks, this is Wenhe (Eric) Li, and I am currently an SDE at Alibaba Inc. My works involve combining front-end development, front-end developer, and artificial intelligence (AI). One of my tasks here is developing Pipcook, an open-sourced machine learning (ML), and deep learning (DL) framework designed for front-end developers.

## How would you describe _Pipcook_ to someone who has never heard of it?

_Pipcook_ is a tool that helps you develop, train, and deploy an ML/DL model without much prior knowledge. The whole workflow is highly abstract without losing scalability.

It lets you use popular Python-based machine learning solutions, such as [NumPy](https://numpy.org/), [scipy-learn](https://scikit-learn.org/), [jieba](https://github.com/fxsjy/jieba), and [TensorFlow](https://www.tensorflow.org/), easily through its interface.

## How does _Pipcook_ work?

### Pipcook wraps Python using BOA

Since this framework is front-end and Node.js developer-oriented, and most DL/ML libraries have been written using Python, we created BOA to bridge the languages.

BOA allows us to directly **import** and **call** Python modules and methods in JavaScript. In this way, we can utilize the DL/ML ecosystem in Python without worrying about learning a new language.

### Pipcook leverages the concept of pipelines

We introduce a concept of **pipeline** which contains `dataCollect`, `dataProcess`, `dataAccess`, `datasetProcess`, `modelDefine`, `modelTrain`, and `modelEva`. Pipelines offer an abstraction over a typical DL/ML model lifecycle.

_Pipcook_ developers, including the community, offer the most common implementation of these parts (we call them **plugins**). People who want to train their model can use an existing pipeline or _combine_ **plugins** to make their pipeline just like playing with legos.

## How does _Pipcook_ differ from other solutions?

### _Pipcook_ lets you use both JavaScript and Python

Since _Pipcook_ allows you to write Dl/ML models in JavaScript with Python modules, we can benefit from the great libraries and packages in the two ecosystems.

It's incredible as you can decide to put some IO-oriented jobs to Node.js and put more DL/ML training-related work under Python. Doing this allows you to get the most out of both.

### _Pipcook_ uses pipelines and plugins

_Pipcook_ introduces **pipeline** and **plugins** to the DL/ML workflow. Doing this decouples the complexity of developing ML/DL models and makes the plugins highly shareable.

### _Pipcook_ uses state-of-art techiques

Since _Pipcook_ is an experimental project, we can use state-of-the-art techniques and languages to develop our project. That means using Rust, WASM, WASI, WebGPU, and more.

## Why did you develop _Pipcook_?

I love JavaScript and its magical syntax. However, I have to use Python to develop DL/ML models due to the abundant Python modules and ecosystem. _Pipcook_ gives me a new way to establish DL/ML models in JavaScript without losing the Python ecosystem.

So far, we've seen a clear tendency that AI comes into every corner of the world. And in the field of front-end, we still do not have an industrial level framework. Most DL/ML frameworks are still serving people who have related knowledge.

We want to deliver such a framework that could be widely used by the JavaScript (Node.js and browser) world without worrying about the complex theory behind models. We believe this is the right way of passing the value of AI to the world.

## What next?

We just formally released our _Pipcook_ a couple of months ago. This very first public release offers users an out-of-the-box feature of training a model for _image classification_, _style transfer_, and _text analysis_ without much prior knowledge.

Therefore, for the current stage, we are working for the user experience and developer experience. We are trying to optimize the training efficiency and mitigate the learning curve of developing a plugin.

Apart from that, we are building an **all-in-one** toolkit, which includes _viewing training log_, _inspecting, and visualizing model structure_, and _model pruning and compression_.

## What does the future look like for _Pipcook_ and web development in general? Can you see any particular trends?

In the future, ML/DL must have a stronger binding with the web in general. Distributed training, federal learning, and on-device inference will fourish in the web since all of them match the essence of the internet.

Quoted from Tim Berners-Lee, "Let's redistribute power to individuals!" We are trying to build a paradigm that ML/DL could serve and be open to everyone with web development ability and JavaScript and Python ecosystems.

## What advice would you give to programmers getting into web development?

The web is essentially a community based on the idea of sharing, connecting, and open-source. Thus, try to connect, join, and work with the open-source community you are using or find interesting!

## Who should I interview next?

You could interview developers who have made their very first open-source contributions.

## Any last remarks?

Thanks for the interview and this chance to share my journey along with _Pipcook_.

## Conclusion

Thanks, Wenhe! I find it admirable what you are doing with _Pipcook_. I believe it can work as a bridge for JavaScript developers to the world of machine learning without having to delve deep into Python-based solutions.

T> To learn more, see [Pipcook site](https://alibaba.github.io/pipcook/) and [Pipcook on Github](https://github.com/alibaba/pipcook).
