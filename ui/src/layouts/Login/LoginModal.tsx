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
              <LoginForm />
              <p>
                Don't have an account?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('signup')}>
              Register
              </button>
              <p>
                Forgot your password?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('reset')}>
                Reset
              </button>
            </div>}
          {type === 'signup' &&
            <div>
              <SignUpForm />
              <p>Already have an account?</p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('login')}>
                Sign in
              </button>
            </div>}
          {type === 'reset' &&
            <div>
              <PasswordResetForm />
              <p>
                Already have an account?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('login')}>
                Sign in
              </button>
            </div>}
    </>
  )
}
