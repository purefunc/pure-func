import React, { useState } from 'react'
import { LoginForm } from '../Login/Login'
import { SignUpForm } from '../Login/Signup'
import { PasswordResetForm } from '../Login/Reset'

export const LoginModal = () => {
    const [type, setType] = useState('login')

    const toggleType = (val: string) => {
        setType(val)
    } 

  return (
  <>
    {type === 'login' &&
      <div>
        <h3>Login</h3>
        <LoginForm />
        <p>
          Don't have an account?
          <p className="" onClick={() => toggleType('signup')}>
            Register
          </p>
        </p>
        <p>
          Forgot your password?
        <p className="" onClick={() => toggleType('reset')}>
          Reset
        </p>
      </p>
      </div>}
    {type === 'signup' &&
      <div>
        <h3>Sign Up</h3>
        <SignUpForm />
        <p>Already have an account?
          <p onClick={() => toggleType('login')}>
            Sign in
          </p>
        </p>
      </div>}
    {type === 'reset' &&
      <div>
        <h3>Reset Password</h3>
          <PasswordResetForm />
          <p>
            Already have an account?
            <p className="modalLink" onClick={() => toggleType('login')}>
              Sign in
            </p>
          </p>
      </div>}
    </>
  )
}
