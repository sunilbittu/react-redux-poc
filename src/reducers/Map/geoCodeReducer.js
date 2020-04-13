import * as mapTypes from '../../actions/Map';

let initialState = {
	storedGeoCodes: {}
};
export default function(state = initialState, sagaRes) {
	switch (sagaRes.type) {
		case mapTypes.GET_GEO_CODES_SUCCESS:
			const geoCodesRes = sagaRes.data;
			return Object.assign({}, state, { storedGeoCodes: { ...geoCodesRes } });
		case mapTypes.GET_GEO_CODES_ERROR:
			return { ...state, geoCodesRes };
		default:
			return state;
	}
}
