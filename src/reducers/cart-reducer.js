export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_ITEM_TO_CART":
        case "REMOVE_FROM_CART":
        case "GET_CART":
            return [...payload]
        default: return state
    }
}