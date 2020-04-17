
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
    }

    getApiData = async () => {
      const {data:{response:{body:{items:{ item }}}}} = await axios.get(COVID_STATUS_KOREA);
      const {data:{ storeInfos }} =  await axios.get(MASK);

      this.setState({ storeInfo : storeInfos, storcovidInfoOfKoreaeInfo:item, isLoading : false });
      console.log("App.js : "+this.state);
      console.log(this.state);
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
                data = { this.state.storcovidInfoOfKoreaeInfo }
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