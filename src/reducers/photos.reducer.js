import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
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
        ...payload.photos,
      };

    default:
      return state;
  }
};

const isFetching = (state = initialState.isFetching, { type }) => {
  switch (type) {
    case FETCH_PHOTOS_REQUEST:
      return true;

    case FETCH_PHOTOS_SUCCESS:
    case FETCH_PHOTOS_FAILURE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  isFetching,
});


// ////////////////////
// Selectors /////////
// //////////////////
const byIdSelector = state => state.photos.byId;

// Create an array of photos, for easy consumption.
// We need to take care to assign the ID to each object.
export const photosListSelector = createSelector(
  byIdSelector,
  (byId) => (
    Object.keys(byId).map(id => ({
      ...byId[id],
      id,
    }))
  )
);
