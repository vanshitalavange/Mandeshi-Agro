import axios from "axios"
import { getProducts } from "../product-services/get-products-service"
export const addToWishlist = async (encodedToken, productId, dispatchWishlist) => {
    const getProductsAPIResponse = await getProducts();
    const product = getProductsAPIResponse.find(product => product._id === productId)
    try {
        const { data } = await axios.post('/api/user/wishlist', { product }, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatchWishlist({ type: "ADD_TO_WISHLIST", payload: data.wishlist })
    } catch (error) {
        console.error(error)
    }
}