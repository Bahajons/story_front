import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { setpassword } from '../../utils/fetch_api'
import { SetPasswordStyled } from '../../../style-component/Auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function SetPassword() {

  const { id, resetPassword } = useParams()
  const [user, setUser] = useState({
    password: ''
  })
  const [error, setError] = useState({
    password: false
  })
  const [show, setShow] = useState(false)
  async function set_password() {
    try {
      const result = await setpassword(id, resetPassword, user)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }



  const submit = (e) => {
    e.preventDefault()
    let err = {}, t = true
    if (!(user.password.length > 7)) { t = false; err = { ...err, password: true } }
    if (t) {
      set_password()
    }
    setError({ ...error, ...err })
  }




  return (
    <SetPasswordStyled>
      <div className="container">
        <form className='col-md-6 offset-md-3' onSubmit={submit}>
          <h3 className='text-center pt-4'>New password</h3>
          {console.log(id, resetPassword)}
          <div className="mb-3 input">
            <div className="d-flex justify-content-between">
              <label htmlFor="password" className="form-label">Password</label>
              <Link className='nav-link text-primary' to={'/login'}>Login</Link>
            </div>
            <input type={show ? 'password' : 'text'} className="form-control" value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value })
              }} id="password" />
            <p className='text-primary icon' style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>{show ? <VisibilityOffIcon /> : <VisibilityIcon />}</p>
            {error.password ? <span className='text-danger'>Password must be at last 8 characters</span> : ''}
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary float-right" >Set password</button>
          </div>
        </form>
      </div>
    </SetPasswordStyled>
  )
}
