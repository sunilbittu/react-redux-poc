import * as mapTypes from '../../actions/Map';
let initialState = {
	storedCity: {},
};
export default function(state = initialState, sagaRes) {
    switch (sagaRes.type) {
        case mapTypes.GET_CITY_SUCCESS:
			const cityRes = sagaRes.data;
			return Object.assign({}, state, { storedCity: { ...cityRes } });
		case mapTypes.GET_CITY_ERROR:
			return { ...state, cityRes };
    default:
			return state;
	}
}