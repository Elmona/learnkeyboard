import React, { useState, useRef, useEffect } from 'react';

import Letter from '../styles/Letter'
import Input from '../styles/Input'

import ProgressBar from './ProgressBar'
import Win from './Win'

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
      () => {
        if (txt.current !== null)
          txt.current.focus()
      })

    return () => document.removeEventListener('click', clickFocus)
  }, [])
}

const useUpdateTitle = randomLetter => {
  useEffect(() => {
    document.title = `Letter: ${randomLetter}`
  }, [randomLetter])
}

const Game = props => {
  const setPage = props.setPage
  const startTime = props.startTime
  const setStartTime = props.setStartTime
  const setStopTime = props.setStopTime

  const txt = useRef(null)

  const [randomLetter, setRandomLetter] = useState(getRandomLetter())
  const [percent, setPercent] = useState(0)
  const [win, setWin] = useState(false)

  useSetFocusOnInput(txt)
  useUpdateTitle(randomLetter)

  return (
    <div>
      {win && <Win />}
      <Letter>{randomLetter}</Letter>
      <ProgressBar percentage={percent} />
      <Input
        ref={txt}
        onChange={e => {
          if (e.target.value.toLocaleUpperCase() === randomLetter) {
            if (startTime === 0)
              setStartTime(new Date())

            setRandomLetter(getRandomLetter())
            setPercent(percent + 5)
            if (percent >= 100) {
              setStopTime(new Date())
              setWin(true)
              setTimeout(() => {
                setWin(false)
                setPage(1)
              }, 6000)
              setPercent(0)
            }
          }
          e.target.value = ''
        }}
      />
    </div>
  )
}

export default Game
