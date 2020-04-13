import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import login from './loginReducer';
import countryReducer from './Map/countryReducer';
import stateReducer from './Map/stateReducer';
import cityReducer from './Map/cityReducer';
import areaReducer from './Map/areaReducer';
import addressReducer from './Map/addressReducer';
import geoCodesReducer from './Map/geoCodeReducer';
const rootReducer = combineReducers({
   login: persistReducer(
      { key: 'loginState', storage: localStorage, stateReconciler: hardSet },
      login
   ),
   countryReducer: countryReducer,
   stateReducer: stateReducer,
   cityReducer: cityReducer,
   areaReducer: areaReducer,
   addressReducer: addressReducer,
   geoCodesReducer: geoCodesReducer
});

export default rootReducer;