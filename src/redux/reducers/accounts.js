import {ACCOUNT_ACTION} from "../../pages/constant/account";


export const defaultState = {
  token: "",
};

const account = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION.UPDATE_TOKEN:
      const { token } = action.payload;
      console.log(token)
      return { ...state, token };
    default:
      return state;
  }
};
export default account;
