import React, { useState } from 'react'
import { LoginForm } from '../Login/Login'
import { SignUpForm } from '../Login/Signup'
import { PasswordResetForm } from '../Login/Reset'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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
              <SignUpForm />
              <p>Already have an account?
                <p onClick={() => toggleType('login')}>
                  Sign in
                </p>
              </p>
            </div>}
          {type === 'reset' &&
            <div>
              <PasswordResetForm />
              <p>
                Already have an account?
                <p onClick={() => toggleType('login')}>
                  Sign in
                </p>
              </p>
            </div>}
    </>
  )
}
