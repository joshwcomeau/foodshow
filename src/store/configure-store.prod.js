import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import fetchPhotosSaga from '../sagas/fetch-photos.saga';
import slideshowSaga from '../sagas/slideshow.saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(fetchPhotosSaga);
  sagaMiddleware.run(slideshowSaga);

  return store;
}
