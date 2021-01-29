import React, { useState } from "react"
import styled from "react-router-dom"
import { Link } from "react-router-dom"
import qrSvg from "../images/codemymenu-qr.svg"
import Nav from "./Nav"
import MobileMenu from "./MobileMenu"

const links = [
  {
    to: "/plans/",
    text: "Plans",
  },
  {
    to: "/examples/",
    text: "Examples",
  },
  // {
  //   to: "/contact/",
  //   text: "Contact",
  // },
]

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerHeader>
        <h1 className="no-margins logo">
          <Link to="/" aria-label="Home page">
            <img src={qrSvg} alt="Logo" />
            Code My Menu
          </Link>
        </h1>
        <div className="nav-wrapper">
          <MobileMenu links={links} />
          <Nav links={links} />
        </div>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background: var(--white);
  top: 0;
  width: 100%;
  height: var(--headerHeight);
  z-index: var(--headerLevel);
  position: fixed;
  box-shadow: var(--elevation-2);
`

const InnerHeader = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--basePadding);
  max-width: 1146px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  transition: all ease-out 0.5s;
  .logo {
    font-weight: bold;
    font-size: var(--largeFontSize);
    img {
      height: 25px;
      width: 25px;
      display: inline-block;
      margin: 0 5px -5px 0;
      box-shadow: var(--elevation-1);
    }
    a {
      font-size: inherit;
      display: inline-block;
      color: var(--purp);
    }
  }
`
