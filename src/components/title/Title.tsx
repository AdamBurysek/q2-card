import { motion } from "framer-motion";

const Title = () => (
  <div className="grid-item">
    <motion.h1
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -30, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      Mekong Delta Tour,{" "}
      <motion.b
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Vietnam
      </motion.b>
    </motion.h1>
  </div>
);

export default Title;
