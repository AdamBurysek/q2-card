import { motion } from "framer-motion";

import "./price.css";

const Price = () => (
  <motion.div
    className="price-container"
    animate={{ x: 0, opacity: 1 }}
    initial={{ x: 20, opacity: 0 }}
    transition={{ duration: 1.5, delay: 1 }}
  >
    <p className="days">2 Days</p>
    <p className="price">$166 per person</p>
  </motion.div>
);

export default Price;
