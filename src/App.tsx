import "./App.css";
import { BFM } from "./animations/BasicFramerMotion";
import { OnScroll } from "./animations/OnScroll";

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
      <BFM />
    </div>
  );
}

export default App;
