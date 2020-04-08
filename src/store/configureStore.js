import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import rootReducer from "../reducers";

import rootSaga from '../sagas';
// import throttle from 'lodash/throttle';
const persistConfig = {
  key: 'root',
  storage: localStorage
}
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();


/* const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
const peristedState = loadState();

const configureStore = createStore(
  rootReducer,
 // peristedState,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
configureStore.subscribe(throttle,() => {
  saveState(configureStore.getState());
},1000); 


export default configureStore; */

/* export default (initialState = {}, history) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const configureStore = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  )

  const persistor = persistStore(configureStore)
  sagaMiddleware.run(rootSaga);
  return { configureStore, persistor }
}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer,compose(applyMiddleware(sagaMiddleware), reduxDevTools))
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor }
}