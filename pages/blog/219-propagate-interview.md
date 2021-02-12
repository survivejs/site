---
title: "PropagateAt - Talk to your greatest fans via text - Interview with Kumar Abhirup"
date: 2021-02-12
headerImage: "assets/img/telescope.jpg"
keywords: ["interview"]
---

Developing your products is both exciting and challenging. There's both the business side and the development side to worry about and to manage. Both have to be on a good enough level for the product to work.

In this interview, we'll learn about a product called [PropagateAt](https://propagate.at/) by [Kumar Abhirup](https://twitter.com/kumar_abhirup). It's the first product he has developed, so it's interesting to hear what he has to say about the product and the experience!

## Can you tell a bit about yourself?

![Kumar Abhirup|100|100|author](https://www.gravatar.com/avatar/792939b409d9f156b91bd8f8ee50ebcd?s=200)

Hi, I am Kumar. I am in 11th grade, coding since age 12, currently building PropagateAt, the Substack for SMS. You can find me online at the following places:

- GitHub: https://github.com/KumarAbhirup
- Website: https://kumarabhirup.me
- dev.to: https://dev.to/kumar_abhirup
- Medium: https://medium.com/@kumar_abhirup
- LinkedIn: https://linkedin.com/in/kumar-abhirup/

### How would you describe _PropagateAt_ to someone who has never heard of it?

I call it, the [Substack](https://substack.com/) for SMS. Substack is a writing platform oriented for independent writers and exclusive access to their content! PropagateAt is a similar tool, except it has been built around SMS. It allows creators to create paid texting communities, chat, send newsletters, and connect to their fans one-on-one using a US phone number.

A creator who wants to start his/her own paid Text Message newsletter first signs up with PropagateAt. The creator then gets a new personal US number they can advertise anywhere. For example, "Hey, text me here!". After this, the fans will text the number, and if the newsletter is free, they will be subscribed right away.

If the newsletter was a premium one, the fans get an auto payment link, and after the payment, they get subscribed to the newsletter at a monthly cost. These fans then get the privilege to chat via SMS with their favorite influencers! It works just like Substack, paid newsletters, but on SMS.

Whatever the creators earn, they keep 85% of it. They can connect their Stripe accounts and withdraw the money earned anytime!

## How does _PropagateAt_ differ from other solutions?

There are many companies building SMS solutions. Most of them are for corporates and companies to send unsolicited marketing spam or so. There are many MailChimp for SMS services out there already.

The closest (and you could say the biggest) competitor to us is [Community](https://www.community.com/). It has been made for really famous creators who are sending bulk text messages to their fans. But, Creators cannot use it like a paid blogging platform and cannot monetize their text newsletter effectively. Also, Community is very costly, so that medium-scale influencers mostly cannot afford it.

What makes PropagateAt different is its appeal to creators and influencers of all scales and giving them a platform and a billing infrastructure to help them earn money over SMS by sending premium content to their fans, on a monthly subscription basis, at a lower price.

## Why did you develop _PropagateAt_?

My mother had 10k subscribers on WhatsApp. To automate her tedious WhatsApp process, I tried to create a WhatsApp bulk newsletter service with Twilio. Then I realized that there are a ton of Facebook restrictions with it.

Do you know what does not have such restrictions? It's SMS! And it's barely touched by creator-friendly marketing companies. Also, creators and influencers earning their income over SMS content is a new thing and is a vastly uncovered idea market.

After I understood the potential of SMS marketing for creators, I decided to make PropagateAt!

## What next?

I am currently building and growing the product (MVP at the moment) by slowly giving users access to the dashboard and new features to ensure everything goes smooth.

We have an AppSumo launch scheduled, then will launch on [Product Hunt](https://www.producthunt.com/), and we'll also apply to [Y Combinator](https://www.ycombinator.com/). I am mostly over calls with influencers these days, and they love the idea, and I am slowly onboarding them over to PropagateAt.

## What does the future look like for _PropagateAt_ and web development in general? Can you see any particular trends?

For PropagateAt, there is a massive redesign coming, so yea, stay tuned, haha. When I started building the product back in 2020, I didn't make the architecture scalable. The target of the work is to improve this aspect over time.

In the upcoming years, web development will probably get easier with all these no-code tools coming up.

## What technical challenges did you encounter while developing _PropagateAt_?

I mean, a lot. While building the MVP for 7-8 months, I faced many issues. And I still do.

### Information security is hard

One biggest technical challenge for me was to keep everything secure, and I am not going to lie, I am not good at CyberSec.

### Server-side rendering is challenging

The second thing I am struggling with is making the current stack work with [Apollo GraphQL](https://www.apollographql.com/) server-side rendering (SSR). At the moment, all the queries are being made client-side, and I want it to be done on the server-side for better link previews, for example. I am using [Next.js](https://nextjs.org/), so it should be easy, right? But I guess there's something that's not right, and I am still trying to figure it out.

### Payments are complex

Currently, the service works on [Twilio](https://www.twilio.com/) internally. I am figuring out a way to streamline the money flow from clients to PropagateAt to Twilio Balance. Now the process is all manual so that when a client pays, I get a notification, and then I add a top-up in Twilio. I want to make it seamless where it automatically tops-up the Twilio Account balance when a new user pays, but I am still figuring out how to do that.

[Stripe](https://stripe.com/) regulations in India are complex. Stripe Express Connect Account does not work for Indian Merchants, and therefore we have to resort to a secondary Connect Account method. I am using Stripe Connected Accounts service to pay creators what they earn via PropagateAt.

It currently does not work well because to send money to creators your Stripe wallet needs to be filled. But for Indian Stripe Accounts, the money gets withdrawn to banks as soon as it comes, which means Stripe cannot be used as a wallet in India, making it harder for creators to get paid.

Currently, to solve this issue, we manually pay creators via PayPal. And later, to fix this issue, all we need is a Stripe Atlas incorporation.

## What advice would you give to programmers getting into web development?

Just build something! I am not great at coding, but when it comes to learning new things, I can hack and develop stuff my way, I can do it pretty well!

I used to be in a tutorial purgatory back in 2019, and I am glad I got out of it. I would recommend beginners to log on to [FreeCodeCamp](https://www.freecodecamp.org/), get their JavaScript course, try it out, and start building small projects! Your portfolio will be your first great start!

Your aim at the beginner stage should mainly be that, after 1-2 years, you could be able to build a working full-stack app. That will be a nice goal to have in the early stages. The ability to develop whatever you want is a great skill, and I would always choose it over anything else.

## Who should I interview next?

[Digvijay Singh Rathore](https://twitter.com/novadigvijay). He is multi-talented, better than me at everything.

## Any last remarks?

The questions were great! They really got me thinking!

## Conclusion

Thanks for the interview, Kumar! I find it admirable you built your product and found a growing market for it. I wish great success for your business!

T> To learn more about the product, [head to PropagateAt site](https://propagate.at).
