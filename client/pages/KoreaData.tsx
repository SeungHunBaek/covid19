// import * as React from 'react';
import * as React from 'react';
import Navigation from '../components/Navigation';
import LineChartFromat from '../components/LineChartFromat';

class KoreaData extends React.PureComponent {

  render() {
    return (        
      <div>
        <Navigation/>
	      <LineChartFromat/>
      </div>  
    );
  }
}


export default KoreaData;