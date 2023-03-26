import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API } from '../utils/API'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import EditStory from './EditStory'
import { deletestory, getstory } from '../utils/fetch_api'

export default function ListStory() {

  const [story, setStory] = useState()
  const navigate = useNavigate()
  const [id, setId] = useState()
  const dispatch = useDispatch()





  async function get_story() {

    try {
      const result = await getstory()
      setStory(result.data)
      console.log(result);
    } catch (error) {

    }

  }

  const get_one = (id) => {

    let obj = {};
    story?.forEach(item => {
      if (item._id === id) obj = item;
    });
    console.log(obj);
    dispatch({ type: 'ONE', action: obj })

    navigate(`/admin/editstory/${id}`)
  }






  useEffect(() => {
    get_story()
  }, [])

  const edit_story = (id) => {
    setId(id)
    console.log(id);
  }

  const delete_story = async (id) => {
    try {
      const result = await deletestory(id)
      console.log(result);
      toast.success('Story deleted', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      get_story()
    } catch (error) {
      console.log(error);
    }
  }





  return (
    <div>
      <div className="container-fluid">
        <div className='d-flex justify-content-end mt-2'>
          <button className="btn btn-primary" onClick={() => { navigate('/admin/addstory') }}><b>+</b>Hikoya qo'shish</button>
        </div>
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
        <div className='pt-5' style={{ width: '100%', overflowX: 'scroll' }}>
          {story ? <table className="table" >
            <thead>
              <tr className='text-center' style={{ fontSize: '16px' }}>
                <th scope="col">T/r</th>
                <th scope="col">Kitob nomi</th>
                <th scope="col">Muallif</th>
                <th scope="col">O'qish vaqti</th>
                <th scope="col">Yosh chegara</th>
                <th scope="col">Youtube link</th>
                <th scope="col">Telegram link</th>
                <th scope="col">Short descr</th>
                <th scope="col">Full descr</th>
                <th scope="col">Rasm</th>
                <th scope="col">Tahrirlash</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '16px' }}>
              {story?.map((item, index) => {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div style={{ width: '100px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.name_book}</div>
                  </td>
                  <td>
                    <div style={{ width: '100px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.written_by}</div>
                  </td>
                  <td>
                    <div style={{ width: '80px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.time_read}</div>
                  </td>
                  <td>
                    <div style={{ width: '80px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.age_for}</div>
                  </td>
                  <td>
                    <div style={{ width: '200px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.youtube_link}</div>
                  </td>
                  <td>
                    <div style={{ width: '80px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>{item.telegram_link}</div>
                  </td>
                  <td>
                    <div style={{ width: '200px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>
                      <div dangerouslySetInnerHTML={{ __html: item.short_descr }} />
                    </div>
                  </td>
                  <td>
                    <div style={{ width: '200px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>
                      <div dangerouslySetInnerHTML={{ __html: item.full_descr }} />
                    </div>
                  </td>
                  <td>
                    <div style={{ width: '200px', wordWrap: 'break-word', height: '70px', overflow: 'hidden' }}>
                      <img className='w-100' src={`${API}/${item?.img}`} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="btn btn-warning mx-1" onClick={() => { get_one(item._id) }}>Edit</div>
                      <div className="btn btn-danger mx-1" onClick={() => { delete_story(item._id) }}>Delete</div>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table> : <h6>Loading...</h6>}
        </div>
      </div>
    </div >
  )
}
