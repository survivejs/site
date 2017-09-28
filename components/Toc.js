import React from "react";
import { Link } from "@survivejs/components";

const Toc = ({ sectionPages, title }) => (
  <ul className="toc-nav">
    {sectionPages().map(({ file, url }, i) => (
      <li key={`navPage${i}`} className={`toc-${file.attributes.type}`}>
        {file.title === title ? (
          <span
            className={`toc-nav__link toc-nav__link--current ${file.attributes
              .type}`}
          >
            {file.title}
          </span>
        ) : (
          <Link to={url} className={`toc-nav__link ${file.attributes.type}`}>
            {file.title}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default Toc;
