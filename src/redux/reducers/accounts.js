import {ACCOUNT_ACTION} from "../../pages/constant/account";


export const defaultState = {
  token: "",
  isLogin: false
};

const account = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION.UPDATE_TOKEN:
      const { token } = action.payload;
      console.log(token)
      return { ...state, token };
    case ACCOUNT_ACTION.LOGIN_SUCCESS:
      return {...state, isLogin: true};
    case ACCOUNT_ACTION.LOGOUT_SUCCESS:
      return {...state, isLogin: false};
    default:
      return state;
  }
};
export default account;
