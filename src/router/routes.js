import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup, Cart, Products, WishList } from "../pages/index";
import { useAuth } from "../contexts/index"
import Mockman from "../mockman";
export const Router = () => {
    const { userState: { loginStatus } } = useAuth()
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={loginStatus ? <Cart /> : <Navigate replace to="/login" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={loginStatus ? <WishList /> : <Navigate replace to="/login" />} />
        <Route path="/mockman" element={<Mockman />} />
    </Routes>
}