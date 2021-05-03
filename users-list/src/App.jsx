import React from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import Footer from './components/Footer/Footer';

import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <UsersList />
      <Footer />
    </>
  );
}

export default App;
