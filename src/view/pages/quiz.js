import React, { useState } from 'react'
import '../pages/quiz.css'
import { QuizBank } from './quizBank'
import Logo from '../../assets/images/Logo.jpg'
import Home from '../../assets/images/home.png'
import { Link, useNavigate, } from 'react-router-dom'



const Quiz = () => {

  var quizBank = QuizBank;
  const navigate = useNavigate()
  const [showCurrentState, setCurrentState] = useState(0)

  const [questionValue, setQuestionValue] = useState({
    rating: [],
  })
  const [sume, setSume] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    let selected = questionValue.rating
    selected.push({ label: name, value: parseFloat(value) })
    setQuestionValue(prevstate => (
      {
        ...prevstate
      }

    ))
    console.log('selected', selected);
    selected.map((item, i) => {
      return setSume(sume.length > 0 ? [...sume, item.value] : [item.value])
    })
  }

  const onClick = () => setCurrentState(showCurrentState + 1)

  const calculateResult = () => {
    var sum = sume.reduce(function (sume, b) { return sume + b; }, 0);
    console.log(`score=${sum}`);
    navigate(`result?score=${sum}`)

  }

  return (
    <>
      <section>
        {JSON.stringify(sume)}
        <div className='container'>
          <div className='row'>
            <div className='col ms-10px'>
              <img src={Logo} className='w-25' alt="..." />
              <Link to='#'>HOME</Link>
              <Link to='#'>FOR YOU</Link>
              <Link to='#'>FOR YOUR BUSINESS</Link>
              <Link to='#'>CARBON ABSORBING</Link>
              <Link to='#'>START YOUR AUDIT</Link>
              <button className='btn' type='btn'> FIND OUT MORE</button>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src={Home} className='position-absolute top-50 start-50' alt='home' />

              {quizBank.map((index, key) => {
                return (
                  <React.Fragment key={key}>
                    <ul >
                      {showCurrentState === key && <>
                        <li>  <span className='fs-3' >{index.question}</span></li>

                        {index.options && index.options.map((i, key) => {
                          return (
                            <React.Fragment key={key}>
                              <li >
                                <input className="form-check-input mx-1"
                                  name={index.question}
                                  type='radio'
                                  value={i.rating}
                                  onClick={onClick}
                                  onChange={handleChange}
                                />
                                {i.label && i.label}
                              </li>
                            </React.Fragment>
                          )
                        })}
                      </>}
                    </ul>
                  </React.Fragment>
                )
              })}
              {showCurrentState ? <button className='w-25%' onClick={calculateResult}>Calculate Result</button> : null}

            </div>
          </div>
        </div>

      </section >


    </>
  )
}
export default Quiz;