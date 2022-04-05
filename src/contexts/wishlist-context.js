import { createContext, useContext, useReducer, useEffect, useState } from "react"
import { wishlistReducer } from "../reducers/wishlist-reducer"
import { getWishlist } from "../services/index"
import { useAuth } from "./index"

const WishlistContext = createContext([])

const WishlistProvider = ({ children }) => {
    const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, [])

    const { userState: { authToken } } = useAuth()

    useEffect(() => {
        if (authToken) {
            getWishlist(authToken, dispatchWishlist)
        }
    }, [authToken])

    const isProductInWishlist = (wishlist, product) => {
        return wishlist.some((item) => item._id === product._id);
    }
    return <WishlistContext.Provider value={{ wishlist, dispatchWishlist, isProductInWishlist }}>{children}</WishlistContext.Provider>
}

const useWishlist = () => useContext(WishlistContext)
export { useWishlist, WishlistProvider }