import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // END: ed8c6549bwf9

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
