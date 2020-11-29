import React, { useState } from "react";
import api from '../../api/routes'

const adminApi = api('/register')

export const Register = () => {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
  });

  // define an admin
  const { username, email, password } = admin;

  // use user input data to set the admin
  const handleChange = (e) => {
    e.preventDefault();
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };


  // once admin is set, pass that data when submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call API function to send admin data to backend
    adminApi.create(admin)
    // after admin is sent to the backend, reset state
    setAdmin({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <div className="box">
                    <h1 className="has-text-centered">Register Form</h1>
                    <div className="field">
                      <label htmlFor="" className="label">
                        Username
                      </label>
                      <div className="control has-icons-left">
                        <input
                          type="text"
                          value={username}
                          name="username"
                          onChange={handleChange}
                          placeholder="username"
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="" className="label">
                        Email
                      </label>
                      <div className="control has-icons-left">
                        <input
                          type="email"
                          value={email}
                          name="email"
                          onChange={handleChange}
                          placeholder="e.g. bobsmith@gmail.com"
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="" className="label">
                        Password
                      </label>
                      <div className="control has-icons-left">
                        <input
                          type="password"
                          value={password}
                          name="password"
                          onChange={handleChange}
                          placeholder="*******"
                          className="input"
                          required
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <button type="submit" className="button">
                        {" "}
                        Register{" "}
                      </button>
                      {/* <Link to='/' type="submit" className="button is-success">
                        Register
                </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
