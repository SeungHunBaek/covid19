import './Summary.css';

function Summary() {
  return (
    <div>
      <header>
        <div className='align-row'>
            <div className='cell-box'>
                <h3>
                    확진환자
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

export default Summary;
