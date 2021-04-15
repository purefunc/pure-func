import React, { useState } from 'react'


import '../header/header.scss'



export const Reset = () => {

    return (
        <>
            <form>
                <p>Submit your email to have a recovery email sent to your inbox.</p>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                />
                <button className="cta" type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}
