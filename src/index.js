import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import apiMiddleware from './middlewares';
import RootContainer from './containers/RootContainer';
import registerServiceWorker from './registerServiceWorker';

// Initialize store
const initialStore = createStore(
  reducers,
  applyMiddleware(apiMiddleware),
);

render(
  <Router>
    <RootContainer store={initialStore} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
