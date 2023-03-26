import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { reset } from '../../utils/fetch_api'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ResetPassword() {

	const [user, setUser] = useState({
		email: ''
	})
	const [error, setError] = useState({
		email: false
	})
	const [resp, setResp] = useState(false)
	const [sent, setSent] = useState(false)
	const navigate = useNavigate()

	async function reset_password() {
		try {
			const result = await reset(user)
			setSent(true)
			console.log(result);
		} catch (error) {
			console.log(error);
			toast.error(`${error.response.data}`, {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setResp(error.response)
		}
	}


	function onsubmit(e) {
		e.preventDefault()
		let err = {}, t = true;
		if (!(user.email)) { t = false; err = { ...err, email: true } }
		if (t) {
			reset_password()
		}
		setError(err)
	}





	return (
		<div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
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
				{sent ?
					<div className='text-center mt-5'>
						<h5>Check your email !</h5>
						<i>We sent link for create new password <SentimentSatisfiedAltIcon className='text-primary' /> </i><br />
						<button className='btn btn-light mt-3 btn-outline-primary' onClick={() => navigate('/')}>Ok</button>
					</div> :
					<form className='col-md-6 offset-md-3' onSubmit={onsubmit}>
						<h3 className='text-center py-4'>Reset password</h3>
						<div className="mb-3">
							{console.log(user)}
							<div className="d-flex justify-content-between">
								<label htmlFor="email" className="form-label">Input your registered email</label>
								<Link className='nav-link text-primary' to={'/register'}>Register</Link>
							</div>
							<input type="email" id='email' value={user.email}
								onChange={(e) => {
									setUser({ ...user, [e.target.id]: e.target.value })
								}} className="form-control" />
							{error?.email ? <span style={{ fontSize: '14px', color: 'red' }}>You should input email !</span> : ''}
						</div>
						<div className="d-flex align-items-end justify-content-between">
							<button type="submit" className="btn btn-primary">Reset</button>
							<Link to={'/login'} className='nav-link text-primary'>Login</Link>
						</div>
					</form>
				}
			</div>
		</div>
	)
}
