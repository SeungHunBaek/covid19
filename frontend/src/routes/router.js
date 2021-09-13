import * as React from 'react';
import Main from '../pages/Main'
import Korea from '../pages/Korea'
import World from '../pages/World'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/korea" component={Korea}/>
            <Route path="/world" component={World}/>
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;