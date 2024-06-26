import { MotionConfig, motion } from "framer-motion";

export const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      {/* Motion Config will apply the configration to all the motion tags in it, you can override it by reconfigure the tag in it */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeIn",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
          style={{
            background: "rgb(86, 1, 245)",
            color: "white",
            fontSize: "1.8rem",
            border: "none",
            cursor: "pointer",
            borderRadius: 9,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "2.5deg",
          }}
          style={{
            background: "black",
            color: "white",
            fontSize: "1.8rem",
            border: "none",
            cursor: "pointer",
            borderRadius: 9,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};
