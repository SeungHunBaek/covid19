import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppMain from './App';
import Title from './components/Title/Title.js';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppMain />
  </Provider>
  ,
  document.getElementById('root')
);
ReactDOM.render(
  <Title />
  ,
  document.getElementById('navi')
);

