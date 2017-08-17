import React from "react";

import { GitterChat, Feedback, Navigation } from "@survivejs/components";
import { Footer, Search } from "../components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

const navigationPages = sectionName => [
  {
    title: "Home",
    url: "/"
  },
  {
    title: sectionName === "blog" ? "Read the webpack book" : "Read the blog",
    url: sectionName === "blog" ? "/webpack/foreword/" : "/blog/"
  },
  {
    title: "Get training",
    url: "/training/"
  },
  {
    title: "Buy the ebook",
    url:
      sectionName === "webpack"
        ? "https://leanpub.com/survivejs-webpack"
        : "https://leanpub.com/survivejs-react"
  },
  {
    title: "",
    url: ""
  },
  {
    title: "@survivejs",
    url: "https://twitter.com/survivejs"
  }
];

const SiteBody = ({ children, section, location: { pathname } }) =>
  <div>
    {children}

    {pathname !== "/" && <Navigation pages={navigationPages(section.name)} />}
    {pathname !== "/" && <Feedback sectionName={section.name} />}

    <Footer section={section} />

    <GitterChat sectionName={section.name} />

    {pathname !== "/" && <Search sectionName={section.name} />}
  </div>;

export default SiteBody;
