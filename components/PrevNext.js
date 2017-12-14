import React from "react";
import styled from "react-emotion";
import { Link as LinkBase } from "@survivejs/components";
import t from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${t.space.xl};
`;

const Panel = styled("div")`
  flex-basis: 300px;
  flex-grow: 1;
  padding-left: ${p => (p.next ? t.space.m : undefined)};
  padding-right: ${p => (p.prev ? t.space.m : undefined)};
  text-align: ${p => (p.prev ? "left" : "right")};
`;

const Title = styled("h4")`
  margin-bottom: ${t.space.xxs};
  font-weight: bold;
`;

const Link = styled(LinkBase)`
  display: block;
  position: relative;

  &::before {
    font-family: ${t.font.heading};
    position: absolute;
    margin-top: 0.15em;
    content: "${p => (p.prev ? "←" : "→")}";
    left: ${p => (p.prev ? "-1.2em" : undefined)};
    right: ${p => (p.prev ? undefined : "-1.2em")};
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
