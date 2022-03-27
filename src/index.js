import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NavbarProvider } from "./contexts/navbar-context";
import { ProductQuantityProvider } from "./contexts/product-quantity-context";
import { ProductProvider } from "./contexts/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <ProductProvider>
          <ProductQuantityProvider>
            <App />
          </ProductQuantityProvider>
        </ProductProvider>
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
