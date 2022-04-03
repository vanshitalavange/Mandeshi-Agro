import axios from "axios"
import { getProducts } from "../product-services/get-products-service"
export const addToCart = async (encodedToken, _id) => {
    const allProducts = await getProducts()
    const product = allProducts.find(product => product._id === _id)
    try {
        const { data } = await axios.post('/api/user/cart', { product }, {
            headers: {
                authorization: encodedToken
            }
        })
        return data.cart
    } catch (error) {
        console.error(error)
    }
}