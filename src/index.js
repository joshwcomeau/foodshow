import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App';
import Gallery from './components/Gallery';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery}/>
    </Route>
  </Router>
), document.getElementById('root'));
