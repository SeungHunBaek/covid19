import * as React from 'react';

interface Props {
}
interface State {
  username: string
}

class App extends React.Component<Props,State> {

  // constructor(props:Props) {
  //   super(props);
  //   this.state = {
  //       username:null
  //   };
  // }
 
  state: State  = {
    username: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => 
      this.setState({username:data.username}));
  }

  render() {
    return (
      <div>
        <h1>React + Typescript + Webpack</h1>
        <h2>Welcome! Now you can create your own project!</h2>
      </div>
    )
  }
}

export default App;