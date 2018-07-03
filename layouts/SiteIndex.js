import React from "react";
import LatestPost from "../components/LatestPost";
import {
  Landing,
  Container,
  Column,
  Books,
  Book,
  Heading,
  SubHeading,
  PageTitle,
  PageTitleLogo,
  PageTitleSub,
} from "../components/Landing";

const SiteIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <PageTitle>
          <PageTitleLogo>
            Survive<strong>JS</strong>
          </PageTitleLogo>
          <PageTitleSub>Learn JavaScript</PageTitleSub>
        </PageTitle>

        <p className="front-motto">
          SurviveJS will take you from apprentice to master
        </p>
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
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/maintenance.md").body,
            }}
          />
        </Book>
        <Book>
          <Heading>SurviveJS - React</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react.md").body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/react.md").body,
            }}
          />
        </Book>
        <Book>
          <Heading>SurviveJS - Webpack</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/webpack.md").body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/webpack.md").body,
            }}
          />
        </Book>
      </Books>
      <Container>
        <Column>
          <Heading>About the Author</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
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

export default SiteIndex;
