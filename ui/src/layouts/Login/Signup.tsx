import React, { useState } from 'react'

export const SignUp = () => {
  return (
    <>
      <form>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <button className="cta" type="submit">
          Register
        </button>
      </form>
    </>
  )
}
