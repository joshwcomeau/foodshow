import { combineReducers } from 'redux';

import photos from './photos.reducer';
import slideshow from './slideshow.reducer';
import ui from './ui';
import users from './users.reducer';


export default combineReducers({
  photos,
  slideshow,
  ui,
  users,
});
