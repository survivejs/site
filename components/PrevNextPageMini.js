import React from "react";
import styled from "react-emotion";
import { Link } from "@survivejs/components";
import theme from "../styles/theme";

const Button = styled(Link)`
  padding: ${theme.space.s};
  @media (max-width: ${theme.breakpoint.m}) {
    display: none;
  }
`;

const PrevNextPageMini = ({ page, type }) => (
  <Button to={page.url} title={page.file.title} aria-hidden="true">
    <i className={`icon-${type === "previous" ? "left" : "right"}-open`} />
  </Button>
);

export default PrevNextPageMini;
