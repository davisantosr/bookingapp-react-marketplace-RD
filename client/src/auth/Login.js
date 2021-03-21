import React, {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import LoginForm from '../components/LoginForm';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
  const login = async (user) => {
    const {email, password} = user;
    
    console.log('LOGIN REQUEST DATA', {email, password})
  
    await axios.post(`${process.env.REACT_APP_API}/login/`, {
      email, password
    }) 
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let res = await login({email, password})

      if(res.data) {
        console.log('save user res in redux and local storage then redirect ==>')
        console.log(res.data)
      }

    } catch(err) {
      console.log(err)
      if(err.response.status === 400) {
        toast.error(err.response.data)
      }
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
