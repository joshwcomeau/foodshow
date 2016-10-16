import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  PAUSE_SLIDESHOW,
  RESUME_SLIDESHOW,
  SELECT_PHOTO,
  UPDATE_SLIDESHOW_PROGRESS,
} from '../actions';


const statuses = {
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED',
};

const initialState = {
  status: statuses.STOPPED,
  progress: 0,
};


// ////////////////////
// Reducers //////////
// //////////////////
const status = (state = initialState.status, { type }) => {
  switch (type) {
    case PAUSE_SLIDESHOW:
      return statuses.PAUSED;

    case SELECT_PHOTO:
    case RESUME_SLIDESHOW:
      return statuses.RUNNING;

    default:
      return state;
  }
};

const progress = (state = initialState.progress, { type, ...payload }) => {
  switch (type) {
    case UPDATE_SLIDESHOW_PROGRESS:
      return payload.progress;

    case SELECT_PHOTO:
      // Restart when the slideshow recommences? May not be necessary.
      return 100;

    default:
      return state;
  }
};

export default combineReducers({
  status,
  progress,
});


// ////////////////////
// Selectors /////////
// //////////////////
const statusSelector = state => state.slideshow.status;

export const isActiveSelector = createSelector(
  statusSelector,
  status => status === statuses.RUNNING
);
