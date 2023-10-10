import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  const navigate=useNavigate();
  const usernavigate = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const pagenavigate = () =>{ 
    let path = `/pages`; 
    navigate(path);
  }
  return (
    <><div className="sidebar">
      <div className="menu" onClick={usernavigate}>
        
       user
      </div>
      <div className="menu" onClick={pagenavigate}>
        pages
      </div>
    </div><div className="table-content">
    
      </div></>
  )
}

export default Navbar
