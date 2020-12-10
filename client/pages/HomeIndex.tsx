import * as React from 'react';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import axios from 'axios';

interface Props {
}
interface State {
  worldData: JSON
}

class HomeIndex extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      worldData :null
    };
  }
  //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
  componentWillMount(){
    this.print_test("http://localhost:3001/api/world");
  }
  //컴포넌트가 만들어지고 render가 호출된 이후에 호출.
  componentDidMount() {
    // fetch('http://localhost:3001/api/world')
    // .then(res => res.json())
    // .then(data =>{
    //   this.setState({worldData:JSON.parse(data).response.body.items});
    // } 
    // ).catch((error) => {
    //   if (error.response) { 
    //     // if there is response, it means its not a 50x, but 4xx
    //   } else {   
    //     // gets activated on 50x errors, since no response from server
    //     // do whatever you want here :)
    //   }            
    // });
  };

  print_test = async (url:string) => {
    console.log("print_test() Start");
    const {data:{response:{body:{items}}}} = await axios.get(url);
    this.setState({ worldData: items });
    console.log(this.state.worldData);
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Main></Main>
      </div>
    )
  }
}

export default HomeIndex;