import React from "react";

const Teaser = ({ pages }) =>
  pages.length > 1
    ? <MultiplePages pages={pages} />
    : <SinglePage page={pages[0]} />;

const MultiplePages = ({ pages }) =>
  <ul className="blog-teasers">
    {pages.map((page, i) => {
      return (
        <li key={"post" + i}>
          <SinglePage page={page} />
        </li>
      );
    })}
  </ul>;

const SinglePage = ({ page }) =>
  page &&
  <a className="blog-teaser" href={page.url}>
    {page.file.title}
  </a>;

export default Teaser;
