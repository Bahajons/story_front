import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../utils/fetch_api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RegisterStyled } from '../../../style-component/Auth';

export default function Register() {

  const [user, setUser] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState({
    name: false,
    surname: false,
    username: false,
    email: false,
    password: false
  })

  const navigate = useNavigate()
  const [verify, setVerify] = useState(false)

  async function register_user() {
    try {
      const result = await register(user)
      setVerify(true)
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  async function submit(e) {
    e.preventDefault()
    let err = {
      name: false,
      surname: false,
      username: false,
      email: false,
      password: false
    }, t = true
    if (!(user.name)) { t = false; err = { ...err, name: true } }
    if (!(user.surname)) { t = false; err = { ...err, surname: true } }
    if (!(user.username)) { t = false; err = { ...err, username: true } }
    if (!(user.email)) { t = false; err = { ...err, email: true } }
    if (!(user.password.length > 7)) { t = false; err = { ...err, password: true } }
    if (t) {
      register_user()
    }
    setError({ ...error, ...err })
  }


  return (
    <RegisterStyled>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        {verify ?
          <div className='text-center mt-5'>
            <h4>
              Check your email !
            </h4>
            <i>We sent verify link to your email</i><br />
            <button className='btn btn-primary mt-3' onClick={() => navigate('/login')}>Go to Login</button>
          </div>
          :
          <form className='col-md-6 offset-md-3' onSubmit={submit}>
            <div className="mb-3">
              <h3 className='text-center pt-3'>Register</h3>
              <div className="d-flex justify-content-between">
                <label htmlFor="name" className="form-label">Name</label>
                <Link className='nav-link text-primary' to={'/login'}>Login</Link>
              </div>
              <input type="text" id='name' value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value })
                }} className="form-control" />
              {error.name ? <span className='text-danger'>You should input name</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">Surname</label>
              <input type="text" className="form-control" value={user.surname}
                onChange={(e) => {
                  setUser({ ...user, surname: e.target.value })
                }} id="surname" />
              {error.surname ? <span className='text-danger'>You should input surname</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" value={user.username}
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value })
                }} id="username" />
              {error.username ? <span className='text-danger'>You should input username</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value })
                }} id="email" />
              {error.email ? <span className='text-danger'>You should input email</span> : ''}
            </div>
            <div className="mb-3 input">
              <label htmlFor="password" className="form-label">Password</label>
              <input type={show ? 'password' : 'text'} className="form-control" value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value })
                }} id="password" />
              <p className='text-primary icon' style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>{show ? <VisibilityOffIcon /> : <VisibilityIcon />}</p>
              {error.password ? <span className='text-danger'>Password must be at last 8 characters</span> : ''}
            </div>
            <button type="submit" className="btn btn-primary" >Register</button>
          </form>
        }
      </div>
    </RegisterStyled>
  )
}
