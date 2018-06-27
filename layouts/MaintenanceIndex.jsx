import React from "react";
import LatestPost from "../components/LatestPost";
import {
  Landing,
  Container,
  Column,
  WideColumn,
  Heading,
} from "../components/Landing";

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
      <Container>
        <WideColumn>
          <Heading>SurviveJS — Maintenance</Heading>
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
        </WideColumn>
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
          <Heading>Getting the Books</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/gettingbooks.md").body,
            }}
          />
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
