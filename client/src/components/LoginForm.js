import React from 'react';

const LoginForm = (props) =>{
  const {
    handleSubmit, 
    email, 
    setEmail, 
    password, 
    setPassword
  } = props;
  return (
    <form onSubmit={handleSubmit} className={'mt-5'}>

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
        disabled={!email || !password}
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm