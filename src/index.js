import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store';
import { fetchPhotosRequest } from './actions';
import { authenticateFromCode } from './utils/unsplash.utils';
import { getQueryParams } from './utils/misc.utils';

import App from './components/App';
import Slideshow from './components/Slideshow';


const store = configureStore();

// The user could be coming back from a login request,
// or they could have persisted credentials.
// Deal with auth stuff before anything else.
const { code } = getQueryParams();
if (code) {
  authenticateFromCode({ code })
    .then(() => {
      // We need to re-fetch the photos, since the user may have already
      // liked them.
      store.dispatch(fetchPhotosRequest());
    });
}

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Slideshow} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
