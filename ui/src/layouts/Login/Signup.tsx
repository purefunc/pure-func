import React, { useState } from 'react'
import { Field } from 'components'

export const SignUpForm = () => {
  return (
    <>
      <form>
        <Field
          label="Email"
          type="email"
          name="email"
        />
        <Field
          label="Password"
          type="password"
          name="password"
        />
        <div className="text-center">
          <button className="cta" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  )
}
