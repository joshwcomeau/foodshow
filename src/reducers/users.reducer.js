import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  FETCH_PHOTOS_SUCCESS,
} from '../actions';


const initialState = {
  byId: {},
  isFetching: false,
};


// ////////////////////
// Reducers //////////
// //////////////////
const byId = (state = initialState.byId, { type, ...payload }) => {
  switch (type) {
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        ...payload.users,
      };

    default:
      return state;
  }
};

export default combineReducers({
  byId,
});


// ////////////////////
// Selectors /////////
// //////////////////
const currentPhotoIdSelector = state => state.photos.currentPhotoId;
const photosByIdSelector = state => state.photos.byId;
const usersByIdSelector = state => state.users.byId;

// Create an array of photos, for easy consumption.
// We need to take care to assign the ID to each object.
export const currentPhotographerSelector = createSelector(
  currentPhotoIdSelector,
  photosByIdSelector,
  usersByIdSelector,
  (currentPhotoId, photosById, usersById) => {
    const userId = photosById[currentPhotoId].user;

    return usersById[userId];
  }
);
