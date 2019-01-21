import React from 'react'

const Circle = () => {
  const top = Math.floor(Math.random() * window.innerHeight) - 300
  const left = Math.floor(Math.random() * window.innerWidth) - 300
  const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

  return (
    <svg
      style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}
      height="600" width="600">
      <circle cx="300" cy="300" r="10" stroke="black" strokeWidth="1" fill={color}>
        <animate attributeName="r" begin="0s" dur="2s" repeatCount="indefinite" from="5%" to="50%" />
      </circle>
    </svg>
  )
}

const Win = () =>
  Array(40).fill(1).map(() => <Circle />)

export default Win