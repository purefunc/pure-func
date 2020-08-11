import React from "react"
import { Link } from "gatsby"

export default function ({ siteTitle }) {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}
