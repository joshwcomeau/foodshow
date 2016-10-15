import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import watchFetchPhotosSaga from '../sagas/fetch-photos.saga';
import DevTools from '../components/DevTools';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(watchFetchPhotosSaga);

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
