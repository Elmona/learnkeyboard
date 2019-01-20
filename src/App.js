import React, { useState, useRef, useEffect } from 'react';

import Wrapper from './styles/Wrapper'
import Letter from './styles/Letter'

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'x', 'y',
  'z', 'å', 'ä', 'ö',
]

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)]

const App = () => {
  const txt = useRef(null)
  const [randomLetter, setRandomLetter] = useState(getRandomLetter())

  useEffect(() => {
    txt.current.focus()
  }, [])

  return (
    <Wrapper>
      <Letter>{randomLetter}</Letter>

      <input
        ref={txt}
        onChange={e => {
          console.log(randomLetter)
          if (e.target.value === randomLetter) {
            console.log('success')
            setRandomLetter(getRandomLetter())
          } else {
            console.log('fail')
          }
          e.target.value = ''
        }}
      />
    </Wrapper>
  )
}
export default App;
