import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import watchFetchPhotosSaga from '../sagas/fetch-photos.saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(watchFetchPhotosSaga);

  return store;
}
