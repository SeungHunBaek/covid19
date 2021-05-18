import './Navigation.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

function Navigation() {
  return (
      <div className="Navigation-align">
          <div className="Navigation-content">
            <ul>
              <li>
               <Link to='/'>temp</Link>
              </li>
              <li>
               <Link to='/main'>main</Link>
              </li>
            </ul>
          </div>
      </div>
  );
}

export default Navigation;
