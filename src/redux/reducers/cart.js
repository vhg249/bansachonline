import {CART_ACTION} from "../../pages/constant/cart";


export const defaultState = {
    checkoutResult: null
};

const cart = (state = defaultState, action) => {
    switch (action.type) {
        case CART_ACTION.UPDATE_CHECKOUT_RESULT:
            const { checkoutResult } = action.payload;
            return { ...state, checkoutResult };
        default:
            return state;
    }
};
export default cart;
