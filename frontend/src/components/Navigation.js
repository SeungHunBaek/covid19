import './Navigation.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

function Navigation() {
  return (
      <div className="Navigation-align">
          <div className="Navigation-content">
            <ul>
              <li>
               <Link to='/'>home</Link>
              </li>
              <li>
               <Link to='/korea'>korea</Link>
              </li>
            </ul>
          </div>
      </div>
  );
}

export default Navigation;
