import styled from "react-emotion";
import theme from "../styles/theme";

export const Landing = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.space.m};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme.space.m} ${theme.space.m};
  padding: 0;
  list-style: none;
`;

export const Column = styled.section`
  flex: 1;
  min-width: 320px;
  margin: 0 0 ${theme.space.m};
  padding: 0 ${theme.space.m};
`;

export const WideColumn = styled(Column)`
  flex-grow: 2;
  min-width: ${theme.breakpoint.s};
  @media (max-width: ${theme.breakpoint.s}) {
    min-width: 0;
  }
`;

export const Books = Container.withComponent("ul");

export const Book = Column.withComponent("li");

export const Heading = styled.h2`
  margin: 0 0 ${theme.space.m};
`;
