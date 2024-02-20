import React from 'react'
import './CSS/loginsignup.css'
export const SignUpLogin = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
        <h2>Sign Up</h2>
        <div className="loginsignup_feilds">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
        </div>
        <button>continue</button>
        <p className='loginsignup_login'> Already Have An Account ? <span>Log In</span></p>
      <div className="loginsignup_agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing , i agree to the terms & Conditions</p>
      </div>
      </div>
      </div>
  )
}
export default SignUpLogin;