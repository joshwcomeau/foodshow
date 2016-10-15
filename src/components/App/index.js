import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { sidebarWidth } from '../../style-variables';
import Sidebar from '../Sidebar';


const styles = StyleSheet.create({
  mainContent: {
    position: 'relative',
    marginRight: sidebarWidth,
  },
});

const App = ({ children }) => {
  return (
    <div>
      <div className={css(styles.mainContent)}>
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};


export default App;
