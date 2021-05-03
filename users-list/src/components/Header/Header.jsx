/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header>
    <div className="logo-wrapper">
      <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/a14428120d34a65adc0f6dc9034fc79b/fabamaqLogo.png" alt="logo" />
    </div>
    <nav className="nav-sections">
      <ul>
        <Link to="/userslist">
          <li>Users List</li>
        </Link>
        <Link to="/createuser">
          <li>Create User</li>
        </Link>
        <Link to="/deleteuser">
          <li>Delete User</li>
        </Link>
      </ul>
    </nav>

  </header>
);

export default Header;
