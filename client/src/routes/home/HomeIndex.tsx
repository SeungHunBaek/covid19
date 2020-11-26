import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';

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

      </div>
    )
  }
}

export default App;