import React from "react";
import { Link } from "@survivejs/components";
import PrevNextPageMini from "./PrevNextPageMini";

const Navigation = ({ page, pages, pathname }) => (
  <header className="nav__wrapper">
    <input type="checkbox" className="nav__toggle" id="nav__toggle" />
    <label className="nav__toggle-label" htmlFor="nav__toggle" />
    {page.previous && <PrevNextPageMini page={page.previous} type="previous" />}
    <nav className="nav">
      <ul className="nav__items">
        {pages.map(
          link =>
            pathname.startsWith(link.url) && link.url !== "/" ? (
              <li key={link.url} className="nav__link nav__link_selected">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ) : (
              <li key={link.url} className="nav__link">
                <Link to={link.url}>{link.title}</Link>
              </li>
            )
        )}
      </ul>
    </nav>
    {page.next && <PrevNextPageMini page={page.next} type="next" />}
  </header>
);

export default Navigation;
