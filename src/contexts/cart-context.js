import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { useAuth } from "./index";
const CartContext = createContext({})
const CartProvider = ({ children }) => {
    const { userState: { authToken } } = useAuth()
    const [cart, dispatchCart] = useReducer(cartReducer, [])
    useEffect(() => {
        if (authToken) {
            getCart(authToken)
        }
    }, [])

    return <CartContext.Provider value={{ cart, dispatchCart }}>{children}</CartContext.Provider>
}
const useCart = () => useContext(CartContext)
export { useCart, CartProvider }