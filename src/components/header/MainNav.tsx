import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
  return (
    <nav className="MainNav">
      <ul>
        <li>
          <Link to="/company/">Company</Link>
        </li>
        <li>
          <Link to="/services/">Services</Link>
        </li>
      </ul>
    </nav>
  )
}
