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
        <h3 className="text-center">Login</h3>
        <LoginForm />
        <div className="margin-top-small text-center">
        <p>
          Don't have an account? {' '}
          <a onClick={() => toggleType('signup')}>
            Register
          </a>
        </p>
        <p>
          Forgot your password? {' '}
          <a onClick={() => toggleType('reset')}>
            Reset
          </a>
          </p>
        </div>
      </div>}
    {type === 'signup' &&
      <div>
        <h3 className="text-center">Sign Up</h3>
        <SignUpForm />
        <p className="margin-top-small text-center">Already have an account? {' '}
          <a onClick={() => toggleType('login')}>
            Sign in
          </a>
        </p>
      </div>}
    {type === 'reset' &&
      <div>
        <h3 className="text-center">Reset Password</h3>
          <PasswordResetForm />
          <p className="margin-top-small text-center">
            Already have an account? {' '}
            <a  onClick={() => toggleType('login')}>
              Sign in
            </a>
          </p>
      </div>}
    </>
  )
}
