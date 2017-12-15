import React from "react";
import { Link } from "@survivejs/components";

const PrevNext = ({
  next,
  nextText,
  previous,
  previousText,
  getTitle = () => {},
}) => {
  if (!(next || previous)) {
    return null;
  }

  return (
    <div className="new-prevnext">
      {previous ? (
        <div className="new-prevnext__prev">
          <div className="new-prevnext__title">{previousText}</div>
          <Link className="new-prevnext__link" to={previous.url}>
            {getTitle(previous)}
          </Link>
        </div>
      ) : null}
      {next ? (
        <div className="new-prevnext__next">
          <div className="new-prevnext__title">{nextText}</div>
          <Link className="new-prevnext__link" to={next.url}>
            {getTitle(next)}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default PrevNext;
