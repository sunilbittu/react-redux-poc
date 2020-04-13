import * as mapTypes from '../../actions/Map';

let initialState = {
	storedAddress: {},
};
export default function(state = initialState, sagaRes) {
    switch (sagaRes.type) {
        case mapTypes.GET_ADDRESS_SUCCESS:
			const addressRes = sagaRes.data;
			return Object.assign({}, state, { storedAddress: { ...addressRes } });
		case mapTypes.GET_ADDRESS_ERROR:
			return { ...state, addressRes };
    default:
			return state;
	}
}