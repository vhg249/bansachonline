import {ACCOUNT_ACTION} from "../../pages/constant/account";

export const updateToken = (params) => {
  return { type: ACCOUNT_ACTION.UPDATE_TOKEN, payload: params }
}