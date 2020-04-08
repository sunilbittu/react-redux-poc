import * as types from "../actions";
let initialState = {
  users : {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log("Saving user details", JSON.stringify(action));
      const response = action.data;
      // return { ...state, response };
      return Object.assign({}, state, { users: { ...action.data } })
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}