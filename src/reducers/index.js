import { combineReducers } from 'redux';

import auth from './auth.reducer';
import photos from './photos.reducer';
import slideshow from './slideshow.reducer';
import ui from './ui';
import users from './users.reducer';


export default combineReducers({
  auth,
  photos,
  slideshow,
  ui,
  users,
});
