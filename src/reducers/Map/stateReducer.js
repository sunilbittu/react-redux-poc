import * as mapTypes from '../../actions/Map';
let initialState = {
	storedState: {},
};
export default function(state = initialState, sagaRes) {
    switch (sagaRes.type) {
        case mapTypes.GET_STATE_SUCCESS:
			const stateRes = sagaRes.data;
			return Object.assign({}, state, { storedState: { ...sagaRes.data } });
		case mapTypes.GET_STATE_ERROR:
			return { ...state, stateRes };
    default:
			return state;
	}
}