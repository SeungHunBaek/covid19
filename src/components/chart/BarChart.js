import React, { Component } from 'react';
import CanvasJSReact  from '../../lib/canvasjs.react';
// import XMLParser from 'react-xml-parser';
import axios from 'axios';
import './Barchart.css';
import { COVID_STATUS_KOREA } from '../../api/api';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		decideCnt: 10635,						// 확진자 수
		clearCnt: 7829,							// 격리해제 수
		examCnt: 14186,							// 검사진행 수
		deathCnt: 230,							// 사망자 수
		careCnt: 2576,							// 치료중 환자 수
		resutlNegCnt: 521642,					// 결과 음성 수
		accDefRate: "1.9980198280",				// 누적 확진률
		accExamCnt: 546463,						// 누적 검사 수
		accExamCompCnt: 532277,					// 누적 검사 완료 수
		seq: 109,								// 게시글번호(감염현황 고유값)
		stateDt: 20200417,						// 기준일
		stateTime: "00:00",						// 기준시간
		createDt: "2020-04-17 10:32:02.119",	// 등록일시분초 
		updateDt: "null"						// 수정일시분초
	}
	
	componentWillMount() {
		// this.getApiData();
		console.log("componentWillMount()");
	}
	

	getApiData = async () => {
		const {data:{response:{body:{items:{ item }}}}} 
			= await axios.get(COVID_STATUS_KOREA);

		this.setState = ({
			covidInfoOfKorea: item.createDt,
			abc:1
		})
	}

	
	render() {
		// const koreaInfo = this.state.covidInfoOfKorea;

		const options = {
			animationEnabled: true,
			backgroundColor: "#cbcdd2",
			theme: "light2",
			title:{
				text: "국내 코로나 현황 "
			},
			axisX: {
				title: "",
				reversed: true,
			},
			axisY: {
				title: "",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y: this.props.data.decideCnt, label: "확진자수" },
					{ y: this.props.data.careCnt, label: "치료중" },
					{ y: this.props.data.clearCnt, label: "격리해제" },
					{ y: this.props.data.deathCnt, label: "사망자" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}  className ="chartSize"
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			
		</div>
		);
	}
	addSymbols(e){
		// 단위설정

		return e.value + "명";
	}
}
export default BarChart;