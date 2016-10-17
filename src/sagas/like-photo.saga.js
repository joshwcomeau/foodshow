/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import * as API from '../utils/unsplash.utils';
import {
  LIKE_PHOTO_REQUEST,
  UNLIKE_PHOTO_REQUEST,
  likePhotoSuccess,
  likePhotoFailure,
  unlikePhotoSuccess,
  unlikePhotoFailure,
} from '../actions';


// TODO: DRY!
function* likePhoto({ photoId }) {
  // Optimism!
  yield put(likePhotoSuccess({ photoId }));

  try {
    const response = yield call(API.likePhoto, { photoId });
  } catch (error) {
    yield put(likePhotoFailure({ error }));
  }
}

function* unlikePhoto({ photoId }) {
  yield put(unlikePhotoSuccess({ photoId }));

  try {
    const response = yield call(API.unlikePhoto, { photoId });
  } catch (error) {
    yield put(unlikePhotoFailure({ error }));
  }
}

// ///////////////////
// WATCHERS /////////
// /////////////////
function* watchLikePhoto() {
  yield* takeLatest(LIKE_PHOTO_REQUEST, likePhoto);
}

function* watchUnlikePhoto() {
  yield* takeLatest(UNLIKE_PHOTO_REQUEST, unlikePhoto);
}

export default function* () {
  yield [
    fork(watchLikePhoto),
    fork(watchUnlikePhoto),
  ];
}
