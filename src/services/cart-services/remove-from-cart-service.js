import axios from "axios"
export const removeFromCart = async (encodedToken, productId, dispatchCart) => {
    try {
        const { data } = await axios.delete(`/api/user/cart/${productId}`, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchCart({ type: "REMOVE_ITEM_FROM_CART", payload: data.cart })
    } catch (error) {
        console.log(error)
    }
}