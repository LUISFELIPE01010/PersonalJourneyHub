import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { preloadCriticalImages } from "./utils/performance";

// Preload critical resources
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="personal-trainer-theme">
    <App />
  </ThemeProvider>
);
