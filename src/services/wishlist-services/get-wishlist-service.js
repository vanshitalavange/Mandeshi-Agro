import axios from "axios"
export const getWishlist = async (encodedToken, dispatchWishlist) => {
    try {
        const { data } = await axios.get('/api/user/wishlist', {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchWishlist({ type: "GET_WISHLIST", payload: data.wishlist })
    } catch (error) {
        console.log(error)
    }
}