import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';

import * as types from '../actions';
import { countryMapSaga, stateMapSaga, cityMapSaga, areaMapSaga, addressMapSaga, geoCodesSaga } from './Map/MapSaga';
import * as mapTypes from '../actions/Map';

export default function* watchUserAuthentication() {
 // yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(mapTypes.GET_COUNTRY, countryMapSaga);
	yield takeLatest(mapTypes.GET_STATE, stateMapSaga);
	yield takeLatest(mapTypes.GET_CITY, cityMapSaga);
	yield takeLatest(mapTypes.GET_ADDRESS, addressMapSaga);
	yield takeLatest(mapTypes.GET_AREA, areaMapSaga);
	yield takeLatest(mapTypes.GET_GEO_CODES, geoCodesSaga);
}