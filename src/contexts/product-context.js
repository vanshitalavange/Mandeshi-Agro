import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers/product-reducer";
const ProductContext = createContext();
const defaultFilters = {
    priceRange: 1575,
    lowToHigh: false,
    highToLow: false,
    rating: "",
    categoryState: {
        organicFruits: false, organicVegetables: false, organicSpices: false, organicGroceries: false, organicDairy: false, organicOils: false
    },
    productsInCategory: []
}
const ProductProvider = ({ children }) => {
    const [filterState, dispatchFilters] = useReducer(productsReducer,defaultFilters)
    return <ProductContext.Provider value={{ filterState, dispatchFilters }}>{children}</ProductContext.Provider>
}
const useFilters = () => useContext(ProductContext);
export { useFilters, ProductProvider,defaultFilters };