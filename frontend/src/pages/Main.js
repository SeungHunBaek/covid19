import React from 'react';
import './Main.css';
import {BrowserRouter, Route, Router,Switch, Link, Redirect} from 'react-router-dom';
import Default from '../components/Default';

class Main extends React.Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Default}/>
                </Switch>
                {/* <Route exact path="/temp" component={temp}/> */}
            </div>
        )
    }

}


export default Main;