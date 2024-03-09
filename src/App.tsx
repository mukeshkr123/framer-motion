import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.button
        className="bg-black px-3 py-2 rounded-md"
        animate={{
          backgroundColor: "#f00",
          color: "#0f0",
          // transform: "scale(2) translateY(50px)",
          scale: 2,
          y: 50,
          rotate: 1800,
        }}
      >
        Hello world
      </motion.button>
    </div>
  );
}
