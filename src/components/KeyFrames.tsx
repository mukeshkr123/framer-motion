import { motion } from "framer-motion";

export const KeyFrames = () => {
  return (
    <>
      <motion.div
        className="bg-gray-400 w-32 h-32"
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "0%", "0%"],
        }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 2,
        }}
      />
      <motion.div
        className="bg-gray-800 w-32 h-32"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "0%", "0%"],
        }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 2,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </>
  );
};
