
import React, { Component } from 'react';
import './MapView.css';
import store from '../../store';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import { Map, GoogleApiWrapper, Marker, InfoWindow } from "react-google-maps";

class MapView extends Component {

    constructor(props) {
        super(props);

        store.subscribe(()=>{
            const _store = store;
            this.setState({
                showingInfoWindow: _store.getState().showingInfoWindow,
                activeMarker: _store.getState().activeMarker,
                selectedPlace: _store.getState().selectedPlace
            });
        })
    }
    
    state = {
        showingInfoWindow: store.getState().showingInfoWindow,
        activeMarker: store.getState().activeMarker,
        selectedPlace: store.getState().selectedPlace
    }

    onClickMap = (props) =>{
        console.log("onClickMap");
        
        if (store.getState().showingInfoWindow) {
            store.dispatch({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    onClickMarker = (props, marker, event) => {
        console.log("onClickMarker: " + this.props.data);
        store.dispatch({
            type: 'markerClick',
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        // this.setState({
        //     selectedPlace: props,
        //     activeMarker: marker,
        //     showingInfoWindow: true
        // });
    }
    onMouseoverMarker = (props, marker, event) => {
        console.log(this.props.data);
        if (this.props.data.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    }

    render() {
        const mapStyle = {
            width: '100%',
            height: '65%'
        }

        const { storeInfo } = this.props;

        return (
            <div>
              <Map
                google={ this.props.google }  
                zoom={ 11 }
                style={ mapStyle }
                onClick = { this.onClickMap }
                initialCenter={{ 
                    lat: 37.5855683, 
                    lng: 127.0006014
                }}
              >
                {storeInfo.map((info, index) => (
                    <Marker
                        key = { info.code }
                        title = { info.name }
                        onClick = { this.onClickMarker }
                        label = { index.toString() }
                        position = {{ 
                            lat: info.lat, 
                            lng: info.lng 
                        }}
                    >
                        <InfoWindow 
                            key = { info.code }
                            marker = { this.state.activeMarker }
                            visible = { true }
                        >
                                <div>
                                <h1>test</h1>
                            </div>
                        </InfoWindow>
                    </Marker>
                ))}
                {/* <InfoWindow 
                    marker = { store.getState().activeMarker }
                    visible = { store.getState().showingInfoWindow }
                >
                    <div>
                        <h1>test</h1>
                    </div>
                </InfoWindow> */}
                </Map>
            </div>  
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMzkOPyQ1RPR-lqB1JHwiIIzxT7E0f0Lg'
  })(MapView);
