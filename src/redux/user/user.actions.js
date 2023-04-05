import { userActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    // type: 'SET_CURRENT_USER';

    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});