import React, { Component } from 'react';
import './Summary.css';

// // 숫자[,]추가처리
// const numberWithCommas = (x) => {
//   if(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
// }

// const dispData = (data) => {
//   if(data[0]) return numberWithCommas(data[0].decideCnt);
// }

// export default function Summary(props) {
//   if(!props) return
//   if(!props.infState) return
//   console.log(props.infState)
//   return (
//     <div>
//       <header>
//         <div className='align-row'>
//             <div className='cell-box'>
//                 <h3>
//                     총확진환자
//                 </h3>
//                 <h3>
//                     {props.infState[0].decideCnt}
//                 </h3>
//             </div>
//             <div className='cell-box'>
//                 <h3>
//                     추가확진환자
//                 </h3>
//                 <h3>
//                 </h3>
//             </div>
//             <div className='cell-box'>
//                 <h3>
//                     격리해제
//                 </h3>
//             </div>
//             <div className='cell-box'>
//                 <h3>
//                     사망자
//                 </h3>
//             </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// Summary.defaultProps = {
//   infState: [{
//     decideCnt: 161541
//   }]
// }


class Summary extends Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate = (prevProps, prevState) => { //componentDidUpdate가 props의 변과를 감지한다
    if (this.props.infState !== prevProps.infState) { //하위컴포넌트가 받은 props값 적어주기(둘다)
      console.log(prevProps); 
      console.log(prevState); 

      this.setState({
        ...this.state
      });
      console.log(this.state); 
    }
  };

  render() {
    return (
      <div>
        <header>
          <div className='align-row'>
              <div className='cell-box'>
                  <h3>
                      총확진환자
                  </h3>
                  <h3>
                      {/* {props.infState[0].decideCnt} */}
                  </h3>
              </div>
              <div className='cell-box'>
                  <h3>
                      추가확진환자
                  </h3>
                  <h3>
                  </h3>
              </div>
              <div className='cell-box'>
                  <h3>
                      격리해제
                  </h3>
              </div>
              <div className='cell-box'>
                  <h3>
                      사망자
                  </h3>
              </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Summary;