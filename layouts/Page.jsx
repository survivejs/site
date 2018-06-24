import React from "react";
import { Disqus } from "@survivejs/components";
import Sidebar from "../components/Sidebar";
import PageHeading from "../components/PageHeading";

const Page = ({
  headerImage,
  headerExtra,
  title,
  sidebar,
  footer,
  page,
  children,
}) => {
  return (
    <div className="page">
      <PageHeading image={headerImage} extra={headerExtra}>
        {title}
      </PageHeading>

      <div className="page__container">
        <Sidebar>{sidebar}</Sidebar>
        <div className="page__main">
          <div className="page__section">{children}</div>
          <div className="page__section">
            {footer}

            <div id="disqus_thread" />

            <Disqus shortname="survivejs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
