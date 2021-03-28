import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import { LOGOUT } from '../redux/constants/auth';
import {useHistory} from 'react-router-dom';



const TopNav = () => {
  const {auth} = useSelector(state => state)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    })

    window.localStorage.removeItem('auth')
    history.push('/login')    
  }


  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link className='nav-link' to='/'>
        Home    
      </Link>
      {
        !auth.userInfo.user && (
          <React.Fragment>
            <Link className='nav-link' to='/login'>
              Login    
            </Link>
            <Link className='nav-link' to='/register'>
              Register    
            </Link>
          </React.Fragment>
        )
      }
      {
        auth.userInfo.user && (
          <React.Fragment>
            <a className='nav-link pointer' onClick={handleLogout}>
              Logout    
            </a>
          </React.Fragment>
        )
      }

    </div>  
  )
}

export default TopNav;