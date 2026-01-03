import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Google Analytics 4
const GA_ID = "G-W90LRWHRN8";

if (GA_ID && typeof window !== "undefined") {
  // Load gtag.js
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gtagScript);

  // Init gtag
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(inlineScript);
}

// React render
createRoot(document.getElementById("root")!).render(<App />);
