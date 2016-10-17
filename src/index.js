import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store';
import { fetchPhotosRequest, loginSuccess, loginFailure } from './actions';
import { autoLogin } from './utils/unsplash.utils';

import App from './components/App';
import Slideshow from './components/Slideshow';


const store = configureStore();

// The user could be coming back from a login request,
// or they could have persisted credentials.
// Deal with auth stuff before anything else.
autoLogin({
  callback(response) {
    console.log('Auto logged in with', response);

    if (response) {
      store.dispatch(
        response.errors
        ? loginFailure({ error: response.errors[0] })
        : loginSuccess({ user: response })
      );
    }

    store.dispatch(fetchPhotosRequest());
  },
});

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Slideshow} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
