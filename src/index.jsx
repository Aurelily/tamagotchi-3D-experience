import "./style.css";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import Overlay from "./components/Overlay.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Overlay />
  </>
);
