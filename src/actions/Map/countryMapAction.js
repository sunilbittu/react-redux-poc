import * as types from './index';

export const countryMapAction = (country) => {
	return {
		type: types.GET_COUNTRY,
		data: country
	};
};
