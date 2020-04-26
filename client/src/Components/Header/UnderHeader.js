import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Background from '../../assets/img/main.jpg';

const UnderHeader = (props) => {
  return (
    <section className='hero'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className='hero-content-area'>
        <h1>Mountain Travel</h1>
        <h3>Go with us to advanture</h3>
        <a href='#' className='btn'>
          Contest Us Now
        </a>
      </div>
    </section>
  );
};

UnderHeader.propTypes = {};

export default UnderHeader;
