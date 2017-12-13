import React from "react";

const Buy = () => {
  return (
    <div>
      <BuyMaintenance />
      <BuyReact />
      <BuyWebpack />
    </div>
  );
};

const BuyMaintenance = () => (
  <div className="buy-container">
    <a href="/maintenance/introduction">
      <img
        alt="Maintenance book cover"
        className="sidebar-cover"
        src={require("assets/img/maintenance_title_page_small.png")}
        width="255"
        height="329"
      />
    </a>

    <div className="buy-buttons">
      <a
        className="btn btn--normal btn--buy"
        href="https://leanpub.com/survivejs-maintenance"
      >
        Buy at Leanpub
      </a>
    </div>
  </div>
);

const BuyReact = () => (
  <div className="buy-container">
    <a href="/react/introduction">
      <img
        alt="React book cover"
        className="sidebar-cover"
        src={require("assets/img/react_title_page_small.png")}
        width="255"
        height="329"
      />
    </a>

    <div className="buy-buttons">
      <a
        className="btn btn--normal btn--buy"
        href="https://leanpub.com/survivejs-react"
      >
        Buy at Leanpub
      </a>
    </div>
  </div>
);

const BuyWebpack = () => (
  <div className="buy-container">
    <a href="/webpack/foreword">
      <img
        alt="Webpack book cover"
        className="sidebar-cover"
        src={require("assets/img/webpack_title_page_small.png")}
        width="255"
        height="329"
      />
    </a>

    <div className="buy-buttons">
      <a
        className="btn btn--normal btn--buy"
        href="https://leanpub.com/survivejs-webpack"
      >
        Buy at Leanpub
      </a>
      <a
        className="btn btn--normal btn--buy"
        href="https://www.amazon.com/dp/9526868803/"
      >
        Buy at Amazon
      </a>
      <a
        className="btn btn--normal btn--buy"
        href="https://www.amazon.com/dp/B06XWZZGBS"
      >
        Buy for Kindle
      </a>
    </div>
  </div>
);

export default Buy;
