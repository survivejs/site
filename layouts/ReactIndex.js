import React from "react";
import LatestPost from "../components/LatestPost";
import VisuallyHidden from "../components/VisuallyHidden";
import {
  Landing,
  Container,
  Column,
  WideColumn,
  Cover,
  Heading,
  SubHeading,
  PageTitle,
  PageTitleLogo,
  PageTitleSub,
} from "../components/Landing";

const ReactIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <PageTitle>
          <PageTitleLogo>
            Survive<strong>JS</strong> — React
          </PageTitleLogo>
          <PageTitleSub>From apprentice to master</PageTitleSub>
        </PageTitle>

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
          <VisuallyHidden>
            <Heading>About the book</Heading>
          </VisuallyHidden>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react.md").body,
            }}
          />
          <Cover
            src={require("../assets/img/covers/react-cover.svg")}
            alt="React book cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react-learn.md").body,
            }}
          />
          <SubHeading>Getting the Book</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/react.md").body,
            }}
          />
        </WideColumn>
        <Column>
          <SubHeading>About the Author</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
            }}
          />
          <SubHeading>Getting the Books</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/gettingbooks.md").body,
            }}
          />
          <SubHeading>Training</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/training.md").body,
            }}
          />
          <SubHeading>Translations</SubHeading>
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
