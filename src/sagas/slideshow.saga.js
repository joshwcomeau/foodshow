/* eslint-disable no-unused-vars */
import { delay, takeEvery, takeLatest } from 'redux-saga';
import { take, call, race, put, fork, select } from 'redux-saga/effects';

import {
  FETCH_PHOTOS_SUCCESS,
  PAUSE_SLIDESHOW,
  SELECT_PHOTO,
  selectPhoto,
  updateSlideshowProgress,
} from '../actions';

const slideLength = 20; // The number of ticks to wait for each slide
const tickLength = 1000; // The length of a tick, in ms

// function* tick({ progress }) {
//   // Check to see if the slideshow is paused or not.
//   // If it isn't paused, increment the progress!
//   const status = yield select(state => state.slideshow.status);
//
//   if (status !== 'paused') {
//     progress++;
//
//     if (progress === slideLength) {
//     } else {
//       yield put(updateSlideshowProgress());
//     }
// }

function* slideshow({ page }) {
  // The slideshow works by dispatching `selectPhoto` actions every 20 seconds.
  // We can't simply set a timeout, though, because the time is pause-able.
  // The timer should pause when the photo is focused, and resume when blurred.
  let ticks = 0;

  while (ticks < slideLength) {
    yield delay(tickLength);

    ticks++;

    // Calculate the percentage through this slide
    const progress = (ticks / slideLength) * 100;

    yield put(updateSlideshowProgress({ progress }));
  }

  // Once that slide is done, select our next photo,
  // which will restart the process.
  const photos = yield select(state => state.photos);
  const currentPhotoIndex = photos.allIds.indexOf(photos.currentPhotoId);
  const nextPhotoId = photos.allIds[currentPhotoIndex + 1];

  yield put(selectPhoto({ photoId: nextPhotoId }));
}


// ///////////////////
// WATCHERS /////////
// /////////////////
export default function* watchSlideshow() {
  // The slideshow should begin when we select our first photo,
  // and will re-trigger on every subsequent photo.
  yield* takeEvery(SELECT_PHOTO, slideshow);
}
