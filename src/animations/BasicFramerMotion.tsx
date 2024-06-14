import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const BFM = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        style={{
          background: "rgb(86, 1, 245)",
          color: "white",
          fontSize: "1.8rem",
          border: "none",
          cursor: "pointer",
          borderRadius: 9,
          padding: 10,
        }}
        onClick={() => setIsVisible((prev) => !prev)}
        layout
      >
        Show / Hide
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              background: "red",
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              background: "blue",
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.3, 0.5, 0.95, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
