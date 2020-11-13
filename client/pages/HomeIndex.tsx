import * as React from 'react';
import Navigation from '../components/Navigation';
import Main from '../components/Main';

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
        <Main></Main>
      </div>
    )
  }
}

export default HomeIndex;