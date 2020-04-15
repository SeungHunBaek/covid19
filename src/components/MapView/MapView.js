
import React, { Component } from 'react';
import './MapView.css';
import store from '../../store';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapView extends Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });
    }
        
    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    }   
    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    };
    
      render() {
        const mapStyle = {
            width: '100%',
            height: '65%'
        }
        let { storeInfo } = this.props;
        return (
          <Map
            google={ this.props.google }
            onClick={ this.onMapClicked }
            style={ mapStyle }
            zoom={ 11 }
            initialCenter={{ 
                lat: 37.5855683, 
                lng: 127.0006014
            }}
          >
            {storeInfo.map(info => (
                <Marker
                    key = { info.code }
                    title = { info.name }
                    onClick = { this.onMarkerClick }
                    position = {{ 
                        lat: info.lat, 
                        lng: info.lng 
                    }}
                />
            ))}
            <InfoWindow
              marker = { this.state.activeMarker }
              onClose = { this.onInfoWindowClose }
              visible = { this.state.showingInfoWindow }
            >
              <div>
                <h4>{this.state.selectedPlace.title}</h4>
              </div>
            </InfoWindow>
          </Map>
        );
      }
}

// class MapView extends Component {
    
//     state = {
//         showingInfoWindow: store.getState().showingInfoWindow,
//         activeMarker: store.getState().activeMarker,
//         selectedPlace: store.getState().selectedPlace
//     }

//     onClickMap = (props) =>{
//         console.log("onClickMap");
//         if (this.state.showingInfoWindow) {
//             store.dispatch({
//                 showingInfoWindow: false,
//                 activeMarker: null
//             })
//         }
//     }

//     onClickMarker = (props, marker, event) => {
//         console.log("onClickMarker: " + this.props.data);
//         store.dispatch({
//             type: 'markerClick',
//             selectedPlace: props,
//             activeMarker: marker,
//             showingInfoWindow: true
//         });
//         // this.setState({
//         //     selectedPlace: props,
//         //     activeMarker: marker,
//         //     showingInfoWindow: true
//         // });
//     }
//     onMouseoverMarker = (props, marker, event) => {
//         console.log(this.props.data);
//         if (this.props.data.showingInfoWindow) {
//           this.setState({
//             showingInfoWindow: false,
//             activeMarker: null
//           })
//         }
//     }

//     render() {
//         const mapStyle = {
//             width: '100%',
//             height: '65%'
//         }
//         const { storeInfo } = this.props;

//         return (
//             <div>
//               <Map
//                 google={this.props.google} 
//                 zoom={ 11 }
//                 style={ mapStyle }
//                 onClick = { this.onClickMap }
//                 initialCenter={{ 
//                     lat: 37.5855683, 
//                     lng: 127.0006014
//                 }}
//               >
//                 {/* {storeInfo.map(info => ( */}
//                 <Marker
//                     key = { info.code }
//                     title = { info.name }
//                     onClick = { this.onClickMarker }
//                     position = {{ 
//                         lat: info.lat, 
//                         lng: info.lng 
//                     }}
//                 />
//                 // ))}
//                 <InfoWindow 
//                     marker = { this.props.data.activeMarker }
//                     visible = {true}
//                 >
//                     <div>
//                         <h1>test</h1>
//                     </div>
//                 </InfoWindow>
//                 </Map>
//             </div>  
//         );
//     }
// }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMzkOPyQ1RPR-lqB1JHwiIIzxT7E0f0Lg'
  })(MapView);
