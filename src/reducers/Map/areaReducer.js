import * as mapTypes from '../../actions/Map';
let initialState = {
	storedArea: {},
};
export default function(state = initialState, sagaRes) {
    switch (sagaRes.type) {
        case mapTypes.GET_AREA_SUCCESS:
			const areaRes = sagaRes.data;
			return Object.assign({}, state, { storedArea: { ...areaRes } });
		case mapTypes.GET_AREA_ERROR:
			return { ...state, areaRes };
    default:
			return state;
	}
}