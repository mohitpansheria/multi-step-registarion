import React from 'react';
import Logo from '../../assets/Headcountlogo.png';
import './style.css';
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
