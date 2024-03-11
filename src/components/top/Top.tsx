import Links from "./Links";
import Price from "./Price";
import { motion } from "framer-motion";

import "./top.css";

const Top = () => (
  <div className="grid-item top-container">
    <Price />
    <motion.img
      animate={{ opacity: 1, scaleX: 1 }}
      initial={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.5 }}
      src="./vietnam-main-image.png"
      className="main-image"
    />
    <Links />
  </div>
);

export default Top;
