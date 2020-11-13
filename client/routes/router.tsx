import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomeIndex from '../pages/HomeIndex';

const Root: React.FC = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomeIndex}/>
            {/* <Route path="/" exact component={}/> */}
        </Switch>
    </BrowserRouter>
)

export default Root;