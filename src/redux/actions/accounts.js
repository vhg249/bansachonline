import { ACCOUNT_ACTION } from "../../pages/constant/account";

export const updateToken = (params) => {
  return { type: ACCOUNT_ACTION.UPDATE_TOKEN, payload: params };
};
export const loginSuccess = () => {
  return { type: ACCOUNT_ACTION.LOGIN_SUCCESS };
};
export const logoutSuccess = () => {
  return { type: ACCOUNT_ACTION.LOGOUT_SUCCESS };
};
