import React, { PropTypes } from 'react';

import Sidebar from '../Sidebar';

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Sidebar />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
