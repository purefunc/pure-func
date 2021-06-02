import React, { useState } from 'react'

export const PasswordResetForm = () => {
  return (
    <>
      <form>
        <h5>Submit your email to have a recovery email sent to your inbox.</h5>
        <input type="email" name="email" placeholder="email" />
        <button className="cta" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
