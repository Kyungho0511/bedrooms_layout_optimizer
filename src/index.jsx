import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    shadows
    camera={{
      zoom: 70,
      near: 0.1,
      far: 100,
      position: [5, 5, 5],
    }}
    orthographic
  >
    <Experience />
  </Canvas>
);
