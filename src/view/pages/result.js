import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Emoji from '../../assets/images/smily.png'
const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rating, setRating] = useState('')

  const score = searchParams.get('score')

  useEffect(() => {
    if (score >= 0) {

      setRating('D')
    }
    if (score >= 15) {
      setRating('D+');
    }
    if (score >= 20) {
      setRating('C');
    }
    if (score >= 25) {
      setRating('C+');
    }
    if (score >= 30) {
      setRating('B');
    }
    if (score >= 35) {
      setRating('B+');
    }
    if (score >= 40) {
      setRating('A-');
    }
    if (score >= 45) {
      setRating('A');
    }
    if (score >= 50) {
      setRating('A+');
    }


  }, [rating]);

  return (
    <>

      <section>
        <div className='container'>
          <div className='row align-items-center mt-4'>
            <div className='col-3'>  <img src={Emoji} alt='smile' /></div>
            <div className='col-9 text-center'>

              <h1 className='mb-0 text-secondary'>your carbon score <span className='fw-lighter'>is</span>  </h1>
              <p className='fw-normal lh-1' style={{ color: '#67a72f', fontSize: '200px' }}>{rating}</p>
              {/* <div className='possition-relative' style={{ float: 'left', display: 'contents', fontSize: '120px', borderRadius: '50%' }}></div> */}
            </div>
          </div>
          <div className='row'>
            <ul className='nav rounded-circle mt-5'>
              <li className='nav-link' style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><Link to='#' className='nav-link text-white disabled' >A+</Link></li>
              <li className='nav-link' style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >A</Link></li>
              <li className='nav-link' style={{ background: '#67a72f', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >A-</Link></li>
              <li className='nav-link' style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >B+</Link></li>
              <li className='nav-link' style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >B</Link></li>
              <li className='nav-link' style={{ background: '#a3c51e', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >B-</Link></li>
              <li className='nav-link' style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >C+</Link></li>
              <li className='nav-link' style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >C</Link></li>
              <li className='nav-link' style={{ background: '#e0de25', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >C-</Link></li>
              <li className='nav-link' style={{ background: '#ffcf04', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >D+</Link></li>
              <li className='nav-link' style={{ background: '#FFCF05', borderRadius: '50%', margin: '1px' }}><Link to='' className='nav-link text-white disabled' >D</Link></li>
            </ul>

          </div>

        </div>
      </section>
    </>
  )
}
export default Result;