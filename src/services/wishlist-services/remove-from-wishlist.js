import axios from "axios"
export const removeFromWishlist = async (encodedToken, productId) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${productId}`, {
            headers: {
                authorization: encodedToken
            }
        })
        return response.data.wishlist
    } catch (error) {
        console.log(error)
    }
}