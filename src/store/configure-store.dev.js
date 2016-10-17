import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import authSaga from '../sagas/auth.saga';
import fetchPhotosSaga from '../sagas/fetch-photos.saga';
import likePhotoSaga from '../sagas/like-photo.saga';
import slideshowSaga from '../sagas/slideshow.saga';
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

  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(fetchPhotosSaga);
  sagaMiddleware.run(likePhotoSaga);
  sagaMiddleware.run(slideshowSaga);

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
