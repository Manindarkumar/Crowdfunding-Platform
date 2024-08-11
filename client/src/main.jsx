import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  < ThirdwebProvider
    activeChain={Sepolia}
    clientId={import.meta.env.VITE_CLIENT_ID}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ ThirdwebProvider>
);
