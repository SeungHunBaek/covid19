// import * as React from 'react';
import * as React from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import LineChartFromat from '../components/LineChartFromat';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { COVID_STATUS_WORLD } from "../assets/api";

interface WorldDataProps {

}
interface WorldDataState {
  worldData: JSON
}
class WorldData extends React.PureComponent<RouteComponentProps<WorldDataProps>,WorldDataState> {

  constructor(props:RouteComponentProps<WorldDataProps>){
    super(props);
    this.state = {
      worldData :null
    };
  }

  //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
  UNSAFE_componentWillMount(){
    console.log("[worldData]:componentWillMount()")
    this.getApiWorldData("http://localhost:3001/api/world");
  }
  componentDidMount(){

  }

  getApiWorldData = async (url:string) => {
    console.log("print_test() Start");
    const {data:{response:{body:{items}}}} = await axios.get(url);
    console.log("=========");
    console.log("[items]: "+items);
    this.setState({ worldData: items });

    console.log(this.state.worldData)
    
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


export default WorldData;