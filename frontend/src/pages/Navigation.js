import './Navigation.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

function Navigation() {
  return (
      <div className="Navigation-align">
          <div className="Navigation-content">
              <div>
                <Link to="/"> 
                  <button> main </button>
                </Link>
              </div>
              <div>
                {/* <Link to="/temp"> 
                  <button> temp </button>
                </Link> */}
              </div>
          </div>
      </div>
  );
}

export default Navigation;
