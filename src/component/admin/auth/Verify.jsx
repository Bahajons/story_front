import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { verify, verify_by_link } from '../../utils/fetch_api'

export default function Verify() {

	const { id, token } = useParams()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')

	async function verify_user() {

		try {
			const result = await verify_by_link(id, token)
			navigate('/login')

		} catch (error) {
			console.log(error);
		}
	}




	return (
		<div>
			{console.log(id, token)}
			<div className="container">
				<div className="text-center">
					<div className="btn mt-5 btn-lg btn-primary" onClick={verify_user}>
						Verify email
					</div>
				</div>
				<div className="text-center">
					<input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
					<div className="btn mt-5 btn-lg btn-primary" onClick={verify_user}>
						Verify email
					</div>
				</div>
			</div>
		</div>
	)
}
