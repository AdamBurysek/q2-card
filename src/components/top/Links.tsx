import { FacebookIcon, ShareIcon, TwitterIcon } from "../../assets/icons";

import "./links.css";

const Links = () => (
  <div className="link-container">
    <a className="social-link facebook-link">
      <FacebookIcon />
      <p className="social-link-text">Facebook</p>
    </a>
    <a className="social-link twitter-link">
      <TwitterIcon />
      <p className="social-link-text">Twitter</p>
    </a>
    <a className="social-link share-link">
      <ShareIcon />
      <p className="social-link-text">Lorem Ipsum</p>
    </a>
  </div>
);

export default Links;
