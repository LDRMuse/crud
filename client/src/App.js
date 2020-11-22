import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';

import { Navbar, Home, Login, FAQ } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='admin/register' component={Login} />
        <Route path='admin/logout' component={Login} />

        <Route exact path="/admin/login">
          <Login />
        </Route>

        <Route exact path="/admin/register">
          <Login />
        </Route>

        <Route exact path="/admin/FAQ">
          <FAQ />
        </Route>

        <Route path='admin/FAQ/:id' component={FAQ} />
        <Route path='admin/FAQ/create-FAQ' component={FAQ} />
        <Route path='admin/FAQ/:id/edit-FAQ' component={FAQ} />
        <Route path='admin/FAQ/:id/delete-FAQ' component={FAQ} />
      </Switch>
    </div>
  );
}

export default App;
