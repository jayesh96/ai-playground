/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {render} from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/extensions
/* eslint-enable import/no-extraneous-dependencies */
// Using with webpack
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'),
);
