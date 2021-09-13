import React from 'react';
import './World.css';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';
import LineChart from '../components/CumulativeLineChart';
import DoubleLineChart from '../components/DoubleLineChart';
import Summary from '../components/Summary';
import SubTab from '../components/SubTab';
class World extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            infState:[],
            datas: [],
            regionData: [],
            chartState: 0 // 0: 누적감염현황, 1: 신규 감염현황
        }
      }

    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    componentDidMount() {
        this.getDomesticRegionData();
        this.getDomesticData();
    }

    // 국외 데이터
    async getDomesticData() {
        const url = `http://localhost:3000/world-data/localStatus`;
 
   
    }
    // 국외 지역별 데이터 합계
    async getDomesticRegionData() {
        const url = `http://localhost:3000/korea-data/localStatus`;
        const { data } = await axios.get(url)
        this.setState({ regionData: data });
    }

    dailyClick = () => {
        this.setState({
            chartState: 0,
        });
    }
    cumulativeClick = () => {
        this.setState({
            chartState: 1,
        });
    }
    vaccineClick = () => {
        this.setState({
            chartState: 1,
        });
    }

    render() {

        return (
            <div>
                 <Header/>
                 <div className="align-row">
                    <Navigation/>
                    <div className="align-column">
                        world
                    </div>
                </div>
            </div>
        )
    }
}


export default World;