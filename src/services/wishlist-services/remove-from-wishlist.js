import axios from "axios"
export const removeFromWishlist = async (encodedToken, productId, dispatchWishlist) => {
    try {
        const { data } = await axios.delete(`/api/user/wishlist/${productId}`, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: data.wishlist })
    } catch (error) {
        console.log(error)
    }
}