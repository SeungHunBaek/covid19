import * as React from 'react';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import axios from 'axios';

interface Props {
}
interface State {
}


class HomeIndex extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
 
  state: State  = {
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/api/world')
    .then(res => res.json())
    .then(data => 
      // this.setState({username:data.username})
      // this.print_test(data.message)
      console.log(data)
    ).catch((error) => {
      if (error.response) { 
        // if there is response, it means its not a 50x, but 4xx

      } else {   
        // gets activated on 50x errors, since no response from server
        // do whatever you want here :)
      }            
    });
  };
  print(str:string){
    console.log("Frontend print()=====================");
    console.log(str);
    console.log("==================================");
  }

  print_test = async (str:string) => {
    console.log("getApiKoreaData() Start");
    const { data : { message } } 
     =  await axios.get('http://localhost:3001/api/test');
     console.log(message);
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