import React from 'react'

import Progressbar from '../styles/ProgressBar'
import Filler from '../styles/Filler'

const ProgressBar = props => {
  return (
    <Progressbar>
      <Filler style={{ width: `${props.percentage}%` }} />
    </Progressbar>
  )
}

export default ProgressBar