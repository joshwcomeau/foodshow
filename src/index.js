import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store';

import App from './components/App';
import Gallery from './components/Gallery';


const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Gallery} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
