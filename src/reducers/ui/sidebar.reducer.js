import { combineReducers } from 'redux';

import {
  TOGGLE_SIDEBAR,
} from '../../actions';


const initialState = {
  isVisible: true,
};


// ////////////////////
// Reducers //////////
// //////////////////
const isVisible = (state = initialState.isVisible, { type }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  isVisible,
});


// ////////////////////
// Selectors /////////
// //////////////////
