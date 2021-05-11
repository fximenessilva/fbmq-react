/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ChildHome from './ChildHome';
import './styles/Home.css';

const Home = () => (
  <div className="home-wrapper">
    <span style={{ color: '#47c7ed' }}>ONCE UPON A TIME...</span>
    <p style={{ marginBottom: '20px' }}>in the best city in the world</p>

    <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/180d033cc954aeeac335c2d077153772/main.png" alt="" />

    <ChildHome title="2010" subtitle="ALRIGHT CHUMS, LET'S DO THIS..." color="#db335d">
      Back in 2010, we were a startup made of 9 fearless minds. It was the beginning of a big fellowship, like The Lord of the Rings.
    </ChildHome>

    <ChildHome title="2017" subtitle="ENERGY EXPANSION" color="#47c7ed">
      We've reached the 120 gamers mark in just 7 years. This impressive and expansive growth continues and will lead us to a new home!
    </ChildHome>

    <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/4385c004e76528942bd39a5456f3f2b2/main2.png" alt="" />
    <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/2b30c16f2928d76302076f1c0ffb5a65/main3.png" alt="" />

    <ChildHome title="2018" subtitle="A NEW BRAND IS BORN" color="#db335d">
      Success brought us new challenges. We took 8 years of expertise developing games to the online environment and launched the OBU Studios brand (now FMQ Digital).
    </ChildHome>

    <ChildHome title="2019" subtitle="THE YEAR OF CHANGES" color="#47c7ed">
      We reached the 170 gamers mark, moved our entire operation to Campo Alegre and rebranded Obu Studios to FMQ Digital.
    </ChildHome>

    <img style={{ marginBottom: '80px' }} src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/608fda773e58683a37493fd0/86092d294393d2edd09d85374ae519db/main4.png" alt="" />

  </div>
);

export default Home;
