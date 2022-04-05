import axios from "axios"
export const getCart = async (encodedToken, dispatchCart) => {
    try {
        const { data } = await axios.get('/api/user/cart', {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchCart({ type: "GET_CART", payload: data.cart })
    } catch (error) {
        console.error(error)
    }
}