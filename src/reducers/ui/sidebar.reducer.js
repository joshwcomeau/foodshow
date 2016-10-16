import { combineReducers } from 'redux';

import {
  TOGGLE_SIDEBAR,
} from '../../actions';


const initialState = {
  isActive: true,
};


// ////////////////////
// Reducers //////////
// //////////////////
const isActive = (state = initialState.isActive, { type }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  isActive,
});


// ////////////////////
// Selectors /////////
// //////////////////
