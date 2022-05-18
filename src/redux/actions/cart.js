import {CART_ACTION} from "../../pages/constant/cart";

export const updateCheckout = (params) => {
  return { type: CART_ACTION.UPDATE_CHECKOUT_RESULT, payload: params }
}