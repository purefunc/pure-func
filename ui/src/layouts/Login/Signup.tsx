import React, { useState } from 'react'
import { Field, Button } from 'components'

export const SignUpForm = () => {
  return (
    <>
      <form>
        <Field label="Email" type="email" name="email" />
        <Field label="Password" type="password" name="password" />
        <div className="text-center">
          <Button className="cta" type="submit">
            Register
          </Button>
        </div>
      </form>
    </>
  )
}
