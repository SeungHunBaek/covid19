// import * as React from 'react';
import * as React from 'react';
import Navigation from '../components/Navigation';
import LineChartFromat from '../components/LineChartFromat';
import styled from 'styled-components';

const Wrapper = styled.div`    
    .carousel .carousel-inner{
        height:885px
    }
    .carousel-inner .carousel-item img{
        min-height:200px;
        object-fit:cover
        align-items: center;
    }
    .carousel-inner .carousel-item .carousel-caption{
        padding-bottom: 107px;
    }
    .carousel-inner .carousel-item .carousel-indicators{
        padding-bottom: 107px;
    }
    
    @media(max-width:768px){
    .carousel .carousel-inner{
        height:auto
        }
    }
`;

class KoreaData extends React.PureComponent {

  render() {
    return (        
      <div>
        <Navigation/>
		<Wrapper>

		<LineChartFromat/>
		</Wrapper>
      </div>  
    );
  }
}


export default KoreaData;