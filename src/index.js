import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NavbarProvider, ProductProvider } from "./contexts/index"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
