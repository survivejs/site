import React from "react";
import { Disqus, PrevNextMini } from "@survivejs/components";
import Sidebar from "../components/Sidebar";

const Page = ({
  headerImage,
  headerExtra,
  title,
  sidebar,
  footer,
  previous,
  next,
  children,
}) => {
  return (
    <div className="page">
      {headerImage && (
        <div
          className="header-image"
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        />
      )}

      <h1 className="page__heading">{title}</h1>

      {headerExtra && (
        <div
          className="header-extra"
          dangerouslySetInnerHTML={{ __html: headerExtra }}
        />
      )}

      <div className="page__container">
        <Sidebar>{sidebar}</Sidebar>
        <div className="page__main">
          <div className="page__section">{children}</div>
          <div className="page__section">
            {footer}

            <div id="disqus_thread" />

            <Disqus shortname="survivejs" />
          </div>

          <PrevNextMini
            previous={previous}
            next={next}
            getTitle={page => page.file.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
