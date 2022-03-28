import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../components/reducers/product-reducer";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [filterState, dispatchFilters] = useReducer(productsReducer, {
        priceRange: 1575,
        lowToHigh: false,
        highToLow: false,
        rating: "",
        categoryState: {
            organicFruits: false, organicVegetables: false, organicSpices: false, organicGroceries: false, organicDairy: false, organicOils: false
        },
        productsInCategory: []
    })
    return <ProductContext.Provider value={{ filterState, dispatchFilters }}>{children}</ProductContext.Provider>
}
const useFilters = () => useContext(ProductContext);
export { useFilters, ProductProvider };