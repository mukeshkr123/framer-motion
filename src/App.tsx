import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.button
        className="bg-black px-3 py-2 rounded-md"
        animate={{
          backgroundColor: "#f00",
        }}
        initial={{
          backgroundColor: "#00f",
        }}
      >
        Hello world
      </motion.button>
    </div>
  );
}
