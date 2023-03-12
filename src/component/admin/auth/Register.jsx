import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../utils/fetch_api'


export default function Register() {

  const [user, setUser] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [verify, setVerify] = useState(false)

  async function register_user(e) {
    try {
      const result = await register(user)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function submit(e) {
    e.preventDefault()
    try {
      const result = await register(user)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <div className="container">
        <form className='col-md-6 offset-md-3' onSubmit={submit}>
          <div className="mb-3">
            <h3 className='text-center pt-3'>Ro'yxatdan o'tish</h3>
            <div className="d-flex justify-content-between">
              <label htmlFor="name" className="form-label">Ism</label>
              <Link className='nav-link text-primary' to={'/login'}>Login</Link>
            </div>
            <input type="text" id='name' value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value })
              }} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Familiya</label>
            <input type="text" className="form-control" value={user.surname}
              onChange={(e) => {
                setUser({ ...user, surname: e.target.value })
              }} id="surname" />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value })
              }} id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value })
              }} id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Parol</label>
            <input type="text" className="form-control" value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value })
              }} id="password" />
          </div>
          <button type="submit" className="btn btn-primary" >Register</button>
        </form>
        <div className='text-center'>
          <h6>
            Elekton pochtangizni tekshiring !
          </h6>
          <i>Sizga verifikatsiya havolasi yuborildi</i>
        </div>
      </div>
    </div>
  )
}
