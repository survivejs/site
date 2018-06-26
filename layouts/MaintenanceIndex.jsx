import React from "react";
import styled from "react-emotion";
import LatestPost from "../components/LatestPost";
import theme from "../styles/theme";

const Landing = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.space.m};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme.space.m} ${theme.space.m};
  padding: 0;
  list-style: none;
`;

const Column = styled.section`
  flex: 1;
  min-width: 400px;
  margin: 0 0 ${theme.space.m};
  padding: 0 ${theme.space.m};
`;

const Books = Container.withComponent("ul");

const Book = Column.withComponent("li");

const Heading = styled.h2`
  margin: 0 0 ${theme.space.m};
`;

const MaintenanceIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <div className="front-name">
          <span className="first">Survive</span>
          <span className="second">JS</span>
          <span className="first"> — Maintenance</span>
        </div>

        <h1 className="front-header">Streamline JavaScript Workflow</h1>

        <div className="front-button-wrapper">
          <span className="read-free">
            <a href="/maintenance/preface/">Read for free</a>
          </span>

          <span className="buy-or">or</span>

          <a
            className="btn btn--buy-main"
            href="https://leanpub.com/survivejs-maintenance"
          >
            Improve Your JavaScript Projects
          </a>
        </div>
      </div>
    </div>

    <Landing>
      <LatestPost section={section} />
      <Books aria-label="Books">
        <Book>
          <Heading>SurviveJS - Maintenance</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance.md").body,
            }}
          />
          <h3>Getting the Book</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/maintenance.md").body,
            }}
          />
        </Book>
      </Books>
      <Container>
        <Column>
          <Heading>About the Authors</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
            }}
          />
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/artem.md").body,
            }}
          />
        </Column>
        <Column>
          <Heading>Getting the Books</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/gettingbooks.md").body,
            }}
          />
        </Column>
        <Column>
          <Heading>Training</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/training.md").body,
            }}
          />
        </Column>
      </Container>
    </Landing>
  </div>
);

export default MaintenanceIndex;
