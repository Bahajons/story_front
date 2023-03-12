import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../utils/fetch_api'


export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()



  async function login_user() {

    console.log('dsdsd');
    try {
      const result = await login(user)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }


  function onsubmit(e) {
    e.preventDefault()
    let err = {}, t = true;
    if (!(user.email)) { t = false; err = { ...err, email: false } }
    if (!(user.password)) { t = false; err = { ...err, name: false } }
    if (t) {
      login_user()
    }
    console.log('ffff');


  }





  return (
    <div>
      <div className="container">
        <form className='col-md-6 offset-md-3' onSubmit={onsubmit}>
          <div className="mb-3">
            {console.log(user)}
            <h3 className='text-center pt-3'>Login</h3>
            <div className="d-flex justify-content-between">
              <label htmlFor="email" className="form-label">Email address</label>
              <Link className='nav-link text-primary' to={'/register'}>Register</Link>
            </div>
            <input type="email" id='email' value={user.email}
              onChange={(e) => {
                setUser({ ...user, [e.target.id]: e.target.value })
              }} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control"
              onChange={(e) => {
                setUser({ ...user, [e.target.id]: e.target.value })
              }} id="password" value={user.password} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}
