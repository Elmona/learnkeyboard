import React, { useState, useRef, useEffect } from 'react';

import Wrapper from './styles/Wrapper'
import Letter from './styles/Letter'
import Input from './styles/Input'

import ProgressBar from './components/ProgressBar'
import Win from './components/Win'

const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y',
  'Z', 'Å', 'Ä', 'Ö',
]

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)]

const useSetFocusOnInput = txt => {
  useEffect(() => {
    txt.current.focus()
    const clickFocus = document.addEventListener('click',
      () => txt.current.focus())

    return () => document.removeEventListener('click', clickFocus)
  }, [])
}

const useUpdateTitle = randomLetter => {
  useEffect(() => {
    document.title = `Letter: ${randomLetter}`
  }, [randomLetter])
}

const App = () => {
  const txt = useRef(null)

  const [randomLetter, setRandomLetter] = useState(getRandomLetter())
  const [percent, setPercent] = useState(0)
  const [win, setWin] = useState(false)

  useSetFocusOnInput(txt)
  useUpdateTitle(randomLetter)

  return (
    <Wrapper>
      {win && <Win />}
      <Letter>{randomLetter}</Letter>
      <ProgressBar percentage={percent} />
      <Input
        ref={txt}
        onChange={e => {
          if (e.target.value.toLocaleUpperCase() === randomLetter) {
            setRandomLetter(getRandomLetter())
            setPercent(percent + 2)
            if (percent >= 100) {
              setWin(true)
              setTimeout(() => {
                setWin(false)
              }, 6000)
              setPercent(0)
            }
          }
          e.target.value = ''
        }}
      />
    </Wrapper>
  )
}

export default App;
