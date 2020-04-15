import { createStore } from 'redux';
export default createStore ((state, action) => {
    if( state === undefined ){
        console.log('createStore() start');
        return {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    if (action.type === 'markerClick'){
        console.log('markerClick() action : '+ action.type +", state: "+ action.activeMarker);
        console.dir("action: "+ action.activeMarker);
        return {...action, showingInfoWindow: false, activeMarker: action.activeMarker, selectedPlace: action.selectedPlace}
    }
    return state;
});