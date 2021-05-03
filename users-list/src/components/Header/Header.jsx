/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles/Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const [inputSelected, setInputSelected] = useState(false);

  const dispatch = useDispatch();

  return (
    <header>
      <div className="logo-wrapper">
        <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/a14428120d34a65adc0f6dc9034fc79b/fabamaqLogo.png" alt="logo" />
      </div>
      <div className="input-wrapper">
        <input
          autoFocus
          className={`${inputSelected ? 'inputSelected' : ''}`}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => { setInputSelected(!inputSelected); setSearch(''); }}
        />
        <span
          type="button"
          onClick={() => { setInputSelected(!inputSelected); }}
          className={`material-icons ${inputSelected && 'searchIcon-unSelect'}`}
        >
          search
        </span>
      </div>
    </header>
  );
};

export default Header;
