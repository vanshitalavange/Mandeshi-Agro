export const wishlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_WISHLIST":
        case "ADD_TO_WISHLIST":
        case "REMOVE_FROM_WISHLIST":
            return [...payload]
        default: return state
    }
}