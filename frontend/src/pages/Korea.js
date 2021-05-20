import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Korea extends React.Component {
    
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    componentWillMount() {
        const url = `http://localhost:3000/korea-data`;
 
        axios.get(url)
        .then((response)=>{
            console.log(`${JSON.stringify(response, null, 4)}`);
        })
    }

    render() {
        return (
            <div>
                 <Header/>
                 <div className="align">
                    <Navigation/>
                    <Content/>
                </div>
            </div>
        )
    }
}


export default Korea;