import React, { Component } from 'react';
import { useState } from 'react'
import axios, { formToJSON } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addstory, getstorydetail, updatestory } from '../utils/fetch_api';
import { useSelector } from 'react-redux';
import Editor from '../utils/Editor';
import { API } from '../utils/API';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';


export default function EditStory() {

  const { id } = useParams()
  const selector = useSelector(state => state)

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

  const [story, setStory] = useState({
    img: '',
    name_book: '',
    written_by: '',
    time_read: '',
    age_for: '',
    youtube_link: '',
    telegram_link: '',
    short_descr: '',
    full_descr: ''
  })

  const navigate = useNavigate()
  const [error, setError] = useState({
    name_book: false,
    written_by: false,
    time_read: false,
    age_for: false,
    short_descr: false,
    full_descr: false
  })

  async function update_story(id) {
    const fd = new FormData()
    if (story.name_book && story.written_by && story.time_read && story.short_descr && story.full_descr) {

      if (image) {
        fd.append('image', image, image.name)
      }
      fd.append('name_book', story.name_book)
      fd.append('written_by', story.written_by)
      fd.append('time_read', story.time_read)
      fd.append('age_for', story.age_for)
      fd.append('youtube_link', story.youtube_link)
      fd.append('telegram_link', story.telegram_link)
      fd.append('short_descr', story.short_descr)
      fd.append('full_descr', story.full_descr)

      try {
        const result = await updatestory(id, fd)
        console.log(result);
        navigate(-1)
      } catch (error) {
        console.log(error);
      }
    }
    else {
      toast("Maydonlarni to'ldiring !")
    }
  }

  async function get_story_detail() {
    try {
      const result = await getstorydetail(id)
      console.log(result);
      setStory({ ...story, ...result.data })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get_story_detail()
    // setStory({ ...story, ...selector.story })
  }, [])




  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShow_image(URL.createObjectURL(event.target.files[0]));
    }
  }

  function submit(e) {
    e.preventDefault()
    let err = {
    }, t = true

    if (!(story.name_book)) { t = false; err = { ...err, name_book: true } }
    if (!(story.written_by)) { t = false; err = { ...err, written_by: true } }
    if (!(story.time_read)) { t = false; err = { ...err, time_read: true } }
    if (!(story.age_for)) { t = false; err = { ...err, age_for: true } }
    if (!(story.full_descr)) { t = false; err = { ...err, full_descr: true } }
    if (!(story.short_descr)) { t = false; err = { ...err, short_descr: true } }
    if (t) {
      update_story(id)
      console.log('fddf');
    }

    setError(err)
  }




  return (
    <div>
      {console.log(id)}
      <div className="mt-4">
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => navigate('/admin/liststory')}>Bazaga</button>
          </div>
          <ToastContainer />
          <form onSubmit={submit}>
            <h4 className='text-center pb-2'>Hikoyani tahrirlash</h4>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <i className='text-success'>O'lcham 640x360px yoki 17x10sm rasm tavsiya qilinadi!</i>
                {show_image ?
                  <div style={{ width: '256px', height: '144px', overflow: 'hidden' }}>
                    <img src={show_image} className='w-100' />
                  </div> : story?.img ?
                    <div className='text-center pt-2' style={{ width: '120px', height: '120px', borderRadius: '15px' }}>
                      <img src={`${API}/${story.img}`} className='w-100' alt="" />
                      <ChangeCircleIcon style={{ fontSize: '30px', opacity: '0.5' }} />
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
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.name_book} />
              {error.name_book ? <span className='text-danger'>Kitob nomini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="written_by" className="form-label">Muallif</label>
              <input type="text" className="form-control" id="written_by"
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.written_by}
              />
              {error?.written_by ? <span className='text-danger'>Muallifni kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="time_read" className="form-label">O'qish vaqti</label>
              <input type="text" className="form-control" id="time_read"
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.time_read}
              />
              {error?.time_read ? <span className='text-danger'>O'qish vaqtini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="age_for" className="form-label">Yosh chegarasi</label>
              <input type="text" className="form-control" id="age_for"
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.age_for} />
              {error?.age_for ? <span className='text-danger'>Yosh chegarasini kiriting</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="youtube_link" className="form-label">Youtube linki</label>
              <input type="text" className="form-control" id="youtube_link"
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.youtube_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="telegram_link" className="form-label">Telegram linki</label>
              <input type="text" className="form-control" id="telegram_link"
                onChange={(e) => setStory({ ...story, [e.target.id]: e.target.value })} value={story.telegram_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="short_descr" className="form-label">Qizqacha kitob haqida</label>
              {story.short_descr ?
                <Editor value={story.short_descr} setValue={e => setStory({ ...story, short_descr: e })} /> : ''
              }
              {error?.short_descr ? <span className='text-danger'>Ushbu maydonni to'ldiring</span> : ''}
            </div>
            <div className="mb-3">
              <label htmlFor="full_descr" className="form-label">Kitobni to'liq matni</label>
              <Editor value={story.full_descr} setValue={e => setStory({ ...story, full_descr: e })} />
              {error?.full_descr ? <span className='text-danger'>Ushbu maydonni to'ldiring</span> : ''}
            </div>
            <div className="mb-3">
              <button type='submit' className='btn btn-primary'>Qo'shish</button>
            </div>
          </form>
          {console.log(story)}
        </div>
      </div>
    </div>
  )
}
