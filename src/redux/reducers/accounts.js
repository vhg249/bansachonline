import { ACCOUNT_ACTION } from "../../pages/constant/account";

export const defaultState = {
  token: "",
  isLogin: false,
  profile: null,
};

const account = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION.UPDATE_TOKEN:
      const { token } = action.payload;
      return { ...state, token };
    case ACCOUNT_ACTION.LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case ACCOUNT_ACTION.LOGOUT_SUCCESS:
      return { ...state, isLogin: false };
    case ACCOUNT_ACTION.UPDATE_PROFILE:
      const { profile } = action.payload;
      return { ...state, profile };
    default:
      return state;
  }
};
export default account;
