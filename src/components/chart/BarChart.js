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
		todaysState:[],
		checkupInfo:[],
		storcovidInfoOfKoreaeInfo:[],

		decideCnt: 10635,						// 확진자 수
		clearCnt: 7829,							// 격리해제 수
		examCnt: 14186,							// 검사진행 수 1
		deathCnt: 230,							// 사망자 수
		careCnt: 2576,							// 치료중 환자 수
		resutlNegCnt: 521642,					// 결과 음성 수 1
		accDefRate: "1.9980198280",				// 누적 확진률 1
		accExamCnt: 546463,						// 누적 검사 수
		accExamCompCnt: 532277,					// 누적 검사 완료 수
		seq: 109,								// 게시글번호(감염현황 고유값)
		stateDt: 20200417,						// 기준일
		stateTime: "00:00",						// 기준시간
		createDt: "2020-04-17 10:32:02.119",	// 등록일시분초 
		updateDt: "null"						// 수정일시분초
	}
	preProccess = () => { 

		const date = new Date();
		const stateDt = date.getFullYear() +"0"+ (date.getMonth()+1) +""+ (date.getDate()-1);
		const propsData = this.props._data.item;
		
		for (let i = 0; i < propsData.length; i++) {
			
			if(stateDt == propsData[i].stateDt) {
				this.setState({
					todaysState: propsData[i]
				})
				break;
			}
		}
	}
	setCheckupInfoData = () => {
		const propsData = this.props._data.item;
		const graphData = [];
		
		for (let i = 0; i < propsData.length; i=i+10) {
			const dateStr = propsData[i].stateDt+"";
			graphData.push({
				x: new Date(dateStr.substring(0,4)+"-"+dateStr.substring(4,6)+"-"+dateStr.substring(6,8)),
				y: propsData[i].decideCnt,
				indexLabel: this.numberWithCommas(propsData[i].decideCnt)
			});
		}
		return graphData;
	}
	setDeathCntData = () => {
		const propsData = this.props._data.item;
		const graphData = [];
		
		for (let i = 0; i < propsData.length; i=i+10) {
			const dateStr = propsData[i].stateDt+"";
			graphData.push({
				x: new Date(dateStr.substring(0,4)+"-"+dateStr.substring(4,6)+"-"+dateStr.substring(6,8)),
				y: propsData[i].deathCnt,
				indexLabel: this.numberWithCommas(propsData[i].deathCnt)
			});
		}
		return graphData;
	}
	setCareCntData = () => {
		const propsData = this.props._data.item;
		const graphData = [];
		
		for (let i = 0; i < propsData.length; i=i+10) {
			const dateStr = propsData[i].stateDt+"";
			graphData.push({
				x: new Date(dateStr.substring(0,4)+"-"+dateStr.substring(4,6)+"-"+dateStr.substring(6,8)),
				y: propsData[i].careCnt,
				indexLabel: this.numberWithCommas(propsData[i].careCnt)
				
			});
		}
		return graphData;
	}
	setBarchartData = () => {
		const todaysState = this.state.todaysState;
		const graphData = [
			{ y: todaysState.accExamCnt, label: "누적검사", indexLabel: "累積検査数:　"+this.numberWithCommas(todaysState.accExamCnt)},
			{ y: todaysState.resutlNegCnt, label: "누적음성수", indexLabel: "累積陰性数:　"+this.numberWithCommas(todaysState.resutlNegCnt) },
			{ y: todaysState.decideCnt, label: "확진자수", indexLabel: "感染者数:　"+this.numberWithCommas(todaysState.decideCnt)},
			{ y: todaysState.clearCnt, label: "격리해제", indexLabel: "隔離解除数:　"+this.numberWithCommas(todaysState.clearCnt)},
			{ y: todaysState.careCnt, label: "치료중", indexLabel: "治療中:　"+this.numberWithCommas(todaysState.careCnt)}
		];

		console.log("setBarchartData:" + graphData);
		return graphData;
	}


	numberWithCommas = (x) => {
		
		return parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
		
	componentWillMount() {
		this.preProccess()
	}
	
	
	render() {
		const todaysState = this.state.todaysState;
		const bar_options = {
			
			animationEnabled: true, 
			
			// backgroundColor: "#c7ccd8",
			theme: "light2",
			title:{
				text: "국내 코로나 누적현황 ",
				fontFamily: "arial",
				fontWeight: "normal",
				fontSize: 30,
			},
			subtitles:[
				{
					text: "韓国のコロナ累積状況"
				}
			],
			axisX: {
				title: "",
				reversed: true,
			},
			axisY: {
				title: "",
				scaleBreaks: {
					// autoCalculate: true,
					// collapsibleThreshold : "10 %" ,
					customBreaks: [{
						startValue: 15000,
						endValue: 500000
					}],
					type: "wavy",
					lineColor: "#c7ccd8"
				},
				
				suffix: "명(人)"
				// ,labelFormatter: this.addSymbols
			},

			data: [{
				type: "bar",
				xValueFormatString: "#,###",
				dataPoints: this.setBarchartData()
			}]
		}
		const spline_options = {
			animationEnabled: true,
			// backgroundColor: "#c7ccd8",
			title:{
				text: "날짜별 현황",
				fontFamily: "arial",
				fontWeight: "normal",
				fontSize: 30
			},
			subtitles:[
				{
					text: "日付別の状況"
				}
			],
			toolTip:{   
				content: "확진자 수(感染者) <br/> {x}: {y}"      
			},
			axisX: {
				intervalType: "day",
				valueFormatString: "MM-DD",
			},
			axisY: {
				title: "",
				crosshair: {
					enabled: true
				},
				suffix: "명(人)",
				includeZero: true
			},
			data: [{
				type: "spline",
				yValueFormatString: "#,###명(人)",
				showInLegend: true,
				name: "확진자 수(感染者)",
				dataPoints: this.setCheckupInfoData()
			},
			{
				type: "spline",
				yValueFormatString: "#,###명(人)",
				showInLegend: true,
				name: "사망자 수(死亡者)",
				dataPoints: this.setDeathCntData()
			},
			{
				type: "spline",
				yValueFormatString: "#,###명(人)",
				showInLegend: true,
				name: "치료중 환자 수(治療中の患者数)",
				dataPoints: this.setCareCntData()
			}
		]
		}
		return (
			<div>
				<div className = "chartPosition">
					<div style={{height: 25+"em", width: 49.7+"%"}}>
						<CanvasJSChart options = {bar_options}/>
					</div>
					<div style={{height: 25+"em", width: 49.89+"%"}}>
						<CanvasJSChart options = {spline_options}/>
					</div>
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