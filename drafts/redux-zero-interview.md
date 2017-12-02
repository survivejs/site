---
title: 'Redux Zero - Single Store, No Reducers - Interview with Matheus Lima'
date: 2017-12-04
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview', 'redux']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter, https://twitter.com/matheusml

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://avatars1.githubusercontent.com/u/444202?s=200&v=4" alt="Matheus Lima" class="author" width="100" height="100" />
  </span>
</p>

## How would you describe _Redux Zero_ to someone who has never heard of it?

Redux Zero is a library which offers a simple way to handle state in modern applications. It's lightweight, easy to learn and already works with React, React Native, Preact and Svelte. We have plans to add Angular and Vue.js bindings as well.

## How does _Redux Zero_ work?

It's very simple.

First, create a store. This is where your application state will live:

```javascript
import { createStore } from 'redux-zero';

const initialState = { count: 1 };
const store = createStore(initialState);

export default store;
```

Then, create some actions to change the state of your store:

```javascript
const actions = store => ({
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 }),
});
```

Since the actions are bound to the store, they are just pure functions.

Now create your component. With _Redux Zero_ your component can focus 100% on the UI and just call the actions to update the state:

```jsx
import React from 'react';
import { connect } from 'redux-zero/react';

import actions from './actions';

const mapToProps = ({ count }) => ({ count });

export default connect(mapToProps, actions)(
  ({ count, increment, decrement }) => (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
);
```

Last but not least, plug the whole thing in your index file:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'redux-zero/react';

import store from './store';

import Counter from './Counter';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
```

## How does _Redux Zero_ differ from other solutions?

_Redux_ is great, but in some cases, it's way too much. Maybe you don’t want to add all of that boilerplate to your project. Or maybe the learning curve is too steep and you just want something simpler to work with.

_Redux Zero_, on the other hand, is very simple. You don't have to learn about dispatchers and reducers (that's why the name is _Redux Zero_ - because there are zero reducers).

With _Redux Zero_ you just have a store and some actions.

## Why did you develop _Redux Zero_?

One of our developers here at [Concrete](https://concrete.com.br/), [Miguel Albernaz](https://twitter.com/miguel_albernaz), was using [this gist](https://gist.github.com/developit/55c48d294abab13a146eac236bae3219) as a state management solution instead of Redux. The project was going so well that I decided to extract the code, modify it a little bit and open source it to give back to the community.

What I did not expect was this huge success in less than a month.

## What next?

Right now we have three things in mind:

* Improve the documentation
* Add a middleware
* Add Angular and Vue.js bindings ([we need your help](https://github.com/concretesolutions/redux-zero/issues)).

## What does the future look like for _Redux Zero_ and web development in general? Can you see any particular trends?

This is a really hard question. Everything is moving so fast in web development that's really hard to make predictions. That said, I think that web components and state management tools are here to stay.

## What advice would you give to programmers getting into web development?

Study the basics. React and Angular are probably going to die, but JavaScript and CSS won't.

## Who should I interview next?

[Jason Miller](https://twitter.com/_developit)

## Any last remarks?

Try to be kind to open source maintainers. Most of them are not getting paid to develop the tools that you're using for free.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Matheus!

https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee
