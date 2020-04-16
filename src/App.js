
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import MapView from './components/MapView/MapView.js';

class App extends Component {
    
    constructor(props) {
      super(props);
      this.myRef  = React.createRef();
    }
    state = {
      storeInfo :[],
      isLoading : true,
    }

    getApiData = async () => {
      const { data : { storeInfos } } 
       =  await axios.get(
        'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1'
      );

      this.setState({ storeInfo : storeInfos, isLoading : false });

    }
    
    componentDidMount() {
      this.getApiData();
    }

    render() {
        return (
          <div>
            <div className="App-header">
              Covid-19 Map
            </div>
            {
              this.state.isLoading ? (
              <div>
                Loading...
              </div>
              )
              :
              (
               <MapView 
                data = { this.state }
                storeInfo = { this.state.storeInfo }
                
                />
              )
          }
          </div>
        );
    }
}

export default App;