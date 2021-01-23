import React from 'react';
import './footer.scss';

export function Footer() {
  return (
    <footer className="Footer">
      <div className="Wrapper">
        <div className="Section">
          <h4>Footer</h4>
          <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        </div>
      </div>
    </footer>
  );
}
