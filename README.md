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
