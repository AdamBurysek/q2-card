import Links from "./Links";
import Price from "./Price";

import "./top.css";

const Top = () => (
  <div className="grid-item top-container">
    <Price />
    <img src="./vietnam-main-image.png" className="main-image" />
    <Links />
  </div>
);

export default Top;
