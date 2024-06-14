import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { OnScroll } from "../animations/OnScroll";
import { BFM } from "../animations/BasicFramerMotion";
import { Gestures } from "../animations/Gestures";
import { AnimationControl } from "../animations/AnimationControls";
import { ViewBasedAnimations } from "../animations/ViewBasedAnimations";
import { ScrollAnimations } from "../animations/ScrollAnimations";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnScroll />} />
      <Route path="/bfm" element={<BFM />} />
      <Route path="/gestures" element={<Gestures />} />
      <Route path="/animation-control" element={<AnimationControl />} />
      <Route path="/view-based-animation" element={<ViewBasedAnimations />} />
      <Route path="/progress-bar" element={<ScrollAnimations />} />
    </>,
  ),
);

export default router;
