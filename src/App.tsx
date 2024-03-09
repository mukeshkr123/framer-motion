import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.button
        className="bg-black px-3 py-2 rounded-md"
        animate={{
          scaleX: 2,
          scaleY: 2,
          y: "50%",
        }}
        transition={{
          delay: 2,
          // ease: "easeInOut",
          // repeat: 4,
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: "reverse",
          ease: "easeIn",
          // type: "spring",
          // bounce: 40,
          // damping: 10,
          // mass: 3,
          // stiffness: 30,
          // velocity: 100,
          scaleX: {
            delay: 2,
            repeatDelay: 2,
            repeat: Infinity,
            ease: "easeIn",
          },
        }}
      >
        Hello world
      </motion.button>
    </div>
  );
}
