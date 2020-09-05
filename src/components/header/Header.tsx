import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"

import "./header.scss"

export default function () {
  return (
    <div className="header-container">
      <div className="nav-container">
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  )
}
