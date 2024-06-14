import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // this will setup if the animation will be played every time animation in view on only one time so what every
    once: false,
  });

  useEffect(() => {
    console.log("Is in view -->", isInView);
  }, [isInView]);

  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      />

      <motion.div
        style={{
          height: "100vh",
          background: "black",
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      />

      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "red" : "blue",
          transition: "3s background",
        }}
      />
    </>
  );
};
