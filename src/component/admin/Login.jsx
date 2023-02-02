import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { API } from '../../API'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()



  const Login = () => {
    const fd = new FormData()
    fd.append('email', email)


    axios.post('http://localhost:5000/api/login', {email,password})
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err);
      })
    // GetImage()
  }

  const GetImage = () => {
    axios.get('http://localhost:5000/api/image')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }





  return (
    <div>
      <div className="container">
        <form className='col-md-6 offset-md-3'>
          <div className="mb-3">
            <h3 className='text-center pt-3'>Login</h3>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" id='exampleInputEmail1' value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control"
              onChange={(e) => {
                setPassword(e.target.value)
              }} id="exampleInputPassword1" value={password} required />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => { Login() }}>Login</button>
        </form>
      </div>
    </div>
  )
}
