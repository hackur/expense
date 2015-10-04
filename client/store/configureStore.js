import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from 'reducers';

let finalCreateStore;

if (__DEVELOPMENT__) {
  finalCreateStore = compose(
    applyMiddleware(thunk, logger),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(thunk)(createStore);
}

export default function configureStore() {
  const reducer = combineReducers(reducers);
  const store = finalCreateStore(reducer);

  if (module.hot && __DEVELOPMENT__) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(combineReducers(require('../reducers')))
    );
  }

  return store;
}
