import React, { Component } from 'react';
import axios from 'axios';
import './MapView.css';
import { SEARCH_ADD } from '../../api/api';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

interface DataProps {
    data: any;
    storeInfo: any;
    google: any;
}

interface SelectedPlace {
    codeInfo: any;
    addr: any;
    title: any;
}
interface SelectedStoreInfo {
    code: any;
    remain_stat: any;
    created_at: any;
}

interface DataState {
    selectedPlace: SelectedPlace ;
    activeMarker: object|null|any ;
    selectedStoreInfo: SelectedStoreInfo;
    showingInfoWindow: boolean;
}

class MapView extends Component<DataProps,DataState> {
    state:DataState = {
        selectedPlace: {
            codeInfo: null,
            addr: null,
            title: null,
        },
        activeMarker:{},
        selectedStoreInfo: {
            code: null,
            remain_stat: null,
            created_at: null
        },
        showingInfoWindow: false
    };
    // 선택한 판매처 정보취득 처리
    getStoreInfo = async () => {
        let selectedCode = this.state.selectedPlace.codeInfo;
        let addr = this.state.selectedPlace.addr;
        let splitStr = addr.split(" ");
        // 주소로 해당 위치에 존재하는 점포들 취득
        const { data } = await axios.get(SEARCH_ADD +splitStr[0]+" "+ splitStr[1]);    
        for (let i = 0; i < data.count; i++) {
            // 점포 코드를 검색
            if(data.stores[i].code === selectedCode) {
                this.setState({
                    selectedStoreInfo: data.stores[i],
                    showingInfoWindow: true
                })
                break;
            }
        }
    }
    // 선택 마커정보 저장
    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props
        });
        this.getStoreInfo();
    }
    // 정보창 초기화 처리
    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    }
    // 정보창 표시 처리
    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    };
    // 표시데이터 변환처리
    getRemain_stat = (data:string) => {
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
            default:
                break;
        }
        return resultStr;
    }
    
    render() {
        // const mapStyle = {
        //     width: '100%',
        //     height: '100%'
        // }
        let { storeInfo } = this.props;
        return (
          <Map
            google={ this.props.google }
            onClick={ this.onMapClicked }
            // style={mapStyle}
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
