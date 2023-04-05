// Adding shop data to redux
import ShopActionTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})