import * as types from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log("Saving user details", JSON.stringify(action));
      const response = action.data;
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}