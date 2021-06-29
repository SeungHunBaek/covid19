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
        datas: [],
        regionData: []
    }
    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    async componentWillMount() {
        this.getDomesticData();
        this.getDomesticRegionData();
    }
    // 국내 데이터
    async getDomesticData() {
        const url = `http://localhost:3000/korea-data`;
 
        const {data:{items:{item}}} = await axios.get(url)
        let chartData = []

        // console.log(item);
        for (let i = item.length-1, j = 0; 7 > j; i--) {
            j++;
            let date = item[i].stateDt + "";
            // console.log(date.substring(0,4)+date.substring(4,6)+date.substring(6,8))
            chartData.push({
                name: `${date.substring(0,4)}-${date.substring(4,6)}-${date.substring(6,8)}`,
                "확진자수": item[i].decideCnt
                // x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            });
        }
        
        // this.setState({ worldData: item });
        this.setState({datas :chartData});
    }
    // 국내 지역별 데이터 합계
    async getDomesticRegionData() {
        const url = `http://localhost:3000/korea-data/localStatus`;
 
        const { data } = await axios.get(url)
        let chartData = []
        
        console.log(`baek: ${JSON.stringify(data, null, 4)}`);

        this.setState({ regionData: data });
        // this.setState({datas :chartData});
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