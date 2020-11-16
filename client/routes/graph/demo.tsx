import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Demo from '../../pages/demo';

interface Props {
}
interface State {
}


class DemoIndex extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
 
  state: State  = {
  }


  render() {
    return (
      <div>
        <Navigation/>
        <Demo></Demo>
      </div>
    )
  }
}

export default DemoIndex;