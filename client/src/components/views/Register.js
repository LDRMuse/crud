import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dotenv from "dotenv";

dotenv.config()

const baseUrl = `http://localhost:5000`;

export const Register = () => {
  const [admin, setAdmin] = useState({
    username: '',
    email: '',
    password: ''
  })

  // define an admin
  const { username, email, password } = admin

  // use user input data to set the admin
  const handleChange = (e) => {
    e.preventDefault()
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    })
    console.log(admin, 'hiiii')
  }


  // useEffect(() => {
  //   sendRequest()
  // })

  // const sendRequest = async () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(admin)
  //   };
  //   const response = await fetch(`${baseUrl}/admins/register`, requestOptions);
  //   // const data = await response.json();
  //   console.log(response, 'response')
  // }

    const sendRequest = (endpoint) => {
      const create = async (payload) => {
        const res = await fetch(`${baseUrl}/admins${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        console.log(res)
      }
      create(admin)
  }

  // const sendRequest = (admin) => {
  //   axios.post(`${baseUrl}/admins/register`, admin)
  //   .then(() => console.log('admin made'))
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // once admin is set, pass that data when submitted
  const handleSubmit = async (e) => {
    e.preventDefault()
    // call API function to send admin data to backend
    sendRequest('/register')
    // after admin is sent to the backend, reset state
    setAdmin({
      username: '',
      email: '',
      password: ''
    })
  }


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
                      <label htmlFor="" className="label">Username</label>
                      <div className="control has-icons-left">
                        <input type="text" value={username} name="username" onChange={handleChange} placeholder="username" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="" className="label">Email</label>
                      <div className="control has-icons-left">
                        <input type="email" value={email} name="email" onChange={handleChange} placeholder="e.g. bobsmith@gmail.com" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="" className="label">Password</label>
                      <div className="control has-icons-left">
                        <input type="password" value={password} name="password"
                          onChange={handleChange} placeholder="*******" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <button> click </button>
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
  )
}
