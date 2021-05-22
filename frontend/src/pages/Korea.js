import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import LineChart from '../components/SimpleLineChart';

class Korea extends React.Component {
    
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    async componentWillMount() {
        const url = `http://localhost:3000/korea-data`;
 
        const {data:{items:{item}} } = await axios.get(url)
        console.log(item);
        
    }

    render() {
        return (
            <div>
                 <Header/>
                 <div className="align">
                    <Navigation/>
                    <LineChart/>
                </div>
            </div>
        )
    }
}


export default Korea;