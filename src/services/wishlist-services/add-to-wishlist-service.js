import axios from "axios"
import { getProducts } from "../product-services/get-products-service"
export const addToWishlist = async (encodedToken, productId) => {
    const getProductsAPIResponse = await getProducts();
    const product = getProductsAPIResponse.find(product => product._id === productId)
    try {
        const { data } = await axios.post('/api/user/wishlist', { product }, {
            headers: {
                authorization: encodedToken
            }
        })
        return data.wishlist
    } catch (error) {
        console.error(error)
    }
}