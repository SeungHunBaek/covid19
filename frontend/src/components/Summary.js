import React from 'react';
import './Summary.css';

export default function Summary(props) {

  // 숫자[,]추가처리
  const numberWithCommas = (x) => {
    if(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  // 총확진환자 표시
  const dispDecideCnt = () => {
    if(props.infState && props.infState[0]){
      return numberWithCommas(props.infState[0].decideCnt);
    }
  }
  // 오늘 추가 확진환자 표시
  const dispTodayDecideCnt = () => {
    if(props.infState && props.infState[0]){
      return numberWithCommas(props.infState[0].decideCnt - props.infState[1].decideCnt);
    }
  }

  // 격리해제 수 표시
  const dispClearCnt = () => {
    if(props.infState && props.infState[0]){
      return numberWithCommas(props.infState[0].clearCnt);
    }
  }

  // 사망자 수 표시
  const dispDeathCnt = () => {
    if(props.infState && props.infState[0]){
      return numberWithCommas(props.infState[0].deathCnt);
    }
  }

  // 누적검사완료 수 표시
  const dispAccExamCompCnt = () => {
    if(props.infState && props.infState[0]){
      return numberWithCommas(props.infState[0].accExamCompCnt);
    }
  }

  return (
    <div>
      <header>
        <div className='align-row'>
            <div className='cell-box'>
                <h3>
                    총확진환자
                </h3>
                <h3>
                    {dispDecideCnt()}명
                </h3>
            </div>
            <div className='cell-box'>
                <h3>
                    추가확진환자
                </h3>
                <h3>
                  {dispTodayDecideCnt()}명
                </h3>
            </div>
            <div className='cell-box'>
                <h3>
                    사망자
                </h3>
                <h3>
                  {dispDeathCnt()}명
                </h3>
            </div>
            <div className='cell-box'>
                <h3>
                    격리해제
                </h3>
                <h3>
                  {dispClearCnt()}건
                </h3>
            </div>
            <div className='cell-box'>
                <h3>
                    누적 검사완료
                </h3>
                <h3>
                  {dispAccExamCompCnt()}건
                </h3>
            </div>
        </div>
      </header>
    </div>
  );
}