import React from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import Footer from './components/Footer/Footer';
import CreateUser from './components/CreateUser/CreateUser';

import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <UsersList />
      <CreateUser />
      <Footer />
    </>
  );
}

export default App;
