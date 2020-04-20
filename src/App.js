
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import MapView from './components/MapView/MapView.js';
import BarChart from './components/chart/BarChart';
import { MASK, COVID_STATUS_KOREA } from './api/api';

class App extends Component {
    
    constructor(props) {
      super(props);
      this.myRef  = React.createRef();
    }
    state = {
      storeInfo :[],
      isLoading : true,
      storcovidInfoOfKoreaeInfo :[]
      ,_storcovidInfoOfKoreaeInfo :[]
    }

    getApiData = async () => {
      const date = new Date();
      const yesterday = date.getFullYear() +"0"+ (date.getMonth()+1) +""+ (date.getDate()-1);
      const today = date.getFullYear() +"0"+ (date.getMonth()+1) +""+ (date.getDate());
      const url = COVID_STATUS_KOREA + "&startCreateDt="+yesterday +"&endCreateDt="+today;
      const {data:{response:{body:{items:{ item }}}}} = await axios.get(url);
      
      const _yesterday = date.getFullYear() +"0"+ (date.getMonth()-2) +""+ (date.getDate()-1);
      const _today = date.getFullYear() +"0"+ (date.getMonth()+1) +""+ (date.getDate());
      const _url = COVID_STATUS_KOREA + "&startCreateDt="+_yesterday +"&endCreateDt="+_today;
      const {data:{response:{body:{items}}}} = await axios.get(_url);

      const {data:{ storeInfos }} =  await axios.get(MASK);
      
      this.setState({ storeInfo : storeInfos, storcovidInfoOfKoreaeInfo:item, _storcovidInfoOfKoreaeInfo:items, isLoading : false });
      this.setState({ storeInfo : storeInfos, storcovidInfoOfKoreaeInfo:item, isLoading : false });
    }
    
    componentWillMount() {
      this.getApiData();
      console.log(this.state);
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
                data = { this.state.storcovidInfoOfKoreaeInfo }
                _data = { this.state._storcovidInfoOfKoreaeInfo }
                />
               </div>
               <div className="App-header">
                Covid-19 Mask Map
               </div>
               <MapView 
                data = { this.state }
                storeInfo = { this.state.storeInfo }
                
                />
              </div>
              )
           }
          </div>
        );
    }
}

export default App;