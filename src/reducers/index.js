import { combineReducers } from 'redux';

import photos from './photos.reducer';
import users from './users.reducer';


export default combineReducers({
  photos,
  users,
});
