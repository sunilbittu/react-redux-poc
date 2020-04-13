import * as types from './index';

export const addressMapAction = (address) => {
	return {
		type: types.GET_ADDRESS,
		data: address
	};
};