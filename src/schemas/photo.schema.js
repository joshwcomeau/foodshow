import { Schema, arrayOf } from 'normalizr';

const user = new Schema('user');
const category = new Schema('categories');

const photo = new Schema('photos');
photo.define({
  user,
  categories: arrayOf(category),
});

export default photo;
