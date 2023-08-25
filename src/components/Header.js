/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavBar from './Navbar';

const Header = () => (
  <header>
    <div>
      <h1>Bookstore CMS</h1>
      <NavBar />
    </div>
    <div>
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </header>
);

export default Header;
