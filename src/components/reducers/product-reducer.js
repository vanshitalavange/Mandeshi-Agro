export const productsReducer = (state, action) => {
    switch (action.type) {
        case "LOW_TO_HIGH": return { ...state, lowToHigh: action.payload, highToLow: false }
        case "HIGH_TO_LOW": return { ...state, highToLow: action.payload, lowToHigh: false }
        case "RATING": return { ...state, rating: action.payload }
        case "CATEGORY": {
            if (state.categoryState[action.payload] === true) {
                const finalCategory = state.productsInCategory.filter(category => category !== action.payload);
                return { ...state, categoryState: { ...state.categoryState, [action.payload]: state.categoryState[action.payload] ? false : true }, productsInCategory: finalCategory }
            } else {
                const finalCategory = [...state.productsInCategory, action.payload]
                return { ...state, categoryState: { ...state.categoryState, [action.payload]: state.categoryState[action.payload] ? false : true }, productsInCategory: finalCategory }
            }
        }
        case "PRICE_RANGE": return { ...state, priceRange: action.payload }
        case "CLEAR_ALL": return {
            priceRange: 1575,
            lowToHigh: false,
            highToLow: false,
            rating: "",
            categoryState: {
                organicFruits: false, organicVegetables: false, organicSpices: false, organicGroceries: false, organicDairy: false, organicOils: false
            },
            productsInCategory: []
        }
        default: return state
    }
}