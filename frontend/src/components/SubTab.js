import React from 'react';
import './SubTab.css';

class SubTab extends React.Component {
    
    state = {
        chartState: 0 // 0: 국내 누적감염현황, 1: 신규 감염현황
    }

    //React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출.
    componentDidMount() {

    }

    handleToggleClick() {
        alert('a')
    }

    render() {

        return (
            <div>
                <span className='subTab' onClick={this.handleToggleClick}>
                    누진 확진자 추이
                </span>
                <span className='subTab'>
                    일별 신규 확진자수
                </span>
            </div>
        )
    }
}


export default SubTab;