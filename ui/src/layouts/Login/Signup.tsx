import React, { useState } from 'react'


import '../header/header.scss'



export const SignUp = () => {

    return (
        <>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button className="cta" type="submit">
                    Register
                </button>
            </form>
        </>
    )
}
