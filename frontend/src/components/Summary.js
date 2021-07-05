import './Summary.css';

// 숫자[,]추가처리
const numberWithCommas = (x) => {
  if(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

const dispData = (data) => {
  if(data[0]) return numberWithCommas(data[0].decideCnt);
}

export default function Summary(props) {

  return (
    <div>
      <header>
        <div className='align-row'>
            <div className='cell-box'>
                <h3>
                    총확진환자
                </h3>
                <h3>

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
