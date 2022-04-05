import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { useAuth } from "./index";
import { getCart, removeFromCart, updateProductQuantity } from "../services/index";
const CartContext = createContext({})
const CartProvider = ({ children }) => {

    const { userState: { authToken } } = useAuth()
    const [cart, dispatchCart] = useReducer(cartReducer, [])
    const [cartTotal, setCartTotal] = useState({
        itemTotal: 0,
        discountTotal: 0,
        totalPrice: 0,
    });

    const isProductInCart = (cart, product) => {
        return cart.some(item => item._id === product._id)
    }
    useEffect(() => {
        if (authToken) {
            getCart(authToken, dispatchCart)
        }
    }, [authToken])

    const updateProductQuantityHandler = (authToken, productId, actionType, productQty) => {
        if (productQty <= 1 && actionType === "decrement") {
            removeFromCart(authToken, productId, dispatchCart);
        } else {
            updateProductQuantity(authToken, productId, actionType, dispatchCart);
        }
    };

    const deliveryCharge = 40;
    const calculateTotalPrice = (cart) => {
        return cart.reduce((acc, item) => item.qty * Number(item.price) + acc, 0);
    };
    const calculateTotalDiscountPrice = (cart) => {
        return cart.reduce((acc, item) => item.qty * Number(item.discount) + acc, 0);
    };
    useEffect(() => {
        const itemTotal = calculateTotalPrice(cart);
        const discountTotal = calculateTotalDiscountPrice(cart);
        const totalPrice = itemTotal + deliveryCharge - discountTotal;
        setCartTotal({ itemTotal, discountTotal, totalPrice });

    }, [cart]);

    return <CartContext.Provider value={{ cart, dispatchCart, isProductInCart, cartTotal, setCartTotal, deliveryCharge, updateProductQuantityHandler }}>{children}</CartContext.Provider>
}
const useCart = () => useContext(CartContext)
export { useCart, CartProvider }