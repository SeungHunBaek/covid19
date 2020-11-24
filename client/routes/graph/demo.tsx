import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Demo from '../../pages/demo';
import koreaData from '../../pages/koreaData';


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
      <Switch>
        {/* <Route path='/koreaData' exact component={() => <koreaData/>}/> */}
      </Switch>
      // <div>
    )
  }
}

export default DemoIndex;