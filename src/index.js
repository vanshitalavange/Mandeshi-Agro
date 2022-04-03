import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, NavbarProvider, ProductProvider, WishlistProvider } from "./contexts/index"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavbarProvider>
          <ProductProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </ProductProvider>
        </NavbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
