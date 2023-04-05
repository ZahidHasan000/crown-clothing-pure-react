// import SHOP_DATA from "./shop.data";

// Adding shop data to redux
import ShopActionTypes from "./shop.types";

// const INITIAL_STATE = {
//     collections: SHOP_DATA
// };

// withSpinner HOC (After deleteing shop.data.js in redux folder in shop folder)
const INITIAL_STATE = {
    collections: null
};

// Adding shop data to redux
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
};

// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// };

export default shopReducer;