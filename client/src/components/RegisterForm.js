import React from 'react';

const RegisterForm = (props) =>{
  const {handleSubmit, name, setName, email, setEmail, password, setPassword} = props;
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

export default RegisterForm