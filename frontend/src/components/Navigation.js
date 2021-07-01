import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
      <div className="Navigation-align">
          <div className="Navigation-content">
               <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='button'>
                         개 요
                    </span>
                 </Link>

               <Link to='/korea' style={{ textDecoration: 'none' }}>
                    <span className='button'>
                         국내현황
                    </span>
               </Link>
               <Link to='/world' style={{ textDecoration: 'none' }}>
                    <span className='button'>
                         세계현황
                    </span>
               </Link>
               <Link to='/vaccine' style={{ textDecoration: 'none' }}>
                    <span className='button'>
                         접종현황
                    </span>
               </Link>
          </div>
      </div>
  );
}

export default Navigation;
