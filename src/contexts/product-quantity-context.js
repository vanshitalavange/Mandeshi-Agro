import { createContext, useContext, useState } from "react";
import { products } from "../backend/db/products";
const ProductQuantityContext = createContext(1);
const ProductQuantityProvider = ({ children }) => {
    const [updatedProducts, setUpdatedProducts] = useState([...products]);
    return <ProductQuantityContext.Provider value={{updatedProducts,setUpdatedProducts}}>
        {children}
    </ProductQuantityContext.Provider>
}
const useProductQuantity = () => useContext(ProductQuantityContext);
export { useProductQuantity, ProductQuantityProvider };
