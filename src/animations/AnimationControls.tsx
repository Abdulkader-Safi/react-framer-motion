import { motion, useAnimationControls } from "framer-motion";

export const AnimationControl = () => {
  const control = useAnimationControls();

  const handleClick = () => {
    // do something
    control.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button
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
        onClick={handleClick}
      >
        Flip it!
      </button>

      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
            backgroundColor: "red",
          },
        }}
        transition={{
          duration: 1.5,
          ease: "backInOut",
        }}
        initial="initial"
        animate={control}
      ></motion.div>
    </div>
  );
};
