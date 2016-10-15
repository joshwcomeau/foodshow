export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';


export const fetchPhotosRequest = ({ page = 1 } = {}) => ({
  type: FETCH_PHOTOS_REQUEST,
  page,
});

export const fetchPhotosSuccess = ({ photos, photoIds }) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos,
  photoIds,
});

export const fetchPhotosFailure = ({ error }) => ({
  type: FETCH_PHOTOS_FAILURE,
  error,
});
