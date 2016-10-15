import { combineReducers } from 'redux';

import photos from './photos.reducer';
import slideshow from './slideshow.reducer';
import users from './users.reducer';


export default combineReducers({
  photos,
  slideshow,
  users,
});
