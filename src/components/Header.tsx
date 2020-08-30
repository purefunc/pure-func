import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./Logo"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import { media } from "../styles"

export default function () {
  return (
    <HeaderContainer>
      <div className="nav-container">
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <DesktopNav />
        <MobileNav />
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: relative;
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin: 0 auto;
  padding: 0 var(--columnPaddingNormal);
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 32px var(--columnPaddingNormal) 12px;
  }
  ${media.small`
    .nav-container {
      padding: 12px var(--columnPaddingNormal);
    }
  `};
`
