import * as types from './index';
export const cityMapAction = (city) => {
	return {
		type: types.GET_CITY,
		data: city
	};
};