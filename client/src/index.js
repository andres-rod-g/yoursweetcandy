import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Redux/reducers/index.js'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
