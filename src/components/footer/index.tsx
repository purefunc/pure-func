import React from 'react';
import { Logo } from '../Logo';
import { Nav } from './Nav';
import { NavLink } from 'react-router-dom';

import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="section">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
          <Nav />
          <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        </div>
      </div>
    </footer>
  );
}
