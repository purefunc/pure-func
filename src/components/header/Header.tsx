import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

import "./header.scss"

export default function Header() {
  return (
    <div className="Header">
      <div className="InnerHeader">
        <h1 className="margin-0">
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <MainNav />
        <MobileNav />
      </div>
    </div>
  )
}
