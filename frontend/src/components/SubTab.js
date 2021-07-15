import React from 'react';
import './SubTab.css';

class SubTab extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <span className='subTab' onClick={this.props.cumulative}>
                    누진 확진자 추이
                </span>
                <span className='subTab' onClick={this.props.daily}>
                    일별 신규 확진자수
                </span>
            </div>
        )
    }
}


export default SubTab;