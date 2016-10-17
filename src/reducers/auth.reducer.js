import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  LOGIN_SUCCESS,
} from '../actions';


const initialState = {
  isLoggedIn: false,
  currentUserId: null,
};


// ////////////////////
// Reducers //////////
// //////////////////
const isLoggedIn = (state = initialState.isLoggedIn, { type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return true;

    default:
      return state;
  }
};

export const currentUserId = (state = initialState.currentUserId, action) => {
  const { type, user } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return user.id;

    default:
      return state;
  }
};

export default combineReducers({
  isLoggedIn,
  currentUserId,
});


// ////////////////////
// Selectors /////////
// //////////////////
const isLoggedInSelector = state => state.auth.isLoggedIn;
const currentUserIdSelector = state => state.auth.currentUserId;
const usersByIdSelector = state => state.users.byId;

export const currentUserSelector = createSelector(
  isLoggedInSelector,
  currentUserIdSelector,
  usersByIdSelector,
  (isLoggedIn, currentUserId, usersById) => {
    if (!isLoggedIn) {
      return null;
    }

    return usersById[currentUserId];
  }
);
