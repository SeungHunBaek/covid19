
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import './App.scss';
import MapView from './components/MapView/MapView';
import BarChart from './components/chart/BarChart';
import { MASK, COVID_STATUS_KOREA, COVID_STATUS_WORLD } from './api/api';


interface State  {
  storeInfo :any;
  isLoading : boolean;
  covidInfoOfWorldInfo :any;
  covidInfoOfKoreaInfo :any;
}

class AppMain extends Component<{},State> {
    
    // constructor(props) {
    //   super(props);
    //   this.myRef  = React.createRef();
    // }

    state = {
      storeInfo :[],
      isLoading : true,
      covidInfoOfWorldInfo :[],
      covidInfoOfKoreaInfo :[]
    }

    // API데이터 요청
    getApiData = async () => {
      const date = new Date();
      // 과거 2개월 전 날짜 취득
      const twoMonthsAgo = date.getFullYear() + (this.addZero(date.getMonth()-1)) + (this.addZero(date.getDate()-1));
      // 현재 날짜 취득
      const _today = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()));
      // 2개월전 ~ 오늘까지의 String query작성
      const queryStr_twoMonthsAgo = "&startCreateDt="+twoMonthsAgo +"&endCreateDt="+_today;
      // 하루 전 ~ 오늘까지의 String query작성
      const queryStr_yesterday = "&startCreateDt="+this.getSearchDate(date) + "&endCreateDt="+this.getSearchDate(date);
      console.log("==================================");
      console.log("API");
      console.log(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      console.log(COVID_STATUS_WORLD + queryStr_yesterday);
      console.log("==================================");
      // 한국 코로나 현황 2개월분 데이터 취득(비동기)
      const {data:{response:{body:{items}}}} = await axios.get(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      // 전세계 코로나 현황 현재분 데이터 취득(비동기)
      const {data:{response:{body:{items:_items}}}} = await axios.get(COVID_STATUS_WORLD + queryStr_yesterday);
      // 공적마스크 판매처 데이터 취득(비동기)
      const {data:{ storeInfos }} =  await axios.get(MASK);
      // 현재 state에 저장     
      this.setState({ storeInfo : storeInfos, covidInfoOfWorldInfo:_items, covidInfoOfKoreaInfo:items, isLoading : false });
    }
    // 검색시작 날짜취득 처리
    getSearchDate(date: Date) {
      // 어제 날짜 취득
      let target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()));
      // 현재 시간이 12:00이전인 경우 어제 날짜 반환
      if(date.getHours() < 12){
        target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()-1));
      }
      return target;
    }
    // 날짜 형식 변환처리
    addZero(value: number) {
      return ("0" + value).slice(-2);
    }
    
    componentWillMount() {
      this.getApiData();
    }

    render () {
        return (
          <div>
            {
              this.state.isLoading ? (
              <div>
                Loading...
              </div>
              )
              :
              (
              <div>
                <div className="App-header">
                  Covid-19 Cart
                </div>
                <div >
                  <BarChart 
                    data = { this.state }
                    _data = { this.state.covidInfoOfKoreaInfo }
                    />
                </div>
                <div className="App-header">
                    Covid-19 Mask Map
                </div>
                <div className="MapView">
                  <MapView 
                    data = { this.state }
                    storeInfo = { this.state.storeInfo }
                    />
                </div>
              </div>
              )
           }
          </div>
        );
    }
}

export default AppMain;
// export const Form: React.FunctionComponent = ({ children }) => <form />;