---
title: 'controllerim - MobX Inspired State Management for React - Interview with Nir Yosef'
date: 2017-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/360068ba2957d08c88e7b98b6fc81888?s=200" alt="Nir Yosef" class="author" width="100" height="100" />
</span>

My name is Nir, and I am a front end developer at Wix.com, with over two years of experience in React and Mobx, and now gaining some experience with ReactNative and android.
</p>

## How would you describe *controllerim* to someone who has never heard of it?

Controllerim is a state management library. It gives you the ability to create logic controllers for you React components, and makes your components automatically reactive to any change in the controllers. All of this is done with almost zero boilerplate.

## How does *controllerim* work?

Controllerim uses Mobx Observables behind the scenes, so all the optimizations of MobX in term of performance are also relevant for Controllerim.

## How does *controllerim* differ from other solutions (like Redux and MobX)?

Controllerim brings back the idea of the well know Controller, the C of MVC, and abandon the singleton Stores concept that Redux (using Flux terminology) gave birth to.


## Why did you develop *controllerim*?

When i first came across React, i almost immediately came across Redux. Its seems like Redux was the only way to do React. Everyone was talking about it, so I decided to give it a try.

After reading some tutorials i was quite amazed by it’s complexity. All the different terms (thunk, reducers, selectors, mapdispatchtoprops etc) wasn’t so clear to me and It seems like a huge amount of boilerplate. Something just felt wrong. It seems like a strange way to implement the good old MVC.

I think this article by André Staltz says it all : https://staltz.com/nothing-new-in-react-and-flux-except-one-thing.html.

After some playing around with dummy project, trying to crack this Redux thing, I came across Mobx, and dumped Redux for good.

Mobx was much clearer and straightforward.

I used mobx for over a year with my team, and it was pretty good, but some problems imitedly raised up:

1. Mobx observables are not plain js objects. they are full of other junk, and we soon started to insert mobx.toJs() conversions all over the place.
2. Mobx doesn’t tell you how to structure your code, so we took the concept of singletons stores from Redux. Very soon we started to wonder how should we pass the stores around, how we should test components? should we mock all the stores? who needs to clean the stores when a component enters the screen? we tried to use mobx.inject and mobx.provide but it dosen't played well with our tests.

So Mobx wasn’t perfect after all. At this point, I again started to wonder what happens to the good old MVC, Why things are getting so much more complicated in the web? And then I decided to write down all the pain points of our current architecture:

1. We have to get rid of the toJS thing. I want everything to be plain js object.
2. We have to get rid of the singletons stores, and we must bind the stores life cycle to the components' life cycle.
3. We must find a way to share data from one store to another, but I wanted to make it strict- it will be only possible to fetch data from stores that are higher in the hierarchy chain of the app, while AppStore will be the root.
4. Everything *MUST* be testable.

After writing it down, I found out that I don’t have a Store anymore. I have a Controller. the good old Controller. I knew I was on the right track. The API was just written itself down. I just needed to figure  out the way to make it happen, and it wasn’t so hard.

The final result was Controllerim. If you wonder about the name- I tried to name it “Controllers”  but it was already taken. I tried React-controllers but it was also taken. In Hebrew, the ‘im’ suffix is the plural suffix for the word controller, so I just named it Controllerim:)

## So how does controllerim look?

Lets say we have `App` component as the root of our web app, and that we have `Child` component deeply nested in the app.

Every data that we will put on the AppController, will be available to all other components in the app for as long as the app is alive, so lets create an `AppController` and put some aplication data on it:

```javascript
class AppController extends Controller {
  constructor(componentInstance) {
    super(componentInstance);
    this.state = { userName: 'bob' };
  }
  getUserName() {
    return this.state.userName;
  }

  setUserName(name) {
    this.state.userName = name;
  }
}

```

So a controller is just an es6 class that extends Controller and has some state and getters and setters methods.

Now lets connect the controller to the `App` component:

```javascript
class App extends React.Component {
  componentWillMount() {
    this.controller = new AppController(this);
  }

  render(){
    return (
      <div>
        <h1>Welcome {this.controller.getUserName()}!</h1>
        <compA/>
        <compB/>
      </div>
    );
  }
}

export default observer(app);
```

Easy right? We just need to init the controller in componentWillMount and we need to make sure that we wrap the component with `observer`, and thats it! every change in the controller will be reflected by the view.

Now, lets say that `Child` is some deeply nested component, and that it should allow us to preview and edit the userName when we click on a save button:

Lets start with creating `ChildController`:

```javascript
class ChildController extends Controller {
  constructor(componentInstance) {
    super(componentInstance);
    this.state = { input: '' };
  }

  getInput() {
    return this.state.input;
  }
  setInput(value) {
    this.state.input = value;
  }

  saveInput() {
    this.getParentController('AppController').setUserName(this.state.input);
  }
}
```

The only new thing here is the call to getParentController(). Controllerim allows you to get any Parent controller, not only a direct parent, so we just save the userName, and because everything is reactive this change will be reflected in all the views that make use of userName prop from App.
Lets finish by creating `Child`:

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
          onChange={(e) => this.controller.setInput(e.target.value)} />
        <button onClick={() => this.controller.saveInput()}>Save</button>
      </div>
    );
  }
}
```

And thats it! Simple isn't it?

## What do people think about Controllerim?

It depends. The ones that are Already familiar with Mobx are very supportive. The Redux people are more suspicious. They are immediately start to recycle arguments they heard about Mobx, so I think it would be nice to tackle down the two most frequently recycled arguments once and for all:

* *It’s magic, and we don’t like magic*: Controllerim is **NOT** magic. Controllerim works just like React native components’ state- when you touch a setter on the controller, Controllerm triggers a force update of your component. So where does Mobx enter the picture? Controllerim utilises Mobx to make better updates decisions. Thanks to Mobx, Instead of re-rendering on every setter, Controllerim will trigger a re-render only when really needed.
* *But what if you need some data to be accessed from everywhere?  You have to use singletons*: No, you don’t. If you need some data to be available for all the components in your app, than this data is application data, just put it in your AppController (The root controller of your app) and it will be available to  all other components for as long as your app lives.
* *It looks just like React’s state, so why not just using it*: Controllerim looks like React’s native state by design. The problem with the native state is that it’s hard to share between different components and it’s awkward to test. Controllerim solves those problems and it even gives you a more comfortable way to manipulate the state:
instead of `this.setState({some: {nested:{prop: true }}})`, you can just write `this.state.some.nested.prop = true`.

## What next?

Use Controllerim all over the place to make it battle tested:)

## What does the future look like for *controllerim* and web development in general? Can you see any particular trends?

I think that Controllerim has the potential to be the best Redux alternative out there.
In general, I think that React is here to stay, and the next giant step will be in the field of css.

## What advice would you give to programmers getting into web development?

If something isn't feels right, don’t be fooled by it’s popularity.

## Who should I interview next?

Someone from the CSS community. this field in the web development really need a little push.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Nir!
