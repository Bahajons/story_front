import React, { Component } from 'react';
import { useState } from 'react'
import axios, { formToJSON } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addstory } from '../utils/fetch_api';
import Editor from '../utils/Editor';


export default function AddStory() {

  const [image, setImage] = useState('')
  const [show_image, setShow_image] = useState('')
  const [name_book, setName_book] = useState('')
  const [written_by, setWritten_by] = useState('')
  const [time_read, setTime_read] = useState('')
  const [age_for, setAge_for] = useState('')
  const [youtube_link, setYoutube_link] = useState('')
  const [telegram_link, setTelegram_link] = useState('')
  const [short_descr, setShort_descr] = useState('')
  const [full_descr, setFull_descr] = useState('')

  const navigate = useNavigate()
  const [error, setError] = useState({
    image: false,
    name_book: false,
    written_by: false,
    time_read: false,
    age_for: false,
    short_descr: false,
    full_descr: false
  })

  async function add_story() {

    const fd = new FormData()

    if (name_book && written_by && time_read && short_descr && full_descr) {

      if (image) {
        fd.append('image', image, image.name)
      }
      fd.append('name_book', name_book)
      fd.append('written_by', written_by)
      fd.append('time_read', time_read)
      fd.append('age_for', age_for)
      fd.append('youtube_link', youtube_link)
      fd.append('telegram_link', telegram_link)
      fd.append('short_descr', short_descr)
      fd.append('full_descr', full_descr)

      try {
        const result = await addstory(fd)
        navigate(-1)
      } catch (error) {

      }
    }
    else {
      toast("Maydonlarni to'ldiring !")
    }
  }

  const clean_field = () => {
    setImage('')
    setShow_image('')
    setName_book('')
    setWritten_by('')
    setTime_read('')
    setAge_for('')
    setYoutube_link('')
    setTelegram_link('')
    setShort_descr('<p></p>')
    setFull_descr('<p></p>')
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShow_image(URL.createObjectURL(event.target.files[0]));
    }
  }

  function submit(e) {
    e.preventDefault()
    let err = {
    }, t = true
    if (!(show_image)) { t = false; err = { ...err, image: true } }
    if (!(name_book)) { t = false; err = { ...err, name_book: true } }
    if (!(written_by)) { t = false; err = { ...err, written_by: true } }
    if (!(time_read)) { t = false; err = { ...err, time_read: true } }
    if (!(age_for)) { t = false; err = { ...err, age_for: true } }
    if (!(full_descr)) { t = false; err = { ...err, full_descr: true } }
    if (!(short_descr)) { t = false; err = { ...err, short_descr: true } }
    if (t) {
      add_story()
      console.log('fddf');
    }

    setError(err)
  }




  return (
    <div>
      <div className="mt-4">
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => navigate('/admin/liststory')}>Bazaga</button>
          </div>
          <ToastContainer />
          <form onSubmit={submit}>
            <h4 className='text-center pb-2'>Hikoya qo'shish</h4>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <i className='text-success'>O'lcham 640x360px yoki 17x10sm rasm tavsiya qilinadi !</i>
                {show_image ?
                  <div style={{ width: '256px', height: '144px', overflow: 'hidden' }}>
                    <img src={show_image} className='w-100' />
                  </div> :
                  <div className='text-center pt-2' style={{ width: '120px', height: '120px', color: 'black', backgroundColor: '#eeeeee', borderRadius: '15px' }}>
                    <span >Rasm tanlang</span>
                  </div>
                }
                {error?.image ? <span className='text-danger'>Rasmni kiriting</span> : ''}
              </label>
              <input type="file" className="form-control d-none" id="image"
                onChange={(e) => { setImage(e.target.files[0]); onImageChange(e); }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name_book" className="form-label">Kitob nomi</label>
              <input type="text" className="form-control" id="name_book"
                onChange={(e) => setName_book(e.target.value)} value={name_book} />
              {error.name_book ? <span className='text-danger'>Kitob nomini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="written_by" className="form-label">Muallif</label>
              <input type="text" className="form-control" id="written_by"
                onChange={(e) => { setWritten_by(e.target.value) }} value={written_by}
              />
              {error?.written_by ? <span className='text-danger'>Muallifni kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="time_read" className="form-label">O'qish vaqti</label>
              <input type="text" className="form-control" id="time_read"
                onChange={(e) => setTime_read(e.target.value)} value={time_read}
              />
              {error?.time_read ? <span className='text-danger'>O'qish vaqtini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="age_for" className="form-label">Yosh chegarasi</label>
              <input type="text" className="form-control" id="age_for"
                onChange={(e) => setAge_for(e.target.value)} value={age_for} />
              {error?.age_for ? <span className='text-danger'>Yosh chegarasini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="youtube_link" className="form-label">Youtube linki</label>
              <input type="text" className="form-control" id="youtube_link"
                onChange={(e) => setYoutube_link(e.target.value)} value={youtube_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="telegram_link" className="form-label">Telegram linki</label>
              <input type="text" className="form-control" id="telegram_link"
                onChange={(e) => setTelegram_link(e.target.value)} value={telegram_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="short_descr" className="form-label">Qizqacha kitob haqida</label>
              <Editor value={short_descr} setValue={e => {setShort_descr(e)}} />
              {error?.short_descr ? <span className='text-danger'>Ushbu maydonni to'ldiring</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="full_descr" className="form-label">Kitobni to'liq matni</label>
              <Editor value={full_descr} setValue={e => {setFull_descr(e);console.log(e);}} />
              {error?.full_descr ? <span className='text-danger'>Ushbu maydonni to'ldiring</span> : ''}
            </div>
            <div className="mb-3">
              <button type='submit' className='btn btn-primary'>Qo'shish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
