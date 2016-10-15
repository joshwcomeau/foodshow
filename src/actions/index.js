export const DECREMENT_SLIDE = 'DECREMENT_SLIDE';
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
export const INCREMENT_SLIDE = 'INCREMENT_SLIDE';
export const PAUSE_SLIDESHOW = 'PAUSE_SLIDESHOW';
export const RESUME_SLIDESHOW = 'RESUME_SLIDESHOW';
export const SELECT_PHOTO = 'SELECT_PHOTO';
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

export const updateSlideshowProgress = ({ progress }) => ({
  type: UPDATE_SLIDESHOW_PROGRESS,
  progress,
});
