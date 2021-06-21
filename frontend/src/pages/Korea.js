import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';
import LineChart from '../components/CumulativeLineChart';
import getDomesticData from '../apis/DomesticData';

class Korea extends React.Component {
    
    state = {
        datas: [],
        regionData: []
    }
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    async componentWillMount() {
        this.setState({datas :getDomesticData()});
        this.getDomesticRegionData();
    }

    // 국내 데이터

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
                            <LineChart propsDatas = {this.state.datas}/>
                            <BarChart propsDatas = {this.state.regionData}/>
                        </div>
                </div>
            </div>
        )
    }
}


export default Korea;