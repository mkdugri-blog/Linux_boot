import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Configure router for GitHub Pages
const basePath = "/Linux_boot";

createRoot(document.getElementById("root")!).render(
  <Router base={basePath}>
    <App />
  </Router>
);
