import * as React from 'react';
import Layout from './Layout';
import Header from './Header';

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
      <Layout>
        <Header/>

        <h1>React + Typescript + Webpack</h1>
        <h2>Welcome! Now you can create your own project!</h2>
      </Layout>
    )
  }
}

export default App;