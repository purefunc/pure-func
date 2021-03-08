import React from 'react'
import { EyeLogo } from '../../components'
import './sphere-logo.scss'

export function SphereLogo() {
  return (
    <div className="sphere-logo">
      <figure className="ball">
        <span className="shadow"></span>
        <span className="iris">
          <EyeLogo />
        </span>
      </figure>
    </div>
  )
}
