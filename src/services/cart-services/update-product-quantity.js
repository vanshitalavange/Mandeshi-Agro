import axios from "axios"
export const updateProductQuantity = async (encodedToken, productId, actionType, dispatchCart) => {
    try {
        const productAction = {
            action: {
                type: actionType
            }
        }
        const { data: { cart } } = await axios.post(`/api/user/cart/${productId}`, productAction, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchCart({ type: "UPDATE_CART", payload: cart })
    } catch (error) {
        console.log(error)
    }
}