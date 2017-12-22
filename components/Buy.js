import styled, { css, cx } from "react-emotion";
import React from "react";
import HorizontalList from "./HorizontalList";
import HorizontalListItem from "./HorizontalListItem";
import theme from "../styles/theme";

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
  <a className={cx("btn", "btn--normal", button)} href={href}>
    {children}
  </a>
);

const Buy = () => {
  return (
    <HorizontalList>
      <BuyMaintenance />
      <BuyReact />
      <BuyWebpack />
    </HorizontalList>
  );
};

const BuyMaintenance = () => (
  <Book>
    <a href="/maintenance/introduction">
      <Cover
        alt="Maintenance book cover"
        src={require("assets/img/maintenance_title_page_small.png")}
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
      <Cover
        alt="React book cover"
        src={require("assets/img/react_title_page_small.png")}
        width="255"
        height="329"
      />
    </a>
    <Button href="https://leanpub.com/survivejs-react">Buy at Leanpub</Button>
  </Book>
);

const BuyWebpack = () => (
  <Book>
    <a href="/webpack/foreword">
      <Cover
        alt="Webpack book cover"
        src={require("assets/img/webpack_title_page_small.png")}
        width="255"
        height="329"
      />
    </a>
    <Button href="https://leanpub.com/survivejs-webpack">Buy at Leanpub</Button>
    <Button href="https://www.amazon.com/dp/9526868803/">Buy at Amazon</Button>
    <Button href="https://www.amazon.com/dp/B06XWZZGBS">Buy for Kindle</Button>
  </Book>
);

export default Buy;
