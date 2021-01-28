---
title: "Uppy - Painless Uploads for JavaScript - Interview with Artur Paikin"
date: 2018-07-17
headerImage: "assets/img/upload.jpg"
keywords: ["interview", "javascript"]
---

Let's say you are building a CMS or a blog with an admin interface. It won't take long until you want to upload files to your service. There are standards for this, but eventually, you want to do something more complicated.

That's where solutions like Uppy by [Artur Paikin](https://twitter.com/arturi) and the team come in.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/c32ae87863e9a773986f65f5d369e551?s=200" alt="Artur Paikin" class="author" width="100" height="100" />
</span>

I am a software engineer and interface designer from Moscow, living in New York City for the past three years. I run a small dev and design studio “Baguette” and work together with [Transloadit](https://transloadit.com/) on [uppy.io](https://uppy.io), an open source JS file uploader.

</p>

I’m passionate about [DIY home automation](http://arturpaikin.com/en/home-automation-experiments/), traveling, [indie web](https://indieweb.org/) (RSS and standalone blogs forever!), alternative living spaces (camper vans, cabins, boats) and text adventure games ([80 Days](https://www.inklestudios.com/80days/), [Sorcery!](https://www.inklestudios.com/sorcery/) and [Secret of the Monkey Island](https://en.wikipedia.org/wiki/The_Secret_of_Monkey_Island) in particular).

## How would you describe _Uppy_ to someone who has never heard of it?

[Uppy](https://uppy.io) is a simple file uploading widget/library for the browser. It’s modular, easy to use and lets you worry about more significant problems than building a file uploader.

I sometimes get asked why the world even needs anything beyond `<input type="file">`, why bring JS into this. The truth is: for many cases `<input type="file">` is fine.

Sometimes, however, you’d like to add a nice drag and drop surface with file previews and upload progress. Webcam support might be excellent to have. Picking files from your Dropbox without downloading to your mobile phone first can save a lot of bandwidth and battery life.

For large files, resumability is also essential: like [surviving wifi hiccups](https://tus.io) or [accidental navigate aways](https://uppy.io/blog/2017/07/golden-retriever/), and not having to start the upload from scratch.

All those things can significantly improve the user experience when uploading is a central aspect of your web/app. And Uppy can be deployed with nothing but a JS tag, using an existing `<form>` for fallback, and your Apache/Nginx server.

![Uploading files](assets/img/uppy/upload.png)

## How does _Uppy_ work?

1. Add Uppy to your website or app: include simple `<script>` and `<style>` tags with a CDN batteries-included bundle, or pick and choose exactly the plugins you need from npm (and build yourself with, e.g., Webpack).
2. Your users select files by drag and dropping, taking pictures with a camera, pasting any URL, picking from Instagram, Google Drive, etc.
3. Uppy displays file previews, lets you rename or edit metadata.
4. Finally, files are uploaded to a backend of your choosing: Apache, Nginx, IIS, tus, Node, Rails, direct S3, etc.
5. Uppy is processing-backend-aware. So you can optionally do video encoding, image watermarking, face detection, etc., and report the progress back to the user. Since this last step requires heavy-duty servers, you’ll likely be paying some fee if you want this. Someone needs to write the backend glue and scale the servers whether it is Transloadit or Linode/Hetzner/EC2/and your dev team.

```html
// please replace `v0.26.0` with the latest version
<link
  href="https://transloadit.edgly.net/releases/uppy/v0.26.0/dist/uppy.min.css"
  rel="stylesheet"
/>

<div id="choose-files">
  <form action="/upload">
    <input type="file" />
  </form>
</div>

<script src="https://transloadit.edgly.net/releases/uppy/v0.26.0/dist/uppy.min.js"></script>

<script>
  const uppy = Uppy.Core();
  uppy.use(Uppy.Dashboard, {
    target: "#choose-files",
    inline: true,
    replaceTargetContent: true,
  });
  uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });
  uppy.use(Uppy.XHRUpload, {
    endpoint: "https://mywebsite.com/receive-file.php",
  });
</script>
```

T> Check out the [live version on CodePen](https://codepen.io/uppy/pen/mKrzrM) and [more examples](https://uppy.io/examples/dashboard/).

Everything is a plugin in Uppy. Start simple, add just what you need (or don’t): uploaders (”regular“, xhr, s3, tus), Redux integration, React components, progress bar, extracting values from the `<form>` element on a page. You name it — we’ve got a plugin for it (if not, send a PR or publish your own, we’ll happily link to it. ;-)

```js
const uppy = Uppy({
  restrictions: {
    maxNumberOfFiles: 3,
    minNumberOfFiles: 1,
    allowedFileTypes: [
      "image/*" /* Mimetype */,
      ,
      "video/*" /* Mimetype */,
    ],
  },
});
uppy.use(Form, {
  target: "#my-form",
  getMetaFromForm: true,
  addResultToForm: true,
});
uppy.use(ReduxDevTools);
uppy.use(AwsS3, {
  limit: 2,
  timeout: ms("1 minute"),
  serverUrl: "https://uppy-server.myapp.com/",
});
```

## How does _Uppy_ differ from other solutions?

Commercial offerings cost money and make it hard to switch. Uppy uses open standards and plugins can be written to interface with anything. We do offer a “hosted” option, but you can pack your things and move to your platform.

Besides commercial, here are a few great open source alternatives that come to mind:

- [Fine Uploader](https://fineuploader.com/) is a significant source of inspiration for us. It’s been around for a while and is a robust library with tons of features: drag-drop, file previews, validation, uploads to S3, etc.
- [Dropzone.js](http://dropzonejs.com/) — nice UI, a lot of configuration options.
- [react-dropzone](https://react-dropzone.js.org/) — similar to Dropzone, but React-specific.

How Uppy is different:

- Unlike most of the solutions above, Uppy has remote provider support (remote URLs, Instagram, Dropbox, etc.). Other services that do offer it are usually commercial, not open source and sometimes hard to customize.
- Webcam support.
- We took a different approach with the UI that we feel could be a good fit for existing websites and applications.
- Support as mentioned earlier for resumable file uploads via [tus](http://tus.io/) protocol and [Golden Retriever](https://uppy.io/docs/golden-retriever/) plugin that recovers uploads after browser crashes allow for a robust uploading experience.
- Uppy is aware of encoding backends, so you can quickly add file processing, such as video transcoding or image watermarking, when needed.
- Uppy supports React (or any other framework) and time traveling but does not require it. There are community offered Vue.js and Angular bindings, and we’re aiming to make those first-class citizens too.
- You can supply your plugins for encryption, modification, meta editing, etc.

![Dropping files](assets/img/uppy/drop-files.png)

## Why did you develop _Uppy_?

When I started working with Transloadit, we wanted to build a new file uploader for their file processing and encoding services. They already had a jQuery SDK and were looking to modernize it. Then, after some initial prototypes and thinking, we’ve decided that instead of working on a proprietary SDK, we would build an open solution for everybody to use and hack. Transloadit support became an optional plugin.

I wanted a file uploader that I could use with my static blog generator to import photos from, say, Instagram and remote URLs. I wanted it to be an open source standalone solution, so Uppy fits well.

## What next?

We are preparing Uppy for a 1.0 release: stabilizing APIs, polishing docs. We’ve just completed conversion to a Lerna repo — meaning that all plugins are published as individual npm packages, but kept in a single GitHub repo — this way it’s easier to add new features in one PR, maintain issues and build tools.

Besides that, we are working on some basic React Native support, we’d like to release an Uppy WordPress plugin, add image cropping, and more options for file restrictions — our to-do list is massive, but contributors help a lot!

## What does the future look like for _Uppy_ and web development in general? Can you see any particular trends?

- More developers and tools are becoming aware of bloat, working on reducing JS and CSS bundle sizes. React has recently gotten much more lightweight (Uppy uses excellent [Preact](https://preactjs.com/) internally because it’s even lighter), [Svelte](https://svelte.technology/) goes further and turns your templates into small, framework-less vanilla JS, which is very interesting. I try to utilize [bundlephobia](https://bundlephobia.com/), [import-cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) and [size-limit](https://github.com/ai/size-limit).
- Making things less complex for developers is a recent welcoming trend. [Browserify](http://browserify.org/) was relatively simple from the beginning, and [Webpack](https://webpack.js.org/) has simplified things by a lot lately (though I still spend a good chunk of my dev [time configuring it](https://mobile.twitter.com/feross/status/1017946412766539776), I do understand it’s a price of flexibility). I enjoyed [Parcel](https://parceljs.org/), I think I’d recommend it for new devs, because it’s just magical to run `parcel index.html` and see you app load in the browser with all the CSS/PostCSS/JS/Babel “just working”. Tools like `create-react-app` and `vue-cli` (which you can even optionally configure without “ejecting”) are excellent solutions to the “configuration fatigue” as well. I also really dig [Standard JS](https://standardjs.com/) — I use it and stay productive, instead of arguing about code styles.
- I think we’ll continue to see more PWAs and light websites replacing traditional mobile apps, where that makes sense.
- Accessibility issues are being brought up and addressed by more developers and framework authors. React docs now have a [neat section on this topic](https://reactjs.org/docs/accessibility.html). I’m betting on this work to continue, because, as [Sara Soueidan said](https://twitter.com/sarah_edo/status/846398983664734210): “The web is accessible by default. You should try not to break it”.
- I hope that regained interest in [indie web](https://indieweb.org/), publishing to your domain first, RSS and decentralized internet (different domains, but also [Dat](https://datproject.org/), [Beaker Browser](https://beakerbrowser.com/) and [IPFS](https://ipfs.io/) will stick and more people will see the benefit of not trusting all your digital life to a single third-party service. The web was all about the democratization of people and knowledge, and I feel these (and similar) technologies could help us keep those ideas alive.

## What advice would you give to programmers getting into web development?

Reading the previous SurviveJS interviews, this seems to come up a lot in our community: don’t get overwhelmed by new frameworks, libs, choices and build tools. I know it’s hard — I see a new CSS-in-JS solution I want to try every day on Twitter. :-)

In the long run, it’s more important to continue developing and publishing your work, than getting stuck mastering new tools. When you’d like to try a new idea, [try it the browser with a plain index.html or on CodePen](https://reactjs.org/docs/getting-started.html#try-react). Start simple and add things on top if needed.

Recently I’ve been seeing more developers who stick to plain CSS and JavaScript, without all the useful bloat we’ve added to it, and can’t help but long for that a little at times. So this is advice offered to me as much as the next person. :-)

## Who should I interview next?

- [Devine Lu Linvega](https://wiki.xxiivv.com/#home) who lives and travels on a sailboat, while developing open source tools and games— [Rotonde](https://louis.center/p2p-social-networking/), a decentralized social network, [Dotgrid](https://wiki.xxiivv.com/#dotgrid) a minimalist illustration tool featuring various line-types, line-styles and vector effects and [Paradise](https://wiki.xxiivv.com/#paradise), an interactive fiction novel game/playground.
- [Renée Kooi](https://renee.kooi.me/), my colleague who, besides Uppy, is working on some really cool stuff: tinyify (a Browserify plugin that runs various optimizations on JS bundles), [common-shakeify](https://github.com/browserify/common-shakeify) (Browserify tree shaking), bankai (a dev server/JS+CSS compiler) and [üWave](https://u-wave.net/), the federated collaborative listening platform.
- [Tara Vancil](https://taravancil.com/) and [Paul Frazee](https://pfrazee.hashbase.io) — they are doing rad cool stuff with P2P web and [Beaker Browser](https://beakerbrowser.com/).
- [Nolan Lawson](https://nolanlawson.com/), besides working on improving the Microsoft Edge browser, is a big proponent of progressive web applications, and has created [Pokedex](https://www.pokedex.org/) Pokemon database PWA with offline support and [Pinafore](https://pinafore.social) a PWA for Mastodon, a federated alternative to Twitter, using [Svelte](https://svelte.technology/) library that I mentioned above.

## Any last remarks?

I’d like to thank our team! It’s a joy to work on a fantastic open source project with unbelievably talented people: [Kevin](http://github.com/kvz) and [Tim](https://github.com/tim-kos), the founders of Transloadit, who inspired and sponsored the Uppy project:

- [Harry](https://github.com/hedgerh) who we worked with at the beginning of Uppy.
- [Renée](https://renee.kooi.me/), who — fun fact — I met via GitHub PRs and discussions, and who became an invaluable addition to the team.
- [Ife](https://github.com/ifedapoolarewaju) who maintains Uppy Companion, a server component that enables picking files from Instagram, Google Drive or remote URLs.
- [Alex](https://zaytsev.io/) who helps design our UI.
- [Marius](http://github.com/Acconut) who’s made our tech so robust (as the driving force behind [tus.io](https://tus.io).

## Conclusion

Thanks for the interview, Artur! It's great to see solutions that go beyond the standards.

To [learn more about Uppy, head to their homepage](https://uppy.io/), [check Uppy on GitHub](https://github.com/transloadit/uppy) as well.
