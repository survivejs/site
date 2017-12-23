import React from "react";
import styled from "react-emotion";
import theme from "../styles/theme";

const HorizontalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-left: -${theme.space.m};
  margin-right: -${theme.space.m};
`;

export default HorizontalList;
