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
        return {...state}
    }
    return state;
});