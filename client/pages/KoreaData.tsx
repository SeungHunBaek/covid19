// import * as React from 'react';
import * as React from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import LineChartFromat from '../components/LineChartFromat';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { COVID_STATUS_KOREA } from "../assets/api";

// API요청 처리에 따라 interface가 필요없을수도
interface KoreaDataProps {

}
interface KoreaDataState {

}
class KoreaData extends React.PureComponent<RouteComponentProps<KoreaDataProps>,KoreaDataState> {

  constructor(props:RouteComponentProps<KoreaDataProps>){
    super(props);

    this.state ={

    }
  }
  componentDidMount(){
    // 빅데이터api요청
    // this.getApiKoreaData()
  }

  getApiKoreaData = async () => {
    console.log("getApiKoreaData() Start");
    const { data : { storeInfos } } 
     =  await axios.get(
      COVID_STATUS_KOREA
    );

  }


  render() {
    return (        
      <div>
        <Navigation/>
	      <LineChartFromat/>
      </div>  
    );
  }
}


export default KoreaData;