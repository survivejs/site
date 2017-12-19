import React from "react";
import styled, { css, cx } from "react-emotion";
import { Link as LinkBase } from "@survivejs/components";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.space.xl};
`;

const panel = css`
  flex-basis: 300px;
  flex-grow: 1;
`;
const panelPrev = css`
  padding-right: ${theme.space.m};
`;
const panelNext = css`
  padding-left: ${theme.space.m};
  text-align: right;
`;
const Panel = ({ prev, next, ...props }) => (
  <div
    className={cx(panel, {
      [panelPrev]: prev,
      [panelNext]: next,
    })}
    {...props}
  />
);

const Title = styled.div`
  margin-bottom: ${theme.space.xxs};
  font-weight: bold;
`;

const link = css`
  display: block;
  position: relative;
  &::before {
    font-family: ${theme.font.heading};
    position: absolute;
    margin-top: 0.15em;
  }
`;
const linkPrev = css`
  &::before {
    content: "←";
    left: -1.2em;
  }
`;
const linkNext = css`
  &::before {
    content: "→";
    right: -1.2em;
  }
`;
const Link = ({ prev, next, ...props }) => (
  <LinkBase
    className={cx(link, {
      [linkPrev]: prev,
      [linkNext]: next,
    })}
    {...props}
  />
);

const PrevNext = ({
  next,
  nextText,
  previous,
  previousText,
  getTitle = () => {},
}) => {
  if (!(next || previous)) {
    return null;
  }

  return (
    <Container>
      {!!previous && (
        <Panel prev>
          <Title>{previousText}</Title>
          <Link prev to={previous.url}>
            {getTitle(previous)}
          </Link>
        </Panel>
      )}
      {!!next && (
        <Panel next>
          <Title>{nextText}</Title>
          <Link next to={next.url}>
            {getTitle(next)}
          </Link>
        </Panel>
      )}
    </Container>
  );
};

export default PrevNext;
