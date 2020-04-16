import React, { Component } from 'react';
import axios from 'axios';
import './MapView.css';
import store from '../../store';
import { SEARCH_ADD } from '../../api/api';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapView extends Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        selectedStoreInfo: {},
        showingInfoWindow: false
    };
    
    getStoreInfo = async () => {
        let selectedCode = this.state.selectedPlace.codeInfo;
        let addr = this.state.selectedPlace.addr;
        let splitStr = addr.split(" ");
        //console.log(SEARCH_ADD +splitStr[0]+" "+ splitStr[1]);
        const { data } = await axios.get(SEARCH_ADD +splitStr[0]+" "+ splitStr[1]);    
        for (let i = 0; i < data.count; i++) {
            if(data.stores[i].code === selectedCode) {
                this.setState({
                    selectedStoreInfo: data.stores[i],
                    showingInfoWindow: true
                })
                break;
            }
        }
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props
        });
        this.getStoreInfo();
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

    getRemain_stat = (data) => {
        let resultStr = '';

        switch(data) {
            case 'plenty' :
                resultStr = "100개 이상(100個以上) ";
                break;
            case 'some'  :
                resultStr = "30개 이상(30個以上) ~ 100개 미만(30個未満) ";
                break;
            case 'few'  :
                resultStr = "2개 이상(2個以上) ~ 30개 미만(30個未満)";
                break;
            case 'empty'  :
                resultStr = "1개 이하(1個以下) ";
                break;
            case 'break'  :
                resultStr = "판매중지(販売中止)";
                break;
        }
        return resultStr;
    }
    
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
                    addr = { info.addr }
                    codeInfo = { info.code }
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
                <h5>가게이름(名称) : {this.state.selectedPlace.title}</h5>
                <h5>주소(住所) : {this.state.selectedPlace.addr}</h5>
                <h5>코드(コード) : {this.state.selectedStoreInfo.code}</h5>
                <h5>재고 상황(在庫状況) : {this.getRemain_stat(this.state.selectedStoreInfo.remain_stat)}</h5>
                <h5>데이터 갱신(データ更新時間) : {this.state.selectedStoreInfo.created_at}</h5>
              </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMzkOPyQ1RPR-lqB1JHwiIIzxT7E0f0Lg'
  })(MapView);
