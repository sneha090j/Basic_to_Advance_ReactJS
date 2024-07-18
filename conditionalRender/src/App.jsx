import { useState } from 'react'

import './App.css'

function App() {
  const [log,setLog] = useState(4)

  return (
    <>
      {log==1?
      <h1>Welcome user 1</h1>
    : log==2? 
  <h1>Welcome user 2</h1>
    :
    <h1>Welcome user 3</h1>}
    </>
  )
}

export default App
