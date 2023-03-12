import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API } from '../utils/API'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import EditStory from './EditStory'

export default function Admin() {

  const [story, setStory] = useState()
  const navigate = useNavigate()
  const [id, setId] = useState()
  const dispatch = useDispatch()





  const GetStory = () => {
    let token = localStorage.getItem('token')

    let config = {
      headers: {
        token: `${token}`
      }
    }
    axios.get(`${API}/api/story`, config)
      .then((res) => {
        console.log(res.data);
        setStory(res.data)

      })
      .catch((res) => {
        console.log(res);
      })
  }


  const get_one = (id) => {

    let obj = {};
    story?.forEach(item => {
      if (item._id === id) obj = item;
    });
    console.log(obj);
    dispatch({ type: 'ONE', action: obj })
    return obj;
  }



  useEffect(() => {
    GetStory()
  }, [])

  const edit_story = (id) => {
    setId(id)
    console.log(id);
  }

  const delete_story = (id) => {
    let token = localStorage.getItem('token')
    let config = {
      headers: {
        token: `${token}`
      }
    }
    axios.delete(`${API}/api/story/${id}`, config)
      .then((res) => {
        console.log(res)
        toast.warn("Ma'lumot muvofaqqiyatli O'chirildi !", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        GetStory()
      })
      .catch((err) => {
        console.log(err);
      })
  }




  return (
    <div>
      <div className="container-fluid">
        <div className='d-flex justify-content-end mt-2'>
          <button className="btn btn-primary" onClick={() => { navigate('/addstory') }}><b>+</b>Hikoya qo'shish</button>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
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
                      <img className='w-100' src={`${API}/${item.img.url}`} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="btn btn-warning mx-1" onClick={() => { edit_story(item._id); dispatch({ type: 'ID', action: item._id }); get_one(item._id) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</div>
                      <div className="btn btn-danger mx-1" onClick={() => { delete_story(item._id) }}>Delete</div>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table> : <h6>Loading...</h6>}
        </div>

        {/* <!-- Modal --> */}
        <div className="modal modal-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Tahrirlash</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <EditStory />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
