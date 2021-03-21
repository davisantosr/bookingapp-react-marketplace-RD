import React, {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import LoginForm from '../components/LoginForm';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    //  
  }
  
  const login = async () => {
    await axios.post(`${process.env.REACT_APP_API}/login/`) 
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
