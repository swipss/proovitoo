import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FilesProvider } from "./context/FilesContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilesProvider>
      <App />
    </FilesProvider>
  </React.StrictMode>
);
