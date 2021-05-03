import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import Footer from './components/Footer/Footer';
import CreateUser from './components/CreateUser/CreateUser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import Home from './components/Home/Home';

import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/userslist" exact component={UsersList} />
          <Route path="/createuser" exact component={CreateUser} />
          <Route path="/deleteuser" exact component={DeleteUser} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
