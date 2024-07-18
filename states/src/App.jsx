import { useState } from 'react'

import './App.css'
//---------------------- state using functional component  -----------
function App() {
  const [data, setData] = useState(0)
  function update(){
    setData(data+1);
  }

  return (
    <>
    <h1>Hi {data}</h1>
      <button onClick={update}>ClickMe </button>
    </>
  )
}

export default App
