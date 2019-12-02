import { LOGIN_SUCCESS, LOGIN_FAIL } from "../constant";

const initialState = {
  user: null,
  invalidInfo: false
};

const authReducer = (state = initialState, action) => {
  switch (action) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        invalidInfo: false
      };

    case LOGIN_FAIL:
      return {
        ...state,
        invalidInfo: true
      };
    default:
      return state;
  }
};

export default authReducer;
