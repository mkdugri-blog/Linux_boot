import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Simple routing for GitHub Pages
createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
