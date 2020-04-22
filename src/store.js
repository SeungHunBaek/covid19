import { MARKER_CLICK } from './action/actionIndex';
import { createStore } from 'redux';
//import { combineReducers } from 'redux';


/*
 * Reducer
 */
const initMarkerInfo = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
}



// const markerInfo = (state = initMarkerInfo, action) => {
//     switch(action.type) {
//         case MARKER_CLICK: 
//             return {...action, 
//                 showingInfoWindow: false, 
//                 activeMarker: action.activeMarker, 
//                 selectedPlace: action.selectedPlace
//             }
       
//         default :
//             return state;
//     }
// }
// const apiData = (state, action) => {
// }


export default createStore ((state = initMarkerInfo, action) => {
    
    switch(action.type) {
        case MARKER_CLICK: 
            return {...action, 
                showingInfoWindow: false, 
                activeMarker: action.activeMarker, 
                selectedPlace: action.selectedPlace
            }
        
        default :
            return state;
    }
});