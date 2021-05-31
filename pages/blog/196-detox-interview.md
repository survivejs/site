---
title: "Detox - Testing React Native - Interview with Mykola Solopii"
date: 2020-08-06
headerImage: "assets/img/detox.jpg"
headerAuthor: "congerdesign"
headerSource: https://pixabay.com/photos/water-drink-detox-detox-water-1487304/
keywords: ["interview", "testing", "react", "react native"]
---

Testing mobile applications is a tough topic as you have to worry about different devices, and the interaction model is challenging.

[Detox](https://github.com/wix/Detox) is a solution built specifically for React Native, and in this interview we'll learn more about the approach from a QA automation engineer, Mykola Solopii.

## Can you tell a bit about yourself?

![Mykola Solopii|100|100|author](assets/img/mykola.jpg)

I am a senior test automation engineer at [Career Karma](https://careerkarma.com/) with plenty of experience testing different types of applications.

## How would you describe _Detox_ to someone who has never heard of it?

Detox is an open-source end-to-end (e2e) automation library for mobile apps, for both iOS and Android.

## How does _Detox_ work?

In our case, Detox runs the Career Karma mobile app and manipulates it like a real user (tap, type text, scroll, etc.).

When Detox runs your tests, two processes start in parallel:

1. It runs your app (simulator or real device)
2. It runs your test suite on the Node environment and allows sending native commands to your application over WebSocket protocol

With such an approach, you can run your tests smoothly, and Detox will build your application and interact like a real user.

T> Emanuel Surino's article [End-to-end testing in React Native with Detox](https://blog.logrocket.com/end-to-end-testing-in-react-native-with-detox/) shows what a Detox session looks like in practice.

## What do _Detox_ tests look like?

To give you a better idea of what testing with Detox looks like, consider a test from our codebase:

```javascript
import { OnboardingFlowScreens } from "../screens/OnboardingFlowScreens";
import { CommunityScreen } from "../screens/CommunityScreen";
import { SignInScreen } from "../screens/SignInScreen";

const onboardingScreen = new OnboardingFlowScreens();
const signInScreen = new SignInScreen();
const communityScreen = new CommunityScreen();

describe("Sign in flow", () => {
  beforeAll(async () => {
    await device.launchApp({
      // Grant permissions in advance, because it's impossible
      // to dismiss permission modals in runtime
      permissions: {
        notifications: "YES",
        photos: "YES",
        camera: "YES",
        medialibrary: "YES",
      },
    });
  });

  it("User should be able to Sign in", async () => {
    await detoxHelper.waitForElementToBeVisible(
      onboardingScreen.signInButton
    );
    await onboardingScreen.signInButton.tap();
    await waitFor(signInScreen.emailField)
      .toBeVisible()
      .withTimeout(5000);
    await signInScreen.emailField.replaceText(email);
    await waitFor(signInScreen.passwordField)
      .toBeVisible()
      .withTimeout(5000);
    await signInScreen.passwordField.typeText(password);
    await signInScreen.submitButton.tap();
    await waitFor(communityScreen.communityHeaderText)
      .toBeVisible()
      .withTimeout(5000);
    await expect(
      communityScreen.communityHeaderText
    ).toBeVisible();
  });
});
```

## How does _Detox_ differ from other solutions?

The crucial difference is that Detox is the grey box automation tool. It means that Detox can automatically synchronize the test execution with your app. Detox understands when the asynchronous operation is completed within your app. After that, Detox continues executing your test. You get the ability to run your tests faster, and they are more stable.

## Why do you use _Detox_?

It's a piece of cake to use Detox. Usually, mobile automation is intricate, and it's a brand new technology compared to the web. There are not so many mobile automation tools that can manipulate mobile apps efficiently.

Our application is built on React Native and Detox knows how to deal with such technology better than its closest competitors (e.g. Appium) because it was designed specifically for this technology. Detox is like [Protractor](https://github.com/angular/protractor) in the mobile automation world, aiming specifically for React Native applications and much more.

## What does the future look like for _Detox_ and web development in general? Can you see any particular trends?

In my subjective opinion, Detox's future depends on the popularity of React Native. If more and more people start using React Native for developing a mobile app - more [QA automation engineers](https://careerkarma.com/careers/quality-assurance-engineer) will be using Detox for e2e testing.

It is an open source library supported by Wix, which can ensure Detox growth in the future. If we are speaking about some trends in web development - you never know as web development is changing rapidly.

Literally, 10-15 years ago, people could not imagine the opportunities we have now. So, it is tough to predict the future of web development. I hope it will make developers and users happier!

## What advice would you give to programmers getting into web development?

Find compelling motivation! Begin tinkering with websites and apps. If you have an eye for detail, you can even explore [starting out as a manual QA tester](https://careerkarma.com/blog/manual-to-automation-tester/).

## Conclusion

Thanks for the interview, Mykola! I've met Rotem Mizrachi Meidan, the creator of the tool personally, and he was [presenting at the first React Finland about Detox](https://www.youtube.com/watch?v=iCmqaMrrZMA).

T> You can [find Detox on GitHub](https://github.com/wix/Detox).
