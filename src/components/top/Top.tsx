import Links from "./Links";
import Price from "./Price";

import "./top.css";

const Top = () => (
  <div className="grid-item top-container">
    <Price />
    <img src="./vietnam-main-image.png" className="main-image" />
    <Links />
    <a className="more-trips">
      <img src="./more-trips-arrow.svg" />
      <p>More Short Trips</p>
    </a>
  </div>
);

export default Top;
