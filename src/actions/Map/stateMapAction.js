import * as types from './index';

export const stateMapAction = (state) => {
	return {
		type: types.GET_STATE,
		data: state
	};
};