import React from "react";
import styled from "react-emotion";
import { Teaser } from "@survivejs/components";
import Buy from "./Buy";
import HorizontalList from "./HorizontalList";
import HorizontalListItem from "./HorizontalListItem";

import theme from "../styles/theme";

const socialLinks = [
  {
    caption: "@survivejs",
    href: "https://twitter.com/survivejs",
  },
  {
    caption: "Mailing List",
    href: "https://buttondown.email/SurviveJS",
  },
  {
    caption: "Gitter Chat",
    href: "https://gitter.im/survivejs",
  },
  {
    caption: "GitHub",
    href: "https://github.com/survivejs",
  },
  {
    caption: "Presentations",
    href: "https://presentations.survivejs.com",
  },
  {
    caption: "Contact",
    href: "http://goo.gl/forms/OWdGIOdHm9",
  },
  {
    caption: "Ask Me Anything",
    href: "https://github.com/survivejs/ama/issues",
  },
  {
    caption: "RSS",
    href: "/atom.xml",
  },
];

const Container = styled.footer`
  padding: ${theme.space.l} ${theme.space.m};
  background: ${theme.color.backgroundLight};
  background-image: url("../assets/img/dust.png");
`;

const Section = styled.div`
  margin-bottom: ${theme.space.m};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: ${theme.space.m};
`;

const Links = styled(HorizontalList)`
  margin-bottom: ${theme.space.l};
`;

const LinkItemContainer = styled(HorizontalListItem)`
  margin-bottom: ${theme.space.m};
`;

const LinkItem = ({ href, children }) => (
  <LinkItemContainer>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </LinkItemContainer>
);

const Footer = ({ section, pathname }) => (
  <Container>
    <Links>
      {socialLinks.map(({ caption, href }) => (
        <LinkItem key={href} href={href}>
          {caption}
        </LinkItem>
      ))}
    </Links>
    {pathname !== "/blog/" && (
      <Section>
        <Heading>From the Blog</Heading>
        <Teaser pages={section.pages("blog").slice(0, 7)} />
      </Section>
    )}
    {pathname !== "/" && <Buy />}
  </Container>
);

export default Footer;
