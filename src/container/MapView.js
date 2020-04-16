import { connect } from 'react-redux';
import MapView from '../components/MapView/MapView'
import { GET_API_DATA } from '../action/actionIndex';

function mapReduxStateToReactProps(state){
    return {...state}
}

function mapDispatchToProps(dispatch) {

    return {

    }
}

export default connect(mapReduxStateToReactProps)(MapView);

