import React from "react";
import { Link } from "@survivejs/components";

const Navigation = ({ pages, pathname }) => (
  <div className="nav__wrapper">
    <input type="checkbox" className="nav__toggle" id="nav__toggle" />
    <label className="nav__toggle-label" htmlFor="nav__toggle" />
    <nav className="nav">
      {pages.map(
        (link, i) =>
          link.url === pathname ? (
            <div key={`link-${i}`} className="nav__selected__link">
              {link.title}
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
