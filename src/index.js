import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

//Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//to see the list in the cmd use 'dir'
//to see if there is a change in a file use 'type db.json'
