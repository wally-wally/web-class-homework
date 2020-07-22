import React from 'react';
import { MdHome } from 'react-icons/md';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ url }) => {
  return (
    <header>
      <h1>Web-Class Homework</h1>
      {url !== '/' && <Link to="/"><MdHome /></Link>}
    </header>
  );
};

export default Header;