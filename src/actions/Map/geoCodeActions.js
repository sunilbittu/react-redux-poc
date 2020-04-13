import * as types from './index';


export const geoCodesAction = (lat,long) => {
	return {
		type: types.GET_GEO_CODES,
		data: [lat,long]
	};
};
