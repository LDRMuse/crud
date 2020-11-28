import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Navbar, Home, Login, FAQ, Register } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='admins/register' component={Register} />
        <Route path='admins/logout' component={Login} />

        <Route exact path="/admins/login">
          <Login />
        </Route>

        <Route exact path="/admins/register">
          <Register />
        </Route>

        <Route exact path="/admins/FAQ">
          <FAQ />
        </Route>

        <Route path='admins/FAQ/:id' component={FAQ} />
        <Route path='admins/FAQ/create-FAQ' component={FAQ} />
        <Route path='admins/FAQ/:id/edit-FAQ' component={FAQ} />
        <Route path='admins/FAQ/:id/delete-FAQ' component={FAQ} />
      </Switch>
    </div>
  );
}

export default App;
