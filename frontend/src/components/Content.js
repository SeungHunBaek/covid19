import React from 'react';
import './Content.css';
import {BrowserRouter, Route, Router,Switch, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

class Content extends React.Component {
    
    render() {
        return (
            <div>
                 <Header/>

            </div>
        )
    }

}


export default Content;