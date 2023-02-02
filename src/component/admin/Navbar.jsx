import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate()

  const LogOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  const LogIn = () => {
    navigate('/login')
  }



  return (
    <div>
      <div className='py-2' style={{ backgroundColor: '#c9c9c9' }}>
        <div className="container">
          <div className="d-flex w-100">
            <h2 className='w-100 text-center'>Admin-Panel</h2>
            <div className='d-flex justify-content-end'>
              {localStorage.getItem('token') ?
                <button className='btn btn-danger' onClick={LogOut}>Chiqish</button>
                :
                <button className='btn btn-primary' onClick={LogIn}>Kirish</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
