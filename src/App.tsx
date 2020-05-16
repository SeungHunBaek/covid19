
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


    getApiData = async () => {
      const date = new Date();
      const twoMonthsAgo = date.getFullYear() + (this.addZero(date.getMonth()-1)) + (this.addZero(date.getDate()-1));
      const _today = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()));
      
      const queryStr_twoMonthsAgo = "&startCreateDt="+twoMonthsAgo +"&endCreateDt="+_today;
      const queryStr_yesterday = "&startCreateDt="+this.getStartDate(date) + "&endCreateDt="+this.getEndDate(date);
      console.log("==================================");
      console.log("API");
      console.log(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      console.log(COVID_STATUS_WORLD + queryStr_yesterday);
      console.log("==================================");

      const {data:{response:{body:{items}}}} = await axios.get(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      const {data:{response:{body:{items:_items}}}} = await axios.get(COVID_STATUS_WORLD + queryStr_yesterday);
      const {data:{ storeInfos }} =  await axios.get(MASK);
      
      this.setState({ storeInfo : storeInfos, covidInfoOfWorldInfo:_items, covidInfoOfKoreaInfo:items, isLoading : false });
    }
    getStartDate(date: Date) {
      let target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()));

      if(date.getHours() < 12){
        target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()-1));
      }
      return target;
    }
    getEndDate(date: Date) {
      let target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()));

      if(date.getHours() < 12){
        target = date.getFullYear() + (this.addZero(date.getMonth()+1)) + (this.addZero(date.getDate()-1));
      }
      return target;
    }

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