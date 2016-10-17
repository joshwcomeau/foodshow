import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import authSaga from '../sagas/auth.saga';
import fetchPhotosSaga from '../sagas/fetch-photos.saga';
import likePhotoSaga from '../sagas/like-photo.saga';
import slideshowSaga from '../sagas/slideshow.saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(fetchPhotosSaga);
  sagaMiddleware.run(likePhotoSaga);
  sagaMiddleware.run(slideshowSaga);

  return store;
}
