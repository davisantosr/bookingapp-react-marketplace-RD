import React, {useState} from 'react'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({
      name, email, password
    })    
  }

  const registerForm = () =>{
    return (
      <form onSubmit={handleSubmit} className={'mt-5'}>
        <div className={'form-group mb-3'}>
          <label className={'form-label'}>Your name</label>
          <input
            type={'text'}
            className={'form-control'}
            placeholder={'Name'}
            value={name}
            onChange={e => setName(e.target.value)}

          />
        </div>

        <div className={'form-group mb-3'}>
          <label className={'form-label'}>Email Address</label>
          <input
            type={'email'}
            className={'form-control'}
            placeholder={'Email'}
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
        </div>

        <div className={'form-group mb-3'}>
          <label className={'form-label'}>Password</label>
          <input
            type={'password'}
            className={'form-control'}
            placeholder={'Enter Password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          className={'btn btn-primary'}
        >
          Submit
        </button>
      </form>
    )
  }
  return (
    <React.Fragment>
      <div className='container-fluid bg-secondary h1 p-5 text-center'>
        <h1>Register</h1>     
      </div>

      <div className='container'>
        <div className={'row'}>
          <div className={'col-md-6 offset-md-3'}>
            {registerForm()}                        
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register
