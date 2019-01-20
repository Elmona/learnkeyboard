import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)} >
        Testar
      </button>
    </div>
  )
}
export default App;
