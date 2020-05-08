
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import MapView from './components/MapView/MapView.js';
import BarChart from './components/chart/BarChart';
import { MASK, COVID_STATUS_KOREA, COVID_STATUS_WORLD } from './api/api';

class App extends Component {
    
    constructor(props) {
      super(props);
      this.myRef  = React.createRef();
    }
    state = {
      storeInfo :[],
      isLoading : true,
      covidInfoOfWorldInfo :[],
      covidInfoOfKoreaInfo :[]

    }

    getApiData = async () => {
      const date = new Date();
      
      const yesterday = date.getFullYear() +"0"+ (date.getMonth()+1) + (this.addZero(date.getDate()-1));
      const twoMonthsAgo = date.getFullYear() +"0"+ (date.getMonth()-1) + (this.addZero(date.getDate()-1));
      const _today = date.getFullYear() +"0"+ (date.getMonth()+1) + (this.addZero(date.getDate()));
      const queryStr_twoMonthsAgo = "&startCreateDt="+twoMonthsAgo +"&endCreateDt="+_today;
      const queryStr_yesterday = "&startCreateDt="+yesterday +"&endCreateDt="+_today;

      console.log("API Data");
      console.log(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      console.log(COVID_STATUS_WORLD + queryStr_yesterday);
      console.log("==================================");

      const {data:{response:{body:{items}}}} = await axios.get(COVID_STATUS_KOREA + queryStr_twoMonthsAgo);
      const {data:{response:{body:{items:_items}}}} = await axios.get(COVID_STATUS_WORLD + queryStr_yesterday);
      const {data:{ storeInfos }} =  await axios.get(MASK);
      
      this.setState({ storeInfo : storeInfos, covidInfoOfWorldInfo:_items, covidInfoOfKoreaInfo:items, isLoading : false });
    }

    addZero(value) {
      let date = "0" + value;
      return date.substring(-2)
    }
    
    componentWillMount() {
      this.getApiData();
    }

    render() {
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
                    _data = { this.state.covidInfoOfKoreaInfo }
                    data = { this.state }
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

export default App;