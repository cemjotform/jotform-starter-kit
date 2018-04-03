import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ onReset }) => (
  <div className="header">
    Jotform Starter Kit Demo
    <button onClick={onReset}>Get New Form</button>
  </div>
);

Header.propTypes = {
  onReset: PropTypes.func
};

Header.defaultProps = {
  onReset: f => f
};

export default Header;