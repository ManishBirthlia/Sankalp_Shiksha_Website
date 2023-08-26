import React from 'react';
import s from './Reach.module.css';

export default function Reach() {
  return (
    <div className={`${s.Reach} container mx-auto text-center mt-4`}>
        <h3>OUR REACH</h3>
        <div className='d-flex mx-auto'>

          <div className={`d-flex ${s.Reachtext}`}>
            <div>
              <h3>200 +</h3>
              <h2>STUDENTS</h2>
            </div>
          </div>
          <div className={`d-flex ${s.Reachtext}`}>
            <div>
              <h3>1</h3>
              <h2>DIGITAL <br/>PATHSHALA</h2>
            </div>
          </div>
          <div className={`d-flex ${s.Reachtext}`}>
            <div>
              <h3>20 +</h3>
              <h2>SCHOOLS</h2>
            </div>
          </div>
          <div className={`d-flex ${s.Reachtext}`}>
            <div>
              <h3>50</h3>
              <h2>VILLAGES</h2>
            </div>
          </div>
          <div className={`d-flex ${s.Reachtext}`}>
            <div>
              <h3>2</h3>
              <h2>STATES</h2>
            </div>
          </div>

        </div>
    </div>
  )
}
