import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import Footer from './components/Footer/Footer';
import CreateUser from './components/CreateUser/CreateUser';

import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/userslist" exact component={UsersList} />
          <Route path="/createuser" exact component={CreateUser} />
          <Route path="/deleteuser" exact />

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
