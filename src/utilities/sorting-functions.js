
const getProductsInPriceRange = (productList, state) => {
    const { priceRange } = state;
    console.log(priceRange);
    return productList.filter(product => Number(product.price) <= priceRange)

}
const getProductsWithAppliedRating = (productList, state) => {
    const { rating } = state;
    return rating === "" ? productList : productList.filter(product => product.rating >= rating);
}
const getProductsInCategory = (productList, state) => {
    const { productsInCategory } = state;
    return productsInCategory.length === 0 ? productList : productList.filter(product => productsInCategory.includes(product.category));
}
const getSortedProducts = (productList, state) => {
    const { lowToHigh, highToLow } = state;
    if (lowToHigh) {
        return productList.sort((a, b) => a.price - b.price)
    } else if (highToLow) {
        return productList.sort((a, b) => b.price - a.price)
    }
    return productList
}
export { getProductsInPriceRange, getProductsWithAppliedRating, getProductsInCategory, getSortedProducts };