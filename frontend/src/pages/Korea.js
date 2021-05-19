import React from 'react';
import './Korea.css';
import {BrowserRouter, Route, Router,Switch, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Korea extends React.Component {
    
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


export default Korea;