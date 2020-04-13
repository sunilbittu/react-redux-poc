import { put } from 'redux-saga/effects';

import * as mapTypes from '../../actions/Map';

export function* countryMapSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_COUNTRY_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_COUNTRY_ERROR, error });
	}
}

export function* stateMapSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_STATE_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_STATE_ERROR, error });
	}
}

export function* cityMapSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_CITY_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_CITY_ERROR, error });
	}
}

export function* areaMapSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_AREA_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_AREA_ERROR, error });
	}
}

export function* addressMapSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_ADDRESS_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_ADDRESS_ERROR, error });
	}
}
export function* geoCodesSaga(payload) {
	try {
		yield put({
			type: mapTypes.GET_GEO_CODES_SUCCESS,
			data: payload
		});
	} catch (error) {
		yield put({ type: mapTypes.GET_GEO_CODES_ERROR, error });
	}
}