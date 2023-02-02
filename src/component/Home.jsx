import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Home() {




  return (
    <div>

      <div className="container-fluid mt-3">

        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-md-4">
            <Card
              hoverable
              style={{
                width: '100%',
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" avatar=""  description="www.instagram.com" />
              
            </Card>

              </div>
            </div>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>





    </div>
  )
}
