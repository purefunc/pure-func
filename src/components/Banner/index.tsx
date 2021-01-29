import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div className="BannerWrapper">
      <h4>
        We are currently in the beta programming for this site, for more information click <Link to="/beta">HERE!</Link>
      </h4>
    </div>
  )
}
