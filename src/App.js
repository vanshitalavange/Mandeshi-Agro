import react from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Auth, Cart, Products, Wishlist } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
