import React from "react"
import styled from "styled-components"
import { media } from "../styles"

function DesktopNav() {
  return (
    <Nav>
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
    </Nav>
  )
}

export default DesktopNav

const Nav = styled.nav`
  display: none;
  ul {
    display: flex;
  }
  ${media.medium`
  display: block;
  `};
`
