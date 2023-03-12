import React, { Component } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';

export default function EditStory() {

  const [story, setStory] = useState({
    age_for: '',
    full_descr: '',
    img: {
      contentType: [],
      url: '',
      data: {}
    },
    name_book: '',
    written_by: '',
    short_descr: '',
    telegram_link: '',
    youtube_link: '',
    time_read: ''
  })

  const selector = useSelector(state => state)

  const [image, setImage] = useState('')
  const [show_image, setShow_image] = useState('')
  const [name_book, setName_book] = useState('')
  const [written_by, setWritten_by] = useState('dsdsa')
  const [time_read, setTime_read] = useState('')
  const [age_for, setAge_for] = useState('')
  const [youtube_link, setYoutube_link] = useState('')
  const [telegram_link, setTelegram_link] = useState('')
  const [short_descr, setShort_descr] = useState('')
  const [full_descr, setFull_descr] = useState('')



  const update_story = () => {

    let name_book = document.getElementById('exampleFormControlInput1').value
    let written_by = document.getElementById('exampleFormControlInput2').value
    let time_read = document.getElementById('exampleFormControlInput3').value
    let age_for = document.getElementById('exampleFormControlInput8').value
    let youtube_link = document.getElementById('exampleFormControlInput4').value
    let telegram_link = document.getElementById('exampleFormControlInput5').value
    let image_src = document.getElementById('image').src.split('/').pop()
    
    let token = localStorage.getItem('token')
    let config = {
      headers: {
        token: `${token}`
      }
    }

    const fd = new FormData()

    if (show_image.length > 4) {
      fd.append('image', image, image.name,)
      fd.append('name_book', name_book)
      fd.append('_id', selector.story._id)
      fd.append('written_by', written_by)
      fd.append('time_read', time_read)
      fd.append('age_for', age_for)
      fd.append('youtube_link', youtube_link)
      fd.append('telegram_link', telegram_link)
      fd.append('short_descr', short_descr)
      fd.append('full_descr', full_descr)

      axios.put('http://localhost:5000/api/story', fd, config)
        .then((res) => {
          console.log(res);
          toast("Ma'lumot o'zgartirildi!")
          clean_field()
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      fd.append('url', image_src)
      fd.append('name_book', name_book)
      fd.append('_id', selector.story._id)
      fd.append('written_by', written_by)
      fd.append('time_read', time_read)
      fd.append('age_for', age_for)
      fd.append('youtube_link', youtube_link)
      fd.append('telegram_link', telegram_link)
      fd.append('short_descr', short_descr)
      fd.append('full_descr', full_descr)

      axios.put('http://localhost:5000/api/story', fd, config)
        .then((res) => {
          console.log(res);
          toast("Ma'lumot o'zgartirildi !")
          clean_field()
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  const clean_field = () => {
    window.location.reload()
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShow_image(URL.createObjectURL(event.target.files[0]));
    }
  }
  useEffect(() => {

    setStory({ ...story, ...selector.story })

  }, [selector.id])

  return (
    <div>
      <div className="mt-4">
        <div className="container">
          <ToastContainer />
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput0" className="form-label">
                <div style={{ width: '256px', height: '144px', overflow: 'hidden' }}>
                  {selector?.story?.img?.url ?
                    <img src={show_image.length > 1 ? show_image : `http://localhost:5000/${selector?.story?.img?.url}`} id='image' className='w-100' />
                    : ''
                  }
                </div>
              </label>
              <input type="file" className="form-control d-none" accept="image/png, image/jpg, image/jpeg" id="exampleFormControlInput0"
                onChange={(e) => { setImage(e.target.files[0]); onImageChange(e); console.log(e.target.files[0]); }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Kitob nomi</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"
                onChange={(e) => setName_book(e.target.value)}
                defaultValue={selector?.story?.name_book} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Muallif</label>
              <input type="text" className="form-control" id="exampleFormControlInput2"
                onChange={(e) => { setWritten_by(e.target.value) }} defaultValue={selector?.story?.written_by}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">O'qish vaqti</label>
              <input type="text" className="form-control" id="exampleFormControlInput3"
                onChange={(e) => setTime_read(e.target.value)} defaultValue={selector?.story?.time_read}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">Yosh chegarasi</label>
              <input type="text" className="form-control" id="exampleFormControlInput8"
                onChange={(e) => setAge_for(e.target.value)} defaultValue={selector?.story?.age_for} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">Youtube linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput4"
                onChange={(e) => setYoutube_link(e.target.value)} defaultValue={selector?.story?.youtube_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput5" className="form-label">Telegram linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput5"
                onChange={(e) => setTelegram_link(e.target.value)} defaultValue={selector?.story?.telegram_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput6" className="form-label">Qizqacha kitob haqida</label>
              <CKEditor
                editor={ClassicEditor}
                id="exampleFormControlInput6"
                data={selector?.story?.short_descr}
                onReady={(event, editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setShort_descr(data)
                }}

                onBlur={(event, editor) => {
                  // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  // console.log('Focus.', editor);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput7" className="form-label">Kitobni to'liq matni</label>
              <CKEditor
                editor={ClassicEditor}
                id="exampleFormControlInput7"
                data={selector?.story?.full_descr}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  // console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFull_descr(data)
                  // console.log(data);
                }}
                onBlur={(event, editor) => {
                  // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  // console.log('Focus.', editor);
                }}
              />

            </div>
            <div className="mb-3">
              <button className='btn btn-primary'
                onClick={() => { update_story() }}
              >Saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
