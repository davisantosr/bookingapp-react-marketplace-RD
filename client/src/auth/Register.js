import React, {useState} from 'react'
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({name, email, password})    
    const res = await axios.post(`http://localhost:5000/api/register/`, {
      name, email, password
    }).then(response => {
      console.log(response.data)

    }).catch(err => {
      console.log(err)
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
