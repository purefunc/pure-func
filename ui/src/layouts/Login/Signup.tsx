import React, { useState } from 'react'

export const SignUpForm = () => {
  return (
    <>
      <form>
         <h5>Email</h5>
        <input type="email" name="email" placeholder="email" />
         <h5>Password</h5>
        <input type="password" name="password" placeholder="Password" />
        <button className="cta" type="submit">
          Register
        </button>
      </form>
    </>
  )
}
