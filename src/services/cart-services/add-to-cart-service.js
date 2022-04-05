import axios from "axios"
export const addToCart = async (encodedToken, product, dispatchCart) => {
    try {
        const { data } = await axios.post('/api/user/cart', { product }, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchCart({ type: "ADD_ITEM_TO_CART", payload: data.cart })
    } catch (error) {
        console.error(error)
    }
}