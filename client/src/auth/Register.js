import React, {useState} from 'react'
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import {toast} from 'react-toastify'; //config on the app;

const Register = ({history}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({name, email, password})    
    await axios.post(`${process.env.REACT_APP_API}/register/ `, {
      name, email, password
    }).then(response => {
      toast.success("Successfully registered. Please login.")
      history.push('/login');

    }).catch(err => {
      err.response.status === 400 && toast.error(`${err.response.data}`)
      
    })
  }
  
  return (
    <React.Fragment>
      <div className='container-fluid bg-secondary h1 p-5 text-center'>
        <h1>Register</h1>     
      </div>

      <div className='container'>
        <div className={'row'}>
          <div className={'col-md-6 offset-md-3'}>
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register
