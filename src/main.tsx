import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Basic devtools deterrence in production only. Note: this is easily bypassed
// (disable JS, view-source, curl) — the real protections are RLS, input
// validation, and the AI spam classifier on the contact endpoint.
if (import.meta.env.PROD) {
  import("disable-devtool").then(({ default: DisableDevtool }) => {
    DisableDevtool({
      disableMenu: true,
      disableSelect: false,
      disableCopy: false,
      disableCut: false,
      disablePaste: false,
      clearLog: false,
      ondevtoolopen: (type, next) => {
        // Redirect away instead of freezing the tab
        window.location.replace("about:blank");
      },
    });
  });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
