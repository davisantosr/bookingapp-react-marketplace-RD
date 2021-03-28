import React, {useState} from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import {useDispatch} from 'react-redux';

import { LOGGED_IN_USER } from '../redux/constants/auth';

const Login = ({history}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

    
  const handleLogin = async (user) => {
    const {email, password} = user;
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/login/`, {
        email, password
      })
      
      return res.data
    }
    catch(err) {
      console.log(err)
    }

  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let res = await handleLogin({email, password})

      if(res) {
        window.localStorage.setItem('auth', JSON.stringify(res))

        // save to Redux
        dispatch({
          type: LOGGED_IN_USER,
          payload: res
        })
      }
      
      history.push('/')

    } catch(err) {
      console.log(err)
      // if(err.response.status === 400) {
      //   toast.error(err.response.data)
      // }
    }
  }

  return (
    <> 
      <div className='container-fluid bg-secondary h1 p-5 text-center'>
        <h1>Login</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
