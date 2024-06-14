import "./App.css";
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
      <OnScroll />
    </div>
  );
}

export default App;
