import React, { Fragment } from "react";

import { GitterChat } from "@survivejs/components";
import { Footer, Navigation, Search } from "../components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

const navigationPages = [
  {
    title: "GraphQL Finland",
    url: "https://graphql-finland.fi/",
  },
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Read the blog",
    url: "/blog/",
  },
  {
    title: "Maintenance book",
    url: "/maintenance/",
  },
  {
    title: "React book",
    url: "/react/",
  },
  {
    title: "Webpack book",
    url: "/webpack/",
  },
  {
    title: "Hire me",
    url: "/training/",
  },
  {
    title: "@survivejs",
    url: "https://twitter.com/survivejs",
  },
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <Fragment>
    <Navigation pages={navigationPages} pathname={pathname} />

    {children}

    <Footer section={section} pathname={pathname} />

    <GitterChat sectionName={section.name} />

    {pathname !== "/" && <Search sectionName={section.name} />}
  </Fragment>
);

export default SiteBody;
