import { left } from '@popperjs/core';
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Emoji from '../../assets/images/smily.png'
const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rating, setRating] = useState()
  const score = searchParams.get("score")
  score <= 10 && console.log('D'); score > 15 && console.log('D+'); score > 20 && console.log('C+'); score > 25 && console.log('C');
  score > 30 && console.log('C+'); score > 35 && console.log('B'); score > 45 && console.log('A'); score > 50 && console.log('A+');
  return (
    <>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={Emoji} />

              <h1 className='possition-relative' style={{ float: left, display: 'contents' }}>your carbon score is = {score}  </h1>
              <ul className='nav rounded-circle'>
                <li className="nav-link" style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>A+</a></li>
                <li className="nav-link" style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>A</a></li>
                <li className="nav-link" style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>A-</a></li>
                <li className="nav-link" style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>B+</a></li>
                <li className="nav-link" style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>B</a></li>
                <li className="nav-link" style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>B-</a></li>
                <li className="nav-link" style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>C+</a></li>
                <li className="nav-link" style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>C</a></li>
                <li className="nav-link" style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>C-</a></li>
                <li className="nav-link" style={{ background: '#ffcf04', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>D+</a></li>
                <li className="nav-link" style={{ background: '#FFCF05', borderRadius: '50%', margin: '1px' }}><a className='nav-link text-white' href=''>D</a></li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Result;