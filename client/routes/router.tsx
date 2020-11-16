import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomeIndex from '../pages/HomeIndex';
// import koreaData from '../pages/koreaData';
import demo from '../pages/demo';


const Root: React.FC = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomeIndex}/>
            <Route path="/koreaData" component={demo}/>
            <Route path="/globalData" component={HomeIndex}/>
        </Switch>
    </BrowserRouter>
)

export default Root;