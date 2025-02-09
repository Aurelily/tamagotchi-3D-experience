import "./style.css";
import { createRoot } from "react-dom/client";


import Overlay from "./components/Overlay.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Overlay />
  </>
);
