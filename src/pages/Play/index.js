import React, { useContext, useEffect, useState } from 'react'
import { AppSettings } from '../../context/AppSettings'
import { getQuestions } from '../../services/getQuestions'
import { Button, Spinner } from '../../components'
import { QuestionWrapper } from './QuestionWrapper'

export const Play = ({ history }) => {
  const { state: settings } = useContext(AppSettings)
  const [counter, setCounter] = useState(0)
  const [matchInfo, setMatchInfo] = useState({
    loading: true,
    points: 0,
    questions: [],
  })

  // MANAGE ERRORS !!!!
  useEffect(() => {
    getQuestions(settings)
      .then(data => {
        setMatchInfo(prev => ({...prev, loading: false, questions: data.results }))
      })
  }, [settings])

  const selectAnswerHandler = evt => {
    if (counter === matchInfo.questions.length - 1) {
      // ADD PUSH DATA IN DB
      history.push('/leaderboard')
      return
    }

    evt.target.innerHTML === matchInfo.questions[counter].correct_answer && setMatchInfo(prev => ({...prev, points: prev.points + 1}))
    setCounter(prev => prev + 1)
  }

  return (
    <div className='flex h-screen bg-gradient-to-br from-blue-600 to-blue-300'>
        {
          matchInfo.loading ? 
            <Spinner />
            :
            <div className='m-auto flex flex-col space-y-6 max-w-3xl'>
            {/* // QUESTION  */}
              <QuestionWrapper question={ matchInfo.questions[counter].question } />

              {/* TRY TO EXTRACT THIS COMPONENT */}
              <div className='flex flex-col items-center justify-center space-y-3'>
                {/* CLEAN THIS CODE PLS */}
                { [
                    ...matchInfo.questions[counter].incorrect_answers,
                    matchInfo.questions[counter].correct_answer
                  ]
                  .map( answer => <Button text={ answer } key={ answer } handler={ selectAnswerHandler } />)
                }                
              </div>
            </div>
        }

    </div>
  )
}
