import React from 'react'
import Logo from '../images/Logo.svg'

export const Login = () => {
  return (
    <div>
        <div className='form-container'>
          <img src={Logo} alt="" />
          <div className='form-wrapper'>
            <form className='login-form' action="">
                <label htmlFor="mail">Mail</label>
                <input name='mail' type="text" />
                <label htmlFor="password">Password</label>
                <input name='password' type="password" />
            </form>
          </div>
        </div>
    </div>
  )
}
