import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../utils/fetch_api'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RegisterStyled } from '../../../style-component/Auth'
export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    email: false,
    password: false
  })
  const [resp, setResp] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()



  async function login_user() {
    try {
      const result = await login(user)
      localStorage.setItem('token', result?.data?.token)
      navigate('/')
      console.log(result);
    } catch (error) {
      console.log(error);
      setResp(error.response)
    }
  }


  function onsubmit(e) {
    e.preventDefault()
    let err = {}, t = true;
    if (!(user.email)) { t = false; err = { ...err, email: true } }
    if (!(user.password)) { t = false; err = { ...err, password: true } }
    if (t) {
      login_user()
    }
    console.log('ffff');
    setError(err)
  }





  return (
    <RegisterStyled>
      <div className="container">
        <h3 className='text-center py-4'>Login</h3>
        <form className='col-md-6 offset-md-3' onSubmit={onsubmit}>
          <div className="mb-3">
            {console.log(user)}
            <div className="d-flex justify-content-between">
              <label htmlFor="email" className="form-label">Email address</label>
              <Link className='nav-link text-primary' to={'/register'}>Register</Link>
            </div>
            <input type="email" id='email' value={user.email}
              onChange={(e) => {
                setUser({ ...user, [e.target.id]: e.target.value })
              }} className="form-control" />
            {error?.email ? <span style={{ fontSize: '14px', color: 'red' }}>You should input email !</span> : ''}
            {resp ? <span style={{ fontSize: '14px', color: 'red' }}>Email or password is incorrect !</span> : ''}
            {console.log(error.email)}
          </div>
          <div className="mb-3 input">
            <label htmlFor="password" className="form-label">Password</label>
            <input type={show ? 'password' : 'text'} className="form-control"
              onChange={(e) => {
                setUser({ ...user, [e.target.id]: e.target.value })
              }} id="password" value={user.password} />
            <p className='text-primary icon' style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>{show ? <VisibilityOffIcon /> : <VisibilityIcon />}</p>
            {error?.password ? <span style={{ fontSize: '14px', color: 'red' }}>You should input password !</span> : ''}
          </div>
          <div className="d-flex align-items-end justify-content-between">
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to={'/reset_password'} className='nav-link text-primary'>Forget password</Link>
          </div>
        </form>
      </div>
    </RegisterStyled>
  )
}
