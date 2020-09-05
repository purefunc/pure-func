import React from "react"

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <a
        className="MenuButton"
        href="#"
        title="Open mobile navigation"
        data-js-target="SiteHeader.menuButton"
      >
        <svg width="16" height="10" viewBox="0 0 16 10">
          <title>Open mobile navigation</title>
          <g fill="var(--knockoutColor)" fillRule="evenodd">
            <rect y="8" width="16" height="2" rx="1"></rect>
            <rect y="4" width="16" height="2" rx="1"></rect>
            <rect width="16" height="2" rx="1"></rect>
          </g>
        </svg>
      </a>
    </nav>
  )
}

export default MobileNav
