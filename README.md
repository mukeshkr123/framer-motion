# THE ULTIMATE FRAMER MOTION GUIDE

## Framer component

```tsx
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Buttton = forwardRef((props, ref) => {
  return <button ref={ref}>...</button>;
});

const MotionButton = motion(Buttton);

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.button className="bg-black p-3">Hello world</motion.button>
    </div>
  );
}
```

## FIRST ANIMATION

```tsx
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
```

### Adding a form state to the animation

```tsx
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
```

## CHANGINH the default transition

```tsx
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
```
