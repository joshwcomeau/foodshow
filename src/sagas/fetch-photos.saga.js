/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { normalize, arrayOf } from 'normalizr';
import photoSchema from '../schemas/photo.schema';

import * as API from '../utils/unsplash.utils';
import {
  FETCH_PHOTOS_REQUEST,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  selectPhoto,
} from '../actions';


function* fetchPhotos({ page }) {
  try {
    const response = yield call(API.fetchPhotos, { page });

    // Normalize the response
    const { result: photoIds, entities } = normalize(response, arrayOf(photoSchema));
    const { photos, users } = entities;

    yield put(fetchPhotosSuccess({ photos, photoIds, users }));

    // Select the first photo by default.
    yield put(selectPhoto({ photoId: photoIds[0] }));
  } catch (error) {
    yield put(fetchPhotosFailure({ error }));
  }
}


// ///////////////////
// WATCHERS /////////
// /////////////////
export default function* watchFetchPhotos() {
  yield* takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotos);
}
