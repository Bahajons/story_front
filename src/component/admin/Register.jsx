import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { register } from '../../API'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  const [user, setUser] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()


  const submit = () => {
    try {
      register(user)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <div className="container">
        <form className='col-md-6 offset-md-3'>
          <div className="mb-3">
            <h3 className='text-center pt-3'>Ro'yxatdan o'tish</h3>
            <label htmlFor="exampleInputEmail1" className="form-label">Ism</label>
            <input type="text" id='exampleInputEmail1'
              onChange={(e) => {
                setUser({ ...user, name: e.target.value })
              }} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Familiya</label>
            <input type="text" className="form-control"
              onChange={(e) => {
                setUser({ ...user, surname: e.target.value })
              }} id="exampleInputPassword1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Username</label>
            <input type="text" className="form-control"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value })
              }} id="exampleInputPassword2" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">Email</label>
            <input type="email" className="form-control"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value })
              }} id="exampleInputPassword3" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">Parol</label>
            <input type="email" className="form-control"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value })
              }} id="exampleInputPassword4" required />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => { submit() }}>Register</button>
        </form>
      </div>
    </div>
  )
}
