/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import * as API from '../utils/unsplash.utils';
import {
  LIKE_PHOTO_REQUEST,
  likePhotoSuccess,
  likePhotoFailure,
} from '../actions';


function* likePhoto({ photoId }) {
  try {
    const response = yield call(API.likePhoto, { photoId });

    yield put(likePhotoSuccess({ photoId }));
  } catch (error) {
    yield put(likePhotoFailure({ error }));
  }
}


// ///////////////////
// WATCHERS /////////
// /////////////////
export default function* watchFetchPhotos() {
  yield* takeLatest(LIKE_PHOTO_REQUEST, likePhoto);
}
