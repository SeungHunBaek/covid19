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

		const bar_options = {
			animationEnabled: true,
			backgroundColor: "#c7ccd8",
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
				suffix: "명(人)"
				// ,labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				xValueFormatString: "#,###",
				dataPoints: [
					{ y: this.props.data.decideCnt, label: "확진자수" },
					{ y: this.props.data.careCnt, label: "치료중" },
					{ y: this.props.data.clearCnt, label: "격리해제" },
					{ y: this.props.data.deathCnt, label: "사망자" }
				]
			}]
		}
		const spline_options = {
			animationEnabled: true,
			backgroundColor: "#c7ccd8",
			title:{
				text: "검사현황"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "",
				suffix: "명(人)",
				includeZero: true
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMDD",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
				]
			}]
		}
		return (
			<div className = "chartPosition">
				<div style={{height: 25+"em", width: 49.7+"%"}}>
					<CanvasJSChart options = {bar_options}/>
				</div>
				<div style={{height: 25+"em", width: 49.89+"%"}}>
					<CanvasJSChart options = {spline_options}/>
				</div>
			</div>
		);
	}
	addSymbols(e){
		// 단위설정
		return e.value + "명";
	}
}
export default BarChart;