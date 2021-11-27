import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import { AuthProvider } from "./Contexts/AuthContext";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Web3ReactProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
