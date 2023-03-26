import React, { useEffect, useState } from 'react'
import Card from './utils/Card';
import { get_all_stories } from './utils/fetch_api';
import { API } from './utils/API';
import { HomeStyled } from '../style-component/Home';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

export default function Home() {
  const deviceId = navigator.userAgent;
  const [story, setStory] = useState()
  const navigate = useNavigate()



  async function get_stories() {
    try {
      const result = await get_all_stories()
      console.log(result.data);
      setStory(result.data)

    } catch (error) {

    }
  }

  useEffect(() => {
    get_stories()


  }, [])



  return (
    <HomeStyled>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {story?.map((item, index) => (
                <div className="col-md-4 col-6" key={index} onClick={() => { navigate(`/${item._id}`) }}>

                  <Card item={item} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>





    </HomeStyled>
  )
}
