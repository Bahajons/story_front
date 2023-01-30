import React, { Component } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../API';
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
  const [short_descr, setShort_descr] = useState('<p></p>')
  const [full_descr, setFull_descr] = useState('<p></p>')



  const add_story = () => {
    const fd = new FormData()
    if (image && name_book && written_by && time_read && short_descr && full_descr) {
      fd.append('image', image, image.name,)
      fd.append('name_book', name_book)
      fd.append('written_by', written_by)
      fd.append('time_read', time_read)
      fd.append('age_for', age_for)
      fd.append('youtube_link', youtube_link)
      fd.append('telegram_link', telegram_link)
      fd.append('short_descr', short_descr)
      fd.append('full_descr', full_descr)

      axios.post('http://localhost:5000/api/story', fd)
        .then((res) => {
          console.log(res);
          // toast("Ma'lumot qo'shildi !")
          // clean_field()
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




  const get_story_one = (id) => {
    let token = localStorage.getItem('token')

    let config = {
      headers: {
        token: `${token}`
      }
    }
    axios.get(`${API}/api/story/one/${id}`, config)
      .then((res) => {
        console.log(res.data);
        setStory({
          age_for: res.data.age_for,
          full_descr: res.data.full_descr,
          img: {
            contentType: res.data.img.contentType,
            url: res.data.img.url,
            data: res?.data?.img?.data
          },
          name_book: res.data.name_book,
          written_by: res.data.written_by,
          short_descr: res.data.short_descr,
          youtube_link: res.data.youtube_link,
          telegram_link: res.data.telegram_link,
          time_read: res.data.time_read
        })

      })
      .catch((res) => {
        console.log(res);
      })
  }



  useEffect(() => {
    get_story_one(selector.id)
  }, [selector.id])





  return (
    <div>
      <div className="mt-4">
        <div className="container">
          <ToastContainer />

          {console.log(selector.id)}
          {console.log(story)}
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput0" className="form-label">
                {show_image ?
                  <div style={{ width: '256px', height: '144px', overflow: 'hidden' }}>
                    <img src={show_image ? show_image : `http://localhost:5000/${story.url}`} className='w-100' />
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
                onChange={(e) => setName_book(e.target.value)} value={story?.name_book} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Muallif</label>
              <input type="text" className="form-control" id="exampleFormControlInput2"
                onChange={(e) => { setWritten_by(e.target.value) }} value={story?.written_by}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">O'qish vaqti</label>
              <input type="text" className="form-control" id="exampleFormControlInput3"
                onChange={(e) => setTime_read(e.target.value)} value={story?.time_read}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">Yosh chegarasi</label>
              <input type="text" className="form-control" id="exampleFormControlInput8"
                onChange={(e) => setAge_for(e.target.value)} value={story?.age_for} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">Youtube linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput4"
                onChange={(e) => setYoutube_link(e.target.value)} value={story?.youtube_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput5" className="form-label">Telegram linki</label>
              <input type="text" className="form-control" id="exampleFormControlInput5"
                onChange={(e) => setTelegram_link(e.target.value)} value={story?.telegram_link} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput6" className="form-label">Qizqacha kitob haqida</label>
              <CKEditor
                editor={ClassicEditor}
                id="exampleFormControlInput6"
                data={story?.short_descr}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setStory({ ...story, short_descr: data })
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
                data={story?.full_descr}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setStory({ ...story, full_descr: data })
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
              <button className='btn btn-primary'
              // onClick={() => { add_story() }}
              >Qo'shish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
