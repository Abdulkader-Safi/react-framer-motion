import "./App.css";
import { ViewBasedAnimations } from "./animations/ViewBasedAnimations";
// import { AnimationControl } from "./animations/AnimationControls";
// import { Gestures } from "./animations/Gestures";
// import { OnScroll } from "./animations/OnScroll";
// import { BFM } from "./animations/BasicFramerMotion";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <OnScroll /> */}
      {/* <BFM /> */}
      {/* <Gestures /> */}
      {/* <AnimationControl /> */}
      <ViewBasedAnimations />
    </div>
  );
}

export default App;
