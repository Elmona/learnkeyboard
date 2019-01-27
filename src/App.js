import React, { useState } from 'react'
import Wrapper from './styles/Wrapper'
import Game from './components/Game'
import HighScore from './components/HighScore'

const App = () => {
  const [page, setPage] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [stopTime, setStopTime] = useState(0)

  return (
    <Wrapper>
      {page === 0 && <Game
        setPage={setPage}
        setStopTime={setStopTime}
        setStartTime={setStartTime}
        startTime={startTime} />}

      {page === 1 && <HighScore
        setPage={setPage}
        startTime={startTime}
        setStartTime={setStartTime}
        stopTime={stopTime} />}
    </Wrapper>
  )
}

export default App