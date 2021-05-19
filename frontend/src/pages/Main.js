import React from 'react';
import './Main.css';
import {BrowserRouter, Route, Router,Switch, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Main extends React.Component {
    
    render() {
        return (
            <div>
                 <Header/>
                 <Navigation/>
                 <Content/>
            </div>
        )
    }
}


export default Main;