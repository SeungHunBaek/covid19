import * as React from 'react';
import './Home.css';
import Header from './pages/Header';
import Main from './pages/Main';
import Navigation from './pages/Navigation';
import {Router} from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <Router>
        <div>
            <Header/>
            <div className="Home-align">
              <Navigation/>
              <Main/>
            </div>
        </div>
      </Router>
    )
  }
}

export default Home;