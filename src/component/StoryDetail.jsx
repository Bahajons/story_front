import React, { useEffect, useState } from 'react'
import { Switch, Typography } from 'antd';
import axios from 'axios';
import { API } from './utils/API';
import { Styled_story_detail } from './styled_story_detail';

const { Paragraph, Text } = Typography;

export default function StoryDetail() {
  const [show, setShow] = useState(false);
  const [story, setStory] = useState()


  const get_story_detail = (id) => {
    axios.get(`${API}/api/story/one/${id}`)
      .then((res) => {
        console.log(res.data);
        setStory(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    get_story_detail('63dad4173035d9fdd6aebc43')
  }, [])



  return (
    <div>
      {story?<Styled_story_detail>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-8 col-12">
              <div style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                <img className='w-100' src={`http://localhost:5000/${story?.img.url}`} alt="" />
                <h3>{ story?.name_book}</h3>
                <div>
                  <p><span>{show ? `Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores excepturi ipsa unde quae. Dolorum reprehenderit neque hic eum omnis officiis et culpa, molestias aspernatur quas, nam exercitationem odit maiores. dolor sit amet, consectetur adipisicing elit. Laboriosam animi eveniet sint impedit?` : `Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores excepturi ipsa unde quae. Dolorum reprehenderit neque hic eum omnis officiis et culpa, molestias aspernatur quas, nam exercitationem odit maiores. dolor sit amet, consectetur adipisicing elit. Laboriosam animi eveniet sint impedit?`.substring(0, 36)}</span> <b onClick={() => setShow(!show)}>{show ? `Yashirish` : `Ko'rsatish`}</b></p>
                </div>
                <div className='full-story'>
                  <div className='text'>
                    <div dangerouslySetInnerHTML={{ __html: story?.full_descr }} />
                  </div>

                </div>
                <p><h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, at? Qui architecto perferendis necessitatibus!</h1></p>
              </div>
            </div>
          </div>
        </div>
      </Styled_story_detail>:'Loading...'}
    </div>
  )
}
