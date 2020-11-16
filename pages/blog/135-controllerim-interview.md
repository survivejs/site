---
title: "controllerim - MobX Inspired State Management for React - Interview with Nir Yosef"
date: 2017-12-27
headerImage: "assets/img/controller.jpg"
keywords: ["interview", "react", "state-management"]
---

When you are writing applications, eventually you have to decide how to manage state. You can get far with React `setState` and lift the state in the component hierarchy as you go. Eventually that might become cumbersome and you realize using a state manager might save time and effort. This is the reason why solutions like Redux, MobX, and Cerebral are popular in the community.

To provide another point of view, you will hear this time from Nir Yosef, the author of [controllerim](https://github.com/Niryo/controllerim). It's a solution that builds on top of MobX and has been designed testability in mind.

## Can you tell a bit about yourself?

My name is Nir, and I am a front-end developer at Wix.com, with over two years of experience in React and MobX, and now gaining some experience with React Native and Android.

## How would you describe _controllerim_ to someone who has never heard of it?

Controllerim is a state management library. It gives you the ability to create logic controllers for you React components, and makes your components automatically reactive to any change in the controllers. All of this is done with almost zero boilerplate.

## How does _controllerim_ work?

Controllerim uses MobX Observables behind the scenes, so all the optimizations of MobX in term of performance are also relevant for Controllerim.

## How does _controllerim_ differ from other solutions (like Redux and MobX)?

Controllerim brings back the idea of the well know Controller, the C of MVC, and abandon the singleton Stores concept that Redux (using Flux terminology) gave birth to.

## Why did you develop _controllerim_?

When I first came across React, I almost immediately came across Redux. Its seems like Redux was the only way to do React. Everyone was talking about it, so I decided to give it a try.

After reading some tutorials, I was quite amazed by its complexity. All the different terms (thunk, reducers, selectors, map dispatch to props, etc.) weren’t so clear to me, and it seems like a considerable amount of boilerplate. Something just felt wrong. It seems like a strange way to implement the good old MVC. I think [the article by André Staltz says it all](https://staltz.com/nothing-new-in-react-and-flux-except-one-thing.html).

After some playing around with dummy project, trying to crack this Redux thing, I came across MobX and dumped Redux for good.

MobX was much clearer and straightforward.

I used MobX for over a year with my team, and it was pretty good, but some problems immediately came up:

1. MobX Observables are not vanilla JavaScript objects. They are full of other junk, and we soon started to insert `mobx.toJs()` conversions all over the place.
2. MobX doesn’t tell you how to structure your code, so we took the concept of singletons stores from Redux. Very soon we started to wonder how we should pass the stores around, how we should test components? Should we mock all the stores? Who needs to clean the stores when a component enters the screen? We tried to use `mobx.inject` and `mobx.provide` but those didn't play well with our tests.

So MobX wasn’t perfect after all. At this point, I again started to wonder what happens to the good old MVC, Why things are getting so much more complicated on the web? And then I decided to write down all the pain points of our current architecture:

1. We have to get rid of the `toJS` thing. I want everything to be a plain JavaScript object.
2. We have to get rid of the singletons stores, and we must bind the stores life cycle to the components' life cycle.
3. We must find a way to share data from one store to another, but I wanted to make it strict- it will be only possible to fetch data from stores that are higher in the hierarchy chain of the app, while `AppStore` will be the root.
4. Everything **MUST** be testable.

After writing it down, I found out that I don’t have a Store anymore. I have a Controller. The good old Controller. I knew I was on the right track. The API was just written itself down. I just needed to figure out the way to make it happen, and it wasn’t so hard. The final result was Controllerim.

T> If you wonder about the name, I tried to name it “Controllers” but it was already taken. I tried React-controllers, but it was also taken. In Hebrew, the ‘im’ suffix is the plural suffix for the word controller, so I just named it Controllerim. :)

## So how does controllerim look?

Let's say we have `App` component as the root of our web app, and that we have `Child` component deeply nested in the app.

Every data that we will put on the AppController will be available to all other components in the app for as long as the app is alive, so let's create an `AppController` and put some application data on it:

```javascript
class AppController extends Controller {
  constructor(componentInstance) {
    super(componentInstance);

    this.state = { userName: "Bob" };
  }
  getUserName() {
    return this.state.userName;
  }

  setUserName(name) {
    this.state.userName = name;
  }
}
```

So a controller is just an ES2015 class that extends `Controller` and has some state and getters and setters methods.

Now let's connect the controller to the `App` component:

```javascript
class App extends React.Component {
  componentWillMount() {
    this.controller = new AppController(this);
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.controller.getUserName()}!</h1>
        <compA />
        <compB />
      </div>
    );
  }
}

export default observer(app);
```

Easy right? We just need to init the controller in `componentWillMount`, and we need to make sure that we wrap the component with `observer`, and that's it! Every change in the controller will be reflected by the view.

Now, let's say that `Child` is some deeply nested component and that it should allow us to preview and edit the `userName` when we click on a save button:

Let's start with creating `ChildController`:

```javascript
class ChildController extends Controller {
  constructor(componentInstance) {
    super(componentInstance);

    this.state = { input: "" };
  }

  getInput() {
    return this.state.input;
  }
  setInput(value) {
    this.state.input = value;
  }

  saveInput() {
    this.getParentController("AppController").setUserName(
      this.state.input
    );
  }
}
```

The only new thing here is the call to `getParentController()`. Controllerim allows you to get any `Parent` controller, not only a direct parent, so we just save the `userName`, and because everything is reactive, this change will be reflected in all the views that make use of `userName` prop from `App`. Let's finish by creating `Child`:

```javascript
class Child extends React.Component {
  componentWillMount() {
    this.controller = new ChildController(this);
  }

  render() {
    return (
      <div>
        <input
          value={this.controller.getInput()}
          onChange={(e) =>
            this.controller.setInput(e.target.value)
          }
        />
        <button onClick={() => this.controller.saveInput()}>
          Save
        </button>
      </div>
    );
  }
}
```

And that's it! Simple isn't it?

## What do people think about Controllerim?

It depends. The ones that are already familiar with MobX are very supportive. The Redux people are more suspicious and begin to recycle arguments they heard about MobX, so I think it would be nice to tackle down the two most frequently recycled arguments once and for all:

- _It’s magic, and we don’t like magic_: Controllerim is **NOT** magic. Controllerim works just like React native components’ state - when you touch a setter on the controller, Controllerim triggers a force update of your component. So where does MobX enter the picture? Controllerim utilizes MobX to make better updates decisions. Thanks to MobX, Instead of re-rendering on every setter, Controllerim will trigger a re-render only when needed.
- _But what if you need some data to be accessed from everywhere? You have to use singletons_: No, you don’t. If you need some data to be available for all the components in your app, then this data is application data, just put it in your AppController (The root controller of your app), and it will be available to all other components for as long as your app lives.
- _It looks just like React’s state, so why not just using it_: Controllerim looks like React’s native state by design. The problem with the native state is that it’s hard to share between different components and it’s awkward to test. Controllerim solves those problems, and it even gives you a more comfortable way to manipulate the state: instead of `this.setState({some: {nested:{prop: true }}})`, you can just write `this.state.some.nested.prop = true`.

## What next?

Use Controllerim all over the place to make it battle tested. :)

## What does the future look like for _controllerim_ and web development in general? Can you see any particular trends?

I think that Controllerim has the potential to be the best Redux alternative out there. In general, I think that React is here to stay, and the next giant step will be in the field of CSS.

## What advice would you give to programmers getting into web development?

If something doesn't feel right, don’t be fooled by its popularity.

## Who should I interview next?

You should interview someone from the CSS community. This field in the web development needs a little push.

## Conclusion

Thanks for the interview Nir! Controllerim looks like a great abstraction over MobX and I hope people find it. The code feels almost amazingly simple.

[Learn more about Controllerim on GitHub](https://github.com/Niryo/controllerim).
