import React, { Component } from 'react';
import CanvasJSReact  from '../../lib/canvasjs.react';
import './_Barchart.css';
import * as NactionCode from '../../api/constans';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface DataProps {
	_data: any;
	data: any;
}
interface State {
	
		// todaysState: any;
		// checkupInfo: any;
	
		// decideCnt: number;						// 확진자 수
		// clearCnt: number;							// 격리해제 수
		// examCnt: number;							// 검사진행 수 1
		// deathCnt: number;							// 사망자 수
		// careCnt: number;							// 치료중 환자 수
		// resutlNegCnt: number;					// 결과 음성 수 1
		// accDefRate: string;				// 누적 확진률 1
		// accExamCnt: number;						// 누적 검사 수
		// accExamCompCnt: number;					// 누적 검사 완료 수
		// seq: number;								// 게시글번호(감염현황 고유값)
		// stateDt: number;						// 기준일
		// stateTime: string;						// 기준시간
		// createDt: string;	// 등록일시분초 
		// updateDt: string;						// 수정일시분초
	
}

class BarChart extends Component<DataProps, State> {

	state = {
		todaysState:[],
		checkupInfo:[],

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
		const stateDt = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()-1));
		//const stateDt = date.getFullYear() +"0"+ (date.getMonth()+1) + (date.getDate()-1);
		const propsData = this.props._data.item;
		
		for (let i = 0; i < propsData.length; i++) {
			
			if(stateDt === String(propsData[i].stateDt)) {
				this.setState({
					todaysState: propsData[i]
				})
				break;
			}
		}
	}
	setCheckupInfoData = () => {
		const propsData = this.props._data.item;
		let graphData : any[] = [];
		
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
		let graphData : any[] = [];
		
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
		let graphData : any[] = [];
		
		for (let i = 0; i < propsData.length; i=i+10) {
			const dateStr: string = propsData[i].stateDt+"";
			graphData.push({
				x: new Date(dateStr.substring(0,4)+"-"+dateStr.substring(4,6)+"-"+dateStr.substring(6,8)),
				y: propsData[i].careCnt,
				indexLabel: this.numberWithCommas(propsData[i].careCnt)
				
			});
		}
		return graphData;
	}
	setBarchartData = () => {
		const todaysState :any = this.state.todaysState;
		const graphData :any[] = [
			{ y: todaysState.accExamCnt, label: "누적검사", indexLabel: "累積検査数:　"+this.numberWithCommas(todaysState.accExamCnt),indexLabelFontColor: "black"},
			{ y: todaysState.resutlNegCnt, label: "누적음성수", indexLabel: "累積陰性数:　"+this.numberWithCommas(todaysState.resutlNegCnt) },
			{ y: todaysState.decideCnt, label: "확진자수", indexLabel: "感染者数:　"+this.numberWithCommas(todaysState.decideCnt)},
			{ y: todaysState.clearCnt, label: "격리해제", indexLabel: "隔離解除数:　"+this.numberWithCommas(todaysState.clearCnt)},
			{ y: todaysState.careCnt, label: "치료중", indexLabel: "治療中:　"+this.numberWithCommas(todaysState.careCnt)}
		];

		return graphData;
	}
	setStackedBarchartData = (type) => {
		const worldInfos: any[] = this.props.data.covidInfoOfWorldInfo.item;
		//const worldInfosLength = worldInfos.length;
		const worldInfosLength = worldInfos.length > 300 ? parseInt(String(worldInfos.length / 2)) + 1: worldInfos.length ;
		//worldInfosLength > 300 ? parseInt(worldInfosLength / 2) + 1: 
		let graphData : any[] = [];
		
		for (let i = 0; i < worldInfosLength; i++) {
		//for (let i = 0; i < worldInfosLength; i++) {
			const nation_name = worldInfos[i].nationNmEn;
			
			switch(nation_name) {
				case NactionCode.AMERICA_NAME :
					if(type === "infectedPerson") {
						graphData.push({
							label: "America",
							y: worldInfos[i].natDefCnt,
							name: "확진자(感染者)",
							indexLabel: this.numberWithCommas(worldInfos[i].natDefCnt),
							indexLabelPlacement: "inside",
							indexLabelFontColor: "black"
						});
					} else if(type === "deadPerson") {
						graphData.push({
							label: "America",
							y: worldInfos[i].natDeathCnt,
							name: "사망자(死亡者)",
							indexLabel: this.numberWithCommas(worldInfos[i].natDeathCnt),
							indexLabelPlacement: "inside",
							indexLabelFontColor: "black"
						});
					}
					break;
				case NactionCode.CANADA_NAME :
				case NactionCode.BRAZIL_NAME :
				case NactionCode.KOREA_NAME :
				case NactionCode.CHINA_NAME :
				case NactionCode.JAPAN_NAME :
				case NactionCode.RUSSIA_NAME :
				case NactionCode.ITALY_NAME :
				case NactionCode.FRANCE_NAME :
				case NactionCode.UK_NAME :
				case NactionCode.SPAIN_NAME :
					if(type === "infectedPerson") {
						graphData.push({
							label: worldInfos[i].nationNmEn,
							y: worldInfos[i].natDefCnt,
							name: "확진자(感染者)",
							indexLabel: this.numberWithCommas(worldInfos[i].natDefCnt),
							indexLabelPlacement: "inside",
							indexLabelFontColor: "black"
						});
					} else if(type === "deadPerson") {
						graphData.push({
							label: worldInfos[i].nationNmEn,
							y: worldInfos[i].natDeathCnt,
							name: "사망자(死亡者)",
							indexLabel: this.numberWithCommas(worldInfos[i].natDeathCnt),
							indexLabelPlacement: "inside",
							indexLabelFontColor: "black"
						});
					}
				break;
				default: 
				break;
			}
		}
		graphData.sort(this.compareCnt);

		return graphData;
	}

	numberWithCommas = (x) => {
		
		return parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
		
	componentWillMount() {
		this.preProccess()
	}
	compareCnt(compare1, compare2) {
		return compare1.y - compare2.y;
	}
	addZero(value) {
		let date = "0" + value;
		return date.slice(-2)
	}
	
	
	render() {
		const bar_options = {
			
			animationEnabled: true, 
			
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
				labelFontColor: "black"
			},
			axisY: {
				title: "",
				labelFontColor: "black",
				scaleBreaks: {
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
				text: "국내 날짜별 현황",
				fontFamily: "arial",
				fontWeight: "normal",
				fontSize: 30
			},
			subtitles:[
				{
					text: "韓国の日付別状況"
				}
			],
			axisX: {
				intervalType: "day",
				valueFormatString: "MM-DD",
				interval: 5
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
		const stackedBar_options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "해외 코로나 누적현황 ",
				fontFamily: "arial",
				fontWeight: "normal",
				fontSize: 30,
			},
			subtitles:[
				{
					text: "海外のコロナ累積状況"
				}
			],

			axisX: {
				labelFontColor: "black"
			},
			axisY: {
				labelFontColor: "black",
				scaleBreaks: {
					autoCalculate : true ,
					collapsibleThreshold : "50 %" ,
					type: "wavy",
					lineColor: "#c7ccd8"
				},
				suffix: "명(人)"
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
			//	itemclick: this.toggleDataSeries
			},
			  data: [
			  {
				type: "stackedBar",
				legendText: "확진자(感染者)",
				showInLegend: "true",
				color: "rgba(63,81,181,.9)",
				dataPoints: this.setStackedBarchartData("infectedPerson")
			  },
				{
				type: "stackedBar",
				legendText: "사망자(死亡者)",
				showInLegend: "true",
				color: "rgba(250,81,081,.9)",
				dataPoints: this.setStackedBarchartData("deadPerson")
			  },
	
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
				<div style={{height: 25+"em", width: 99.5+"%"}}>
						<CanvasJSChart options = {stackedBar_options}/>
				</div>
			</div>
		);
	}
	addSymbols(e: any){
		// 단위설정
		return e.value + "명";
	}
}
export default BarChart;