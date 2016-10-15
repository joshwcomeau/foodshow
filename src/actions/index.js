export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';


export const fetchPhotosRequest = ({ page = 1 } = {}) => ({
  type: FETCH_PHOTOS_REQUEST,
  page,
});

export const fetchPhotosSuccess = ({ photos }) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos,
});

export const fetchPhotosFailure = ({ error }) => ({
  type: FETCH_PHOTOS_FAILURE,
  error,
});
