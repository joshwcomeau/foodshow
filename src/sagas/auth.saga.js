/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { normalize, arrayOf } from 'normalizr';

import * as API from '../utils/unsplash.utils';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions';


function* loginRequest() {
  yield call(API.login);
}


// ///////////////////
// WATCHERS /////////
// /////////////////
export default function* watchLoginRequest() {
  yield* takeEvery(LOGIN_REQUEST, loginRequest);
}
