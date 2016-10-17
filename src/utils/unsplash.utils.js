import Unsplash from 'unsplash-js';

import photosFixture from '../fixtures/photos.fixture';
import { getQueryParams } from './misc.utils';

// NOTE:
// Unsplash API has a rather unforgiving limit of 100 requests per hour.
// To avoid hitting that limit in development, we have the option to use
// a fixture, to stub the requests.
const useFixtures = false;

const localStorageAuthTokenKey = 'foodshow_auth_token';


const unsplash = new Unsplash({
  applicationId: '2cc5f79ee1b4d8f8ef036bada6b0e1656239f2d96578addd18bd8f7fee9ff3f0',
  secret: '79adde5db99ee5cf6305639c4e92c117254315234c7ea418f951ca5a1ff18fc3',
  callbackUrl: `${window.location.origin}/foodshow/index.html`,
});

// TEMP!
window.unsplash = unsplash;

const toJson = response => response.json();

export const fetchPhotos = () => {
  const collectionId = '191435';

  if (useFixtures) {
    return new Promise(resolve => resolve(photosFixture));
  }

  return unsplash.collections
    .getCollectionPhotos(collectionId)
    .then(toJson);
};

export const likePhoto = ({ photoId }) => {
  return unsplash.photos.likePhoto(photoId).then(toJson);
};

export const unlikePhoto = ({ photoId }) => {
  return unsplash.photos.unlikePhoto(photoId).then(toJson);
};

export const fetchCurrentUser = () => (
  unsplash.currentUser.profile().then(toJson)
);

export const login = () => {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    'public',
    'read_user',
    'write_likes',
  ]);

  location.assign(authenticationUrl);
};

export const authenticateFromCode = ({ code }) => {
  return unsplash.auth
    .userAuthentication(code)
    .then(toJson)
    .then(result => {
      // Set it in localstorage, so that we can use it next time
      localStorage.setItem(localStorageAuthTokenKey, result.access_token);

      return result;
    });
};

export const setBearerAndFetchUser = ({ access_token }) => {
  unsplash.auth.setBearerToken(access_token);

  return fetchCurrentUser();
};

export const autoLogin = ({ callback }) => {
  const { code } = getQueryParams();
  const savedToken = localStorage.getItem(localStorageAuthTokenKey);

  if (savedToken) {
    setBearerAndFetchUser({ access_token: savedToken })
      .then(user => callback(user));
  } else if (code) {
    authenticateFromCode({ code })
      .then(setBearerAndFetchUser)
      .then(user => callback(user));
  } else {
    // If we can't auto-login, invoke the callback without a specified user.
    callback();
  }
};
