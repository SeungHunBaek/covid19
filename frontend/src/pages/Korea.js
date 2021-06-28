import React from 'react';
import './Korea.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';
import LineChart from '../components/CumulativeLineChart';
// import getDomesticData from '../apis/DomesticData';
// import getDomesticRegionData from '../apis/DomesticRegionData';

class Korea extends React.Component {
    
    state = {
        datas: [],
        regionData: []
    }
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    async componentWillMount() {
        // 국내 데이터
        this.setState({datas :getDomesticData()});
        // 국내 지역별 데이터 합계
        this.setState({regionData :getDomesticRegionData()});
    }

    getDomesticData(){
        const url = `http://localhost:3000/korea-data`;

        const {data:{items:{item}}} = await axios.get(url)
        let chartData = []
    
        for (let i = item.length-1, j = 0; 7 > j; i--) {
            j++;
            let date = item[i].stateDt + "";
            chartData.push({
                name: `${date.substring(0,4)}-${date.substring(4,6)}-${date.substring(6,8)}`,
                "확진자수": item[i].decideCnt
            });
        }    
        return chartData;
    }
    getDomesticRegionData(){
        const url = `http://localhost:3000/korea-data/localStatus`;
 
        const { data } = await axios.get(url)
        return data;
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