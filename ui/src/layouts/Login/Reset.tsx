import React from 'react'
import { Field, Button } from 'components'

export const PasswordResetForm = () => {
  return (
    <>
      <form>
        <p className="text-center">Submit your email to have a recovery email sent to your inbox.</p>
        <Field placeholder="Email" />
        <div className="text-center margins">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}
