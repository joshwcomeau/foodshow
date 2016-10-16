import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import FilterMonitor from 'redux-devtools-filter-actions';

import { UPDATE_SLIDESHOW_PROGRESS } from '../../actions';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
  >
    <FilterMonitor
      blacklist={[UPDATE_SLIDESHOW_PROGRESS]}
    >
      <LogMonitor theme="tomorrow" />
    </FilterMonitor>
  </DockMonitor>
);

export default DevTools;
