import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import Router from './routes/router'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router />,
  document.getElementById('app'),
)
