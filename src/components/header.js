import React from 'react';
import { header } from '../styles/layout.module.css';
import { Link } from 'gatsby';

const Header = () => (
  <header className={header}>
    <Link to="/" fontWeight="bold">
      Cameron Billings
    </Link>
    <nav>
      <Link to="/" activeClassName="current-page">
        Home
      </Link>
      <Link to="/about" activeClassName="current-page">
        About
      </Link>
      <Link to="/contact" activeClassName="current-page">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
