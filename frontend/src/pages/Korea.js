import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';
import LineChart from '../components/CumulativeLineChart';
import Summary from '../components/Summary';
class Korea extends React.Component {
    
    state = {
        infState:[],
        datas: [],
        regionData: []
    }

    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    componentDidMount() {
        this.getDomesticRegionData();
        this.getDomesticData();
    }

    // 국내 데이터
    async getDomesticData() {
        const url = `http://localhost:3000/korea-data`;
 
        const {data:{items:{item}}} = await axios.get(url);
        this.setState({infState :item});
        let chartData = []
        // this.setState({datas :chartData});
        for (let i = item.length-1, j = 0; 7 > j; i--) {
            j++;
            let date = item[i].stateDt + "";
            chartData.push({
                name: `${date.substring(0,4)}-${date.substring(4,6)}-${date.substring(6,8)}`,
                "확진자수": item[i].decideCnt
            });
        }
        
        this.setState({datas :chartData});
    }
    // 국내 지역별 데이터 합계
    async getDomesticRegionData() {
        const url = `http://localhost:3000/korea-data/localStatus`;
        const { data } = await axios.get(url)
        this.setState({ regionData: data });
    }

    render() {
        return (
            <div>
                 <Header/>
                 <div className="align-row">
                    <Navigation/>
                    <div className="align-column">
                        <Summary infState = {this.state.infState}/>
                        <LineChart propsDatas = {this.state.datas}/>
                        <BarChart propsDatas = {this.state.regionData}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Korea;