import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">


    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link to='/' className="navbar-item">
        Home
      </Link>


    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/admins/register' className="button is-primary">
            <strong>Want to be an Admin?</strong>
          </Link>
          <Link to='/admins/login' className="button is-light">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
