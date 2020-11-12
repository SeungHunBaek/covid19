import * as React from 'react';
import Layout from './Layout';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
}
interface State {
  username: string
}



class App extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);
    this.state = {
        username:null
    };
  }
 
  state: State  = {
    username: ""
  }
  
  // componentDidMount() {
  //   fetch('http://localhost:3001/api')
  //   .then(res => res.json())
  //   .then(data => 
  //     this.setState({username:data.username}));
  // };

  render() {
    return (
      <Navigation/>
      // <Layout>
      //   <Header/>
      // </Layout>
    )
  }
}

export default App;