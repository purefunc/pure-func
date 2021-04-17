import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'
import { Nav } from './Nav'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <HeaderWrapper className="header flex">
      <div className="header__inner wrapper">
        <h1 className="margin-0 logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </h1>
        <Nav />
        <MobileMenu />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  --headerBg: transparent;
  background: var(--headerBg);
  top: 0;
  width: 100%;

  // height: var(--headerHeight);
  z-index: var(--headerLevel);
  position: absolute;
  // box-shadow: var(--elevation-2);
  .header__inner {
    position: relative;
    padding: 0 var(--space);
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    .header__nav {
      flex-grow: 2;
      .dropdown {
        position: relative;
        display: inline-block;
      }
      .dropdown-menu {
        position: absolute;
        left: var(--space);
        display: none;
        width: 230px;
        background-color: var(--white);
        border-radius: var(--cardRadius);
        padding: var(--smallSpace);
        z-index: 1;
        animation: growDown 340ms ease-in-out forwards;
        .triangle {
          width: 0;
          height: 0;
          position: absolute;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid white;
          top: -5px;
          left: 18%;
          margin-left: -8px;
        }
        .nav-link {
          color: var(--textColor);
          margin-left: 0;
        }
      }
      .dropdown:hover .dropdown-menu {
        display: block;
      }
      .nav-link {
        color: var(--white);
        margin-left: var(--space);
      }
    }
  }
  .menu-icon {
    outline: none;
    display: none;
  }

  @media (max-width: 880px) {
    .header__inner {
      justify-content: space-between;
      .logo {
        margin-top: 6px;
      }
      .menu-icon {
        display: block;
      }
      .header__nav {
        display: none;
      }
    }
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`
