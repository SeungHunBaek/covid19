import * as React from 'react';
import Main from '../pages/Main'
import Korea from '../pages/Korea'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/korea" component={Korea}/>
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;