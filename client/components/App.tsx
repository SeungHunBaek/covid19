import * as React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';

interface Props {
}
interface State {
}


class App extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
 
  state: State  = {
  }
  
  // componentDidMount() {
  //   fetch('http://localhost:3001/api')
  //   .then(res => res.json())
  //   .then(data => 
  //     this.setState({username:data.username}));
  // };

  render() {
    return (
      <div>
        <Navigation/>
        <Intro></Intro>
      </div>
    )
  }
}

export default App;