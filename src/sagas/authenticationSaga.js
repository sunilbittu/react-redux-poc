import { put, call } from "redux-saga/effects";
import { retriveLoginUser } from "../client/pages/services/LoginService";

import * as types from "../actions";

export function* loginSaga(payload) {
  console.log("Inside saga", payload);
  try {
    const response = yield call(retriveLoginUser, payload);
    console.log("API RESPONSE", response);
    const loginResponse = response;
    if (loginResponse["status"] === 200) {
      console.log("login res", loginResponse);
      yield put({
        type: types.LOGIN_USER_SUCCESS,
        data: loginResponse["data"]
      });
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}