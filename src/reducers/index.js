import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import login from './loginReducer';

const rootReducer = combineReducers({
   login: persistReducer(
      { key: 'loginState', storage: localStorage, stateReconciler: hardSet },
      login
   )
});

export default rootReducer;