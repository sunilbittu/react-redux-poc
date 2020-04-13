import * as mapTypes from '../../actions/Map';
let initialState = {
	storeCountry: {},
};
export default function(state = initialState, sagaRes) {
    switch (sagaRes.type) {
        case mapTypes.GET_COUNTRY_SUCCESS:
			const countryRes = sagaRes.data;
			return Object.assign({}, state, { storeCountry: { ...sagaRes.data } });
		case mapTypes.GET_COUNTRY_ERROR:
			return { ...state, countryRes };
    default:
			return state;
	}
}