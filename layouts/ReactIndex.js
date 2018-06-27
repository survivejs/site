import React from "react";
import LatestPost from "../components/LatestPost";
import {
  Landing,
  Container,
  Column,
  WideColumn,
  Heading,
} from "../components/Landing";

const ReactIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <div className="front-name">
          <span className="first">Survive</span>
          <span className="second">JS</span>
          <span className="first"> — React</span>
        </div>

        <h1 className="front-header">From apprentice to master</h1>

        <div className="front-button-wrapper">
          <span className="read-free">
            <a href="/react/introduction/">Read for free</a>
          </span>

          <span className="buy-or">or</span>

          <a
            className="btn btn--buy-main"
            href="https://leanpub.com/survivejs-react"
          >
            Become a React master
          </a>
        </div>
      </div>
    </div>

    <Landing>
      <LatestPost section={section} />
      <Container>
        <WideColumn>
          <Heading>SurviveJS - React</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react.md").body,
            }}
          />
          <h3>Getting the Book</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/react.md").body,
            }}
          />
        </WideColumn>
        <Column>
          <Heading>About the Author</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
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
          <Heading>Translations</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/translations.md").body,
            }}
          />
        </Column>
      </Container>
    </Landing>
  </div>
);

export default ReactIndex;
