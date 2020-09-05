import React from "react"

export default function DesktopNav() {
  return (
    <div className="desktop-nav">
      <ul>
        <li>
          <button
            className="SiteHeaderNavItem__link"
            aria-haspopup="true"
            aria-expanded="false"
            data-js-target-list="SiteHeader.dropdownTriggers"
          >
            Company
          </button>
        </li>
        <li className="SiteHeaderNavItem">
          <button
            className="SiteHeaderNavItem__link"
            aria-haspopup="true"
            aria-expanded="false"
            data-js-target-list="SiteHeader.dropdownTriggers"
          >
            Projects
          </button>
        </li>
      </ul>
    </div>
  )
}
