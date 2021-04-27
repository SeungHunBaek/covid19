import * as React from 'react';
import './Home.css';
import Header from './pages/Header';
import Main from './pages/Main';
import Navigation from './pages/Navigation';

class Home extends React.Component {

  render() {
    return (
        <div>
            <Header/>
            <div className="Home-align">
              <Navigation/>
              <Main/>
            </div>
        </div>
    )
  }
}

export default Home;