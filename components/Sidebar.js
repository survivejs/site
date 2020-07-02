import React from "react";
import styled from "react-emotion";
import theme from "../styles/theme";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${theme.space.l};
  z-index: 100000;

  @media (min-width: ${theme.breakpoint.m}) {
    position: static;
    height: auto;
    z-index: 0;
  }
`;

const Body = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.space.l};
  background: ${theme.color.background};
  transform: translateY(100%);
  transition: transform ease-in 0.3s;
  will-change: transform;

  input[type="checkbox"]:checked + & {
    transform: translateY(0);
    transition: transform ${theme.transition.easing} 0.4s;
    overflow: auto;
  }

  @media (min-width: ${theme.breakpoint.m}) {
    position: static;
    max-width: 250px;
    height: 100%;
    transform: none;
    background: rgba(0, 0, 0, 0.01);
  }

  @media (min-width: ${theme.breakpoint.l}) {
    max-width: 350px;
  }
`;

const Toggle = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: ${theme.space.l};
  text-align: center;
  line-height: ${theme.space.l};
  color: ${theme.color.actionDark};
  background: ${theme.color.background};
  font-family: ${theme.font.small};
  font-size: ${theme.fontSize.epsilon};
  border: 0;
  z-index: 100001;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.05);

  @media (min-width: ${theme.breakpoint.m}) {
    display: none;
  }
`;

const Checkbox = styled.input`
  display: none;
`;

const Sidebar = ({ children }) => (
  <Container>
    <Toggle htmlFor="sidebar-toggle">
      Table of contents
    </Toggle>
    <Checkbox type="checkbox" id="sidebar-toggle" />
    <Body>
      <script
        async
        type="text/javascript"
        src="//cdn.carbonads.com/carbon.js?serve=CE7I5KQJ&placement=survivejscom"
        id="_carbonads_js"
      ></script>
      {children}
    </Body>
  </Container>
);

export default Sidebar;
