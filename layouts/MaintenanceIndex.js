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

const MaintenanceIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <PageTitle>
          <PageTitleLogo>
            Survive<strong>JS</strong> — Maintenance
          </PageTitleLogo>
          <PageTitleSub>Streamline JavaScript Workflow</PageTitleSub>
        </PageTitle>

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
          <VisuallyHidden>
            <Heading>About the book</Heading>
          </VisuallyHidden>
          <Cover
            src={require("../assets/img/covers/maintenance-cover.svg")}
            alt="Maintenance book cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance.md").body,
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
              __html: require("../content/gets/maintenance.md").body,
            }}
          />
        </WideColumn>
        <Column>
          <SubHeading>About the Authors</SubHeading>
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
        </Column>
      </Container>
    </Landing>
  </div>
);

export default MaintenanceIndex;
