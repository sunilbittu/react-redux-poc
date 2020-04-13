import * as types from './index';
export const areasMapAction = (area) => {
	return {
		type: types.GET_AREA,
		data: area
	};
};