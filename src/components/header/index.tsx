import React from 'react';
import { Nav } from './Nav';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import './header.scss';

export function Header() {
  return (
    <header className="header flex">
      <div className="header__inner flex">
        <h1 className="margin-0 logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
