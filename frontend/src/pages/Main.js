import React from 'react';
import './Main.css';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Main extends React.Component {

    render() {
        return (
            <div>
                 <Header/>
                 <div className="main-align">
                    <Navigation/>
                    <Content/>
                 </div>
            </div>
        )
    }
}


export default Main;