import React, { useState } from 'react'
import '../pages/quiz.css'
import { QuizBank } from './quizBank'
import Logo from '../../assets/images/Logo.jpg'
import Home from '../../assets/images/home.png'

const Quiz = () => {

  var quizBank = QuizBank;
  console.log('quizBank', quizBank);
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)

  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col ms-10px'>
              <img src={Logo} className='w-25' alt="..." />
              <a href='#'>HOME</a>
              <a href='#'>FOR YOU</a>
              <a href='#'>FOR YOUR BUSINESS</a>
              <a href='#'>CARBON ABSORBING</a>
              <a href='#'>START YOUR AUDIT</a>

              <button className='btn' type='btn'> FIND OUT MORE</button>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <img src={Home} className='position-absolute top-50 start-50' alt='home' />

              {quizBank.map((index, key) => {

                return (
                  <ul key={key}>
                    {index.ABOUT_YOU && index.ABOUT_YOU.map((question, key) => {
                      console.log('questionsssssss', question);
                      return (
                        <li key={key}>

                          <span className='fs-3'> {question.question}</span>
                          {question.options.map((answers, key) => {
                            return (
                              <ul key={key}>
                                <li> <input type='radio' value={answers.rating} onClick={onClick} />{answers.label}</li></ul>
                            )
                          })}
                        </li>
                      )

                    })
                    }
                    {index.YOUR_HOME && index.YOUR_HOME.map((question, key) => {
                      return (

                        <ul key={key}> {showResults ? <span className='fs-3'>{question.question}</span> : null}

                          <li>{question.options.map((option, key) => {
                            return (
                              <ul key={key}> {showResults ?
                                <li ><input type='radio' value={option.rating} />{option.label}</li> : null}
                              </ul>
                            )
                          })}</li>
                        </ul>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Quiz;