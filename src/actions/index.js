export const DECREMENT_SLIDE = 'DECREMENT_SLIDE';
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
export const INCREMENT_SLIDE = 'INCREMENT_SLIDE';
export const LIKE_PHOTO_REQUEST = 'LIKE_PHOTO_REQUEST';
export const LIKE_PHOTO_SUCCESS = 'LIKE_PHOTO_SUCCESS';
export const LIKE_PHOTO_FAILURE = 'LIKE_PHOTO_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PAUSE_SLIDESHOW = 'PAUSE_SLIDESHOW';
export const RESUME_SLIDESHOW = 'RESUME_SLIDESHOW';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const UNLIKE_PHOTO_REQUEST = 'UNLIKE_PHOTO_REQUEST';
export const UNLIKE_PHOTO_SUCCESS = 'UNLIKE_PHOTO_SUCCESS';
export const UNLIKE_PHOTO_FAILURE = 'UNLIKE_PHOTO_FAILURE';
export const UPDATE_SLIDESHOW_PROGRESS = 'UPDATE_SLIDESHOW_PROGRESS';


export const decrementSlide = () => ({
  type: DECREMENT_SLIDE,
});

export const fetchPhotosRequest = ({ page = 1 } = {}) => ({
  type: FETCH_PHOTOS_REQUEST,
  page,
});

export const fetchPhotosSuccess = ({ photos, photoIds, users }) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos,
  photoIds,
  users,
});

export const fetchPhotosFailure = ({ error }) => ({
  type: FETCH_PHOTOS_FAILURE,
  error,
});

export const incrementSlide = () => ({
  type: INCREMENT_SLIDE,
});

export const likePhotoRequest = ({ photoId }) => ({
  type: LIKE_PHOTO_REQUEST,
  photoId,
});

export const likePhotoSuccess = ({ photoId }) => ({
  type: LIKE_PHOTO_SUCCESS,
  photoId,
});

export const likePhotoFailure = ({ error }) => ({
  type: LIKE_PHOTO_FAILURE,
  error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = ({ user }) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  error,
});

export const pauseSlideshow = () => ({
  type: PAUSE_SLIDESHOW,
});

export const resumeSlideshow = () => ({
  type: RESUME_SLIDESHOW,
});

export const selectPhoto = ({ photoId }) => ({
  type: SELECT_PHOTO,
  photoId,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const unlikePhotoRequest = ({ photoId }) => ({
  type: UNLIKE_PHOTO_REQUEST,
  photoId,
});

export const unlikePhotoSuccess = ({ photoId }) => ({
  type: UNLIKE_PHOTO_SUCCESS,
  photoId,
});

export const unlikePhotoFailure = ({ error }) => ({
  type: UNLIKE_PHOTO_FAILURE,
  error,
});

export const updateSlideshowProgress = ({ progress }) => ({
  type: UPDATE_SLIDESHOW_PROGRESS,
  progress,
});
