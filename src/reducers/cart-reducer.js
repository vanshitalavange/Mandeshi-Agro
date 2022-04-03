export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_ITEM_TO_CART":
        case "REMOVE_ITEM_FROM_CART":
        case "GET_CART":
        case "UPDATE_CART":
            return [...payload]
        default: return state
    }
}