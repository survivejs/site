import styled, { css, cx } from "react-emotion";
import React from "react";
import HorizontalList from "./HorizontalList";
import HorizontalListItem from "./HorizontalListItem";
import VisuallyHidden from "./VisuallyHidden";
import theme from "../styles/theme";

const Title = VisuallyHidden.withComponent("h4");

const Book = styled(HorizontalListItem)`
  margin-bottom: ${theme.space.l};
`;

const Cover = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: ${theme.space.m};
`;

const button = css`
  display: block;
  margin-bottom: ${theme.space.s};
  text-align: center;
`;

const Button = ({ href, children }) => (
  <a
    className={cx("btn", "btn--normal", button)}
    href={href}
  >
    {children}
  </a>
);

const Buy = () => {
  return (
    <HorizontalList aria-label="Other Juho's books">
      <BuyMaintenance />
      <BuyReact />
      <BuyWebpack />
    </HorizontalList>
  );
};

const BuyMaintenance = () => (
  <Book>
    <a href="/maintenance/introduction">
      <Title>
        SurviveJS - Maintenance: Streamline JavaScript
        Workflow
      </Title>
      <Cover
        alt="Maintenance book cover"
        src={require("assets/img/covers/maintenance-cover.svg")}
        width="255"
        height="329"
      />
    </a>
    <Button href="https://leanpub.com/survivejs-maintenance">
      Buy at Leanpub
    </Button>
  </Book>
);

const BuyReact = () => (
  <Book>
    <a href="/react/introduction">
      <Title>
        SurviveJS - React: From apprentice to master
      </Title>
      <Cover
        alt="React book cover"
        src={require("assets/img/covers/react-cover.svg")}
        width="255"
        height="329"
      />
    </a>
    <Button href="https://leanpub.com/survivejs-react">
      Buy at Leanpub
    </Button>
  </Book>
);

const BuyWebpack = () => (
  <Book>
    <a href="/webpack/foreword">
      <Title>
        SurviveJS - Webpack 5: From apprentice to master
      </Title>
      <Cover
        alt="Webpack book cover"
        src={require("assets/img/covers/webpack-cover.svg")}
        width="255"
        height="329"
      />
    </a>
    <Button href="https://leanpub.com/survivejs-webpack">
      Buy at Leanpub
    </Button>
    <Button href="https://www.amazon.com/dp/B08P2C69PR">
      Buy at Amazon
    </Button>
    <Button href="https://www.amazon.com/dp/B08P3S2G66">
      Buy for Kindle
    </Button>
  </Book>
);

export default Buy;
