import React from "react";
import { Teaser } from "@survivejs/components";

const Footer = ({ section }) => (
  <footer>
    <div className="footer-wrapper">
      <div className="footer-content-wrapper">
        <div className="footer-social">
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="https://twitter.com/survivejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                @survivejs
              </a>
            </li>
            <li>
              <a
                href="http://eepurl.com/bth1v5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mailing List
              </a>
            </li>
            <li>
              <a
                href="https://gitter.im/survivejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gitter Chat
              </a>
            </li>
            <li>
              <a
                href="https://github.com/survivejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://presentations.survivejs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Presentations
              </a>
            </li>
            <li>
              <a
                href="http://goo.gl/forms/OWdGIOdHm9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/survivejs/ama/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask Me Anything
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-blog">
          <h3>From the Blog</h3>

          <Teaser pages={section.pages("blog").slice(0, 7)} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
