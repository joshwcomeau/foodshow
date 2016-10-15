import { Schema, arrayOf } from 'normalizr';

const users = new Schema('users');
const category = new Schema('categories');

const photo = new Schema('photos');
photo.define({
  user: users,
  categories: arrayOf(category),
});

export default photo;
