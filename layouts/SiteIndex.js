import React from "react";
import LatestPost from "../components/LatestPost";
import {
  Landing,
  Container,
  Column,
  Books,
  Book,
  Cover,
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
          <Heading>SurviveJS — Maintenance</Heading>
          <Cover
            src={require("../assets/img/covers/maintenance-cover.svg")}
            alt="Maintenance book cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance.md")
                .body,
            }}
          />
          <SubHeading>What Will You Learn</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance-learn.md")
                .body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/maintenance.md")
                .body,
            }}
          />
        </Book>
        <Book>
          <Heading>SurviveJS — React</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react.md")
                .body,
            }}
          />
          <Cover
            src={require("../assets/img/covers/react-cover.svg")}
            alt="React book cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react-learn.md")
                .body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/react.md")
                .body,
            }}
          />
        </Book>
        <Book>
          <Heading>SurviveJS — Webpack 5</Heading>
          <Cover
            src={require("../assets/img/covers/webpack-cover.svg")}
            alt="Webpack book cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/webpack.md")
                .body,
            }}
          />
          <SubHeading>What Will You Learn</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/webpack-learn.md")
                .body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/webpack.md")
                .body,
            }}
          />
        </Book>
      </Books>
      <Container>
        <Column>
          <Heading>About the Author</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md")
                .body,
            }}
          />
        </Column>
        <Column>
          <Heading>Getting the Books</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/gettingbooks.md")
                .body,
            }}
          />
        </Column>
        <Column>
          <Heading>Training</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/training.md")
                .body,
            }}
          />
          <Heading>Translations</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/translations.md")
                .body,
            }}
          />
        </Column>
      </Container>
      <Heading>Open Collective</Heading>
      <Container>
        <Column>
          Support this project with your organization. Your
          logo will show up here with a link to your
          website.
        </Column>
      </Container>
      <Container>
        <Column>
          <a href="https://opencollective.com/survivejs/organization/0/website">
            <img src="https://opencollective.com/survivejs/organization/0/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/1/website">
            <img src="https://opencollective.com/survivejs/organization/1/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/2/website">
            <img src="https://opencollective.com/survivejs/organization/2/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/3/website">
            <img src="https://opencollective.com/survivejs/organization/3/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/4/website">
            <img src="https://opencollective.com/survivejs/organization/4/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/5/website">
            <img src="https://opencollective.com/survivejs/organization/5/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/6/website">
            <img src="https://opencollective.com/survivejs/organization/6/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/7/website">
            <img src="https://opencollective.com/survivejs/organization/7/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/8/website">
            <img src="https://opencollective.com/survivejs/organization/8/avatar.svg" />
          </a>
          <a href="https://opencollective.com/survivejs/organization/9/website">
            <img src="https://opencollective.com/survivejs/organization/9/avatar.svg" />
          </a>
        </Column>
      </Container>
    </Landing>
  </div>
);

export default SiteIndex;
