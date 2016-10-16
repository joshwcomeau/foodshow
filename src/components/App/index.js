import React, { PropTypes } from 'react';

import Sidebar from '../Sidebar';
import DevTools from '../DevTools';


const App = ({ children }) => {
  return (
    <div>
      {children}
      <Sidebar />

      <DevTools />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};


export default App;
