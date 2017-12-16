import React from "react";
import styled from "react-emotion";
import { Link as LinkBase } from "@survivejs/components";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.space.xl};
`;

const Panel = styled.div`
  flex-basis: 300px;
  flex-grow: 1;
  /* padding-left: ${p => (p.next ? theme.space.m : undefined)}; */
  /* padding-right: ${p => (p.prev ? theme.space.m : undefined)}; */
  /* text-align: ${p => (p.prev ? "left" : "right")}; */
`;

const Title = styled.h4`
  margin-bottom: ${theme.space.xxs};
  font-weight: bold;
`;

const Link = styled(LinkBase)`
  display: block;
  position: relative;

  &::before {
    font-family: ${theme.font.heading};
    position: absolute;
    margin-top: 0.15em;
    /* content: "${p => (p.prev ? "←" : "→")}"; */
    /* left: ${p => (p.prev ? "-1.2em" : undefined)}; */
    /* right: ${p => (p.prev ? undefined : "-1.2em")}; */
  }
`;

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
