import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

<<<<<<< HEAD
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/admins/register' className="button is-primary">
            <strong>Want to be an Admin?</strong>
          </Link>
          <Link to='/admins/login' className="button is-light">
            Log in
=======
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
>>>>>>> 69971f72f34887b60652fdea928612717c3a0b5c
          </Link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link to="/admin/register" class="button is-primary">
                <strong>Want to be an Admin?</strong>
              </Link>
              <Link to="/admin/login" class="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
