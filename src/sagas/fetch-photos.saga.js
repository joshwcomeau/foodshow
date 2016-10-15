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
} from '../actions';


function* fetchPhotos({ page }) {
  try {
    const response = yield call(API.fetchPhotos, { page });

    // Normalize the response
    const { entities } = normalize(response, arrayOf(photoSchema));
    const { photos, user, categories } = entities;

    yield put(fetchPhotosSuccess({ photos, user, categories }));
  } catch (error) {
    yield put(fetchPhotosFailure({ error }));
  }
}


// ///////////////////
// WATCHERS /////////
// /////////////////
export default function* watchFetchPhotos() {
  yield* takeEvery(FETCH_PHOTOS_REQUEST, fetchPhotos);
}
