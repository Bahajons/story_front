import React, { Component } from 'react';
import { useState } from 'react'
import axios, { formToJSON } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddStory() {

  const [image, setImage] = useState('')
  const [show_image, setShow_image] = useState('')
  const [name_book, setName_book] = useState('')
  const [written_by, setWritten_by] = useState('')
  const [time_read, setTime_read] = useState('')
  const [age_for, setAge_for] = useState('')
  const [youtube_link, setYoutube_link] = useState('')
  const [telegram_link, setTelegram_link] = useState('')
  const [short_descr, setShort_descr] = useState('<p></p>')
  const [full_descr, setFull_descr] = useState('<p></p>')
  const navigate = useNavigate()


  const add_story = () => {

    const fd = new FormData()
    if ( name_book && written_by && time_read && short_descr && full_descr) {
      fd.append('image', image, image.name)
      fd.append('name_book', name_book)
      fd.append('written_by', written_by)
      fd.append('time_read', time_read)
      fd.append('age_for', age_for)
      fd.append('youtube_link', youtube_link)
      fd.append('telegram_link', telegram_link)
      fd.append('short_descr', short_descr)
      fd.append('full_descr', full_descr)

      let token = localStorage.getItem('token')

      axios.post('http://localhost:5000/api/story',fd,
        {
          headers: {
            token: `${token}`
          }
        })
        .then((res) => {
          console.log(res);
          toast("Ma'lumot muvofaqqiyatli qo'shildi !")
          clean_field()
        })
        .catch((err) => {
          console.log(err);
        })
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




  return (
    <div>
      <div className="mt-4">
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => navigate('/admin')}>Bazaga</button>
          </div>
          <ToastContainer />
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput0" className="form-label">
                {show_image ?
                  <div style={{ width: '256px', height: '144px', overflow: 'hidden' }}>
                    <img src={show_image} className='w-100' />
                  </div> :
                  <div className='text-center pt-2' style={{ width: '120px', height: '120px', color: 'black', backgroundColor: '#eeeeee', borderRadius: '15px' }}>
                    <span >Rasm tanlang</span>
                  </div>
                }
              </label>
              <input type="file" className="form-control d-none" id="exampleFormControlInput0"
                onChange={(e) => { setImage(e.target.files[0]); onImageChange(e); console.log(e.target.files[0]); }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Kitob nomi</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"
                onChange={(e) => setName_book(e.target.value)} value={name_book} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Muallif</label>
              <input type="text" className="form-control" id="exampleFormControlInput2"
                onChange={(e) => { setWritten_by(e.target.value) }} value={written_by}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">O'qish vaqti</label>
              <input type="text" className="form-control" id="exampleFormControlInput3"
                onChange={(e) => setTime_read(e.target.value)} value={time_read}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">Yosh chegarasi</label>
              <input type="text" className="form-control" id="exampleFormControlInput8"
                onChange={(e) => setAge_for(e.target.value)} value={age_for} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">Youtube linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput4"
                onChange={(e) => setYoutube_link(e.target.value)} value={youtube_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput5" className="form-label">Telegram linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput5"
                onChange={(e) => setTelegram_link(e.target.value)} value={telegram_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput6" className="form-label">Qizqacha kitob haqida</label>
              <CKEditor
                editor={ClassicEditor}
                id="exampleFormControlInput6"
                data={short_descr}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setShort_descr(data)
                  console.log({ data });
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
                data={full_descr}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFull_descr(data)
                  console.log({ data });
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
              <button className='btn btn-primary' onClick={() => { add_story() }}>Qo'shish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
