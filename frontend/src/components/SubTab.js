import React from 'react';
import './SubTab.css';

class SubTab extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let selectedCharts;
        if(this.props.chartState === 1){            
            selectedCharts =
                <div className='align-row'>
                    <span className='subTab' onClick={this.props.daily}>
                        ◯ 일별 신규 확진자수
                    </span>
                    <span className='selected-charts' onClick={this.props.cumulative}>
                        ● 누진 확진자 추이
                    </span>
                </div>
        } else {
            selectedCharts =
                <div className='align-row'>
                    <span className='selected-charts' onClick={this.props.daily}>
                        ● 일별 신규 확진자수
                    </span>
                    <span className='subTab' onClick={this.props.cumulative}>
                        ◯ 누진 확진자 추이
                    </span>
                </div>
        }
        return (
            <div>
                {selectedCharts}
            </div>
        )
    }
}


export default SubTab;