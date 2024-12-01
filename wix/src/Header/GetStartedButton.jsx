// src/components/GetStartedButton.jsx
import { motion } from "framer-motion";

const GetStartedButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-14 py-5 rounded-full relative radial-gradient" // Increased padding
    >
      <span className="text-neutral-100 tracking-wide font-light text-2xl h-full w-full block relative linear-mask">
        Get Started
      </span>
      <span className="block absolute inset-0 rounded-full p-px linear-overlay" />
    </motion.button>
  );
};

export default GetStartedButton;
