import React, { useEffect, useState } from 'react'
import { Switch, Typography } from 'antd';
import axios from 'axios';
import { API } from './utils/API';
import { Styled_story_detail } from './styled_story_detail';
import { useParams } from 'react-router-dom';
import { get_detail_story } from './utils/fetch_api';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import PersonIcon from '@mui/icons-material/Person';

const { Paragraph, Text } = Typography;

export default function StoryDetail() {
  const [show, setShow] = useState(false);
  const [story, setStory] = useState()
  const { id } = useParams()

  async function getstorydetail() {

    try {
      const result = await get_detail_story(id)
      console.log(result);
      setStory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getstorydetail()
  }, [])

  return (
    <div>
      {story ? <Styled_story_detail>
        <div className="container mt-3">
          {console.log(story)}
          <div className="row">
            <div className="col-md-8 col-12">
              <div>
                <img className='w-100 pt-3' src={`${API}/${story.img}`} alt="" />
              </div>
              <h4 className='title'>{story.name_book}</h4>
              <div className='info_author'>
                <div>
                  <h5>Lorem ipsum dolor sit.</h5>
                </div>
                <div className='react'>
                  <ThumbUpAltIcon className='like' />
                  <ThumbDownOffAltIcon className='dislike' />
                </div>
              </div>
              <div className='short_descr'>
                <div dangerouslySetInnerHTML={{ __html: story.short_descr }} />
              </div>
              <div className="full-story my-4">
                <div className='text'>
                  <div dangerouslySetInnerHTML={{ __html: story.full_descr }} />
                </div>
              </div>
              {story?.youtube_link ?
                <div className="youtube my-2 text-decoration-none">
                  <a href={story?.youtube_link} className="text-decoration-none">
                    <YouTubeIcon style={{ color: 'red' }} /> Youtubedagi sahifasi
                  </a>
                </div>
                : ''}
              {story?.telegram_link ?
                <div className="youtube my-2">
                  <a href={story?.telegram_link} className="text-decoration-none">
                    <TelegramIcon style={{ color: 'blue' }} /> Telegramdagi sahifasi
                  </a>
                </div>
                : ''}
              <div className="author mt-2 mb-5">
                <b className="text-primary">
                  <PersonIcon />Foydalanuvchining boshqa hikoyalari
                </b>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorem quidem omnis veniam nam consequuntur itaque voluptates voluptate, suscipit corrupti nobis soluta doloremque, iure reiciendis similique corporis minima, eveniet ipsa excepturi debitis autem illo? Aliquam dolor architecto velit a dolorum sint quisquam ab quod quis soluta ut, placeat officia autem quos nobis officiis vitae facere tenetur nam aspernatur quas optio assumenda, magni ex. Voluptatibus, id eius? Ipsam quas, similique totam veniam nulla qui dolorum praesentium ad soluta quos voluptatem quasi sint, distinctio cum! Ducimus corrupti, modi at quas obcaecati corporis ea dolorum voluptates odio eaque quidem aspernatur cum, laborum quaerat asperiores. Nemo incidunt tempora ex odit rem itaque, deleniti nulla cum ratione distinctio omnis? Ea veniam non quas quos ratione.</p>
            </div>
          </div>
        </div>
      </Styled_story_detail> : 'Loading...'}
    </div>
  )
}
