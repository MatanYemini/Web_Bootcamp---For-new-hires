import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <h2>
        <a href='#'>Mountain Travel</a>
      </h2>
      <nav>
        <li>
          <a href='#'>Tours</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Content</a>
        </li>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
