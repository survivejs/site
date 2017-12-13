import React from "react";
import { Link } from "@survivejs/components";

const Navigation = ({ pages, pathname }) =>
  console.log(pathname, pages) || (
    <div className="nav__wrapper">
      <input type="checkbox" className="nav__toggle" id="nav__toggle" />
      <label className="nav__toggle-label" htmlFor="nav__toggle" />
      <nav className="nav">
        {pages.map(
          (link, i) =>
            pathname.startsWith(link.url) && link.url !== "/" ? (
              <div key={`link-${i}`} className="nav__selected__link">
                <Link to={link.url}>{link.title}</Link>
              </div>
            ) : (
              <div key={`link-${i}`} className="nav__link">
                <Link to={link.url}>{link.title}</Link>
              </div>
            )
        )}
      </nav>
    </div>
  );

export default Navigation;
