import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo"
import MobileNav from "./MobileNav"
import DesktopNav from "./MainNav"

import "./header.scss"

export default function Header() {
  return (
    <div className="Header">
      <div className="InnerHeader">
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
