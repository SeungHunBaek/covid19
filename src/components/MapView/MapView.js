
import React, { Component } from 'react';
import './MapView.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapView extends Component {

    render() {

        const mapStyle = {
            width: '100%',
            height: '65%'
        }
        const { storeInfo } = this.props;

        return (
            <div>
              <Map
                google={this.props.google} 
                zoom={ 11 }
                style={ mapStyle }
                initialCenter={{ 
                    lat: 37.5855683, 
                    lng: 127.0006014
                }}
              >
                {storeInfo.map(info => (
                    <Marker
                        key = {info.code}
                        title = { info.name }
                        position = {{ 
                            lat: info.lat, 
                            lng: info.lng 
                        }}
                    />
                ))}
              </Map>

            </div>  
        );

       
        // return (
        //     <div>
        //       <Map
        //         google={this.props.google} 
        //         zoom={ defaultZoom }
        //         style={ mapStyle }
        //         initialCenter={{ 
        //             lat: center.lat, 
        //             lng: center.lng
        //         }}
        //       />
        //     </div>  
        // );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMzkOPyQ1RPR-lqB1JHwiIIzxT7E0f0Lg'
  })(MapView);




// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class MapView extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyDMzkOPyQ1RPR-lqB1JHwiIIzxT7E0f0Lg' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default MapView;