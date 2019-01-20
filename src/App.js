import React, { useState, useRef, useEffect } from 'react';

import Wrapper from './styles/Wrapper'
import Letter from './styles/Letter'

import ProgressBar from './components/ProgressBar'

const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y',
  'Z', 'Å', 'Ä', 'Ö',
]

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)]

const App = () => {
  const txt = useRef(null)

  const [randomLetter, setRandomLetter] = useState(getRandomLetter())
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    txt.current.focus()
  }, [])

  return (
    <Wrapper>
      <Letter>{randomLetter}</Letter>

      <input
        ref={txt}
        style={{ width: '5%', alignSelf: 'center', marginBottom: '20px' }}
        onChange={e => {
          if (e.target.value.toLocaleUpperCase() === randomLetter) {
            setRandomLetter(getRandomLetter())
            setPercent(percent + 2)
          }
          e.target.value = ''
        }}
      />
      <ProgressBar percentage={percent} />
    </Wrapper>
  )
}
export default App;
