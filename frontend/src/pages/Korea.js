import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import BarChart from '../components/BarChart';

class Korea extends React.Component {
    
    state = {
        datas: [],
    }
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    async componentWillMount() {
        const url = `http://localhost:3000/korea-data`;
 
        const {data:{items:{item}} } = await axios.get(url)
        let chartData = []

        console.log(item);
        for (let i = item.length-1; 0 <= i; i--) {

            chartData.push({
                name: item[i].stateDt,
                cnt: item[i].decideCnt
            });
        }

        // this.setState({ worldData: item });
        this.setState({datas :chartData});
    }
   

    render() {
        return (
            <div>
                 <Header/>
                 <div className="align">
                    <Navigation/>
                    <BarChart propsDatas = {this.state.datas}/>
                </div>
            </div>
        )
    }
}


export default Korea;