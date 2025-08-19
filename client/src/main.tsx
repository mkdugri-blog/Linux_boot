import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Single page site - no routing needed
createRoot(document.getElementById("root")!).render(<App />);
