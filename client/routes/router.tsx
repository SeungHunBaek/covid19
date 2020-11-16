import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomeIndex from '../pages/HomeIndex';
// import koreaData from '../pages/koreaData';
import Demo from '../pages/demo';


const Root: React.FC = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomeIndex}/>
            <Route path="/koreaData" component={Demo}/>
            <Route path="/globalData" component={HomeIndex}/>
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;