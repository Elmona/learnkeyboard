import React, { useState } from 'react'

import { getHighScore, setHighScore, madeItToTheList } from '../lib/localStorage'

const HighScore = props => {
  const startTime = props.startTime
  const stopTime = props.stopTime
  const setPage = props.setPage
  const setStartTime = props.setStartTime

  const totalTime = ((stopTime - startTime) / 1000).toFixed(1)
  const list = getHighScore()

  const [userName, setUserName] = useState(0)
  const [addToList, setAddToList] = useState(madeItToTheList(totalTime))

  return (
    <div>
      {addToList ?
        <div>
          <h1>GRATTIS!</h1>
          <p>Din tid blev {totalTime}</p>
          <p>Skriv ditt namn för att hamna på listan</p>
          <input
            onChange={e => setUserName(e.target.value)}
          />
          <button
            onClick={() => {
              if (userName.length > 0) {
                setHighScore(userName, totalTime)
                setAddToList(false)
              }
            }}
          >Skicka</button>
        </div>
        : (
          <div>
            <p style={{ fontSize: '5em' }}>HighScore!</p>
            {list.map((highScore, index) => (
              <div style={{ fontSize: '1.4em', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <p>{++index}. {highScore.name}</p>
                <p style={{ paddingLeft: '20px' }}>{highScore.time} sekunder</p>
              </div>
            ))}
            <button
              style={{ marginTop: '20px' }}
              onClick={() => {
                setStartTime(0)
                setPage(0)
              }}
            >Spela igen!</button>
          </div>
        )}
    </div>
  )
}

export default HighScore