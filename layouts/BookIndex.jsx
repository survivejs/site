import React from "react";
import { Link } from "@survivejs/components";

const BookIndex = ({ section }) =>
  <div className="grid">
    <h1>Table of Contents</h1>

    <ul className="post-list">
      {section
        .pages()
        .map(({ url, file: { attributes: { title }, preview } }, i) =>
          <li key={`post-list-item-${i}`}>
            <Link to={`${url}`}>
              <h3 className="post-list__heading">
                {title}
              </h3>

              <p className="post-list__preview">
                {preview}
              </p>
            </Link>
          </li>
        )}
    </ul>
  </div>;

export default BookIndex;
