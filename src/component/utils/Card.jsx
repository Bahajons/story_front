import React from 'react'
import { API } from './API'

export default function Card(item) {
	return (
		<div className='item'>
			<div className="img">
				<img className='w-100' alt="example" src={`${API}/${item.item?.img}`} />
				<p className='time'>12daq</p>
			</div>
			<div className="text">

				<h5>{item.item.name_book}</h5>
				<i>{item.item.written_by}</i>
				<p className='channel'>Kanal: Bakhromjon Ruziev</p>
			</div>
		</div>
	)
}
