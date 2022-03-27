import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../components/reducers/product-reducer";
import { products } from "../backend/db/products";
import { getProductsInPriceRange, getProductsWithAppliedRating, getProductsInCategory, getSortedProducts } from "../utilities/sorting-functions";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        priceRange: 1575,
        lowToHigh: false,
        highToLow: false,
        rating: "",
        categoryState: {
            organicFruits: false, organicVegetables: false, organicSpices: false, organicGroceries: false, organicDairy: false, organicOils: false
        },
        productsInCategory: []
    })
    const productsInPriceRange = getProductsInPriceRange([...products], state);
    const productsWithRating = getProductsWithAppliedRating(productsInPriceRange, state);
    const categorizedProducts = getProductsInCategory(productsWithRating, state);
    const filteredProducts = getSortedProducts(categorizedProducts, state);
    return <ProductContext.Provider value={{ state, dispatch, filteredProducts }}>{children}</ProductContext.Provider>
}
const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };