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
  min-width: 100%;
  @media (min-width: ${theme.breakpoint.s}) {
    min-width: ${theme.breakpoint.s};
  }
`;

export const Books = Container.withComponent("ul");

export const Book = Column.withComponent("li");

export const Cover = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.space.m};
  @media (min-width: ${theme.breakpoint.s}) {
    float: left;
    width: 40%;
    margin-right: ${theme.space.m};
  }
`;

export const Heading = styled.h2`
  margin: 0 0 ${theme.space.m};
`;

export const SubHeading = styled.h3`
  margin: 0 0 ${theme.space.m};
`;

export const PageTitle = styled.h1`
  margin: 0;
  line-height: 1.2;
`;

export const PageTitleLogo = styled.div`
  margin-bottom: calc(0.2rem + 0.5vh + 1vw);
  text-transform: uppercase;
  font-family: ${theme.font.heading};
  font-size: calc(0.8rem + 0.1vh + 0.5vw);
  font-weight: ${theme.fontWeight.fat};
  color: ${theme.color.inverted};

  & strong {
    color: ${theme.color.actionDark};
  }
`;

export const PageTitleSub = styled.div`
  color: ${theme.color.actionDark};
  font-size: calc(1.2rem + 0.5vh + 1vw);
  font-weight: ${theme.fontWeight.normal};
`;
