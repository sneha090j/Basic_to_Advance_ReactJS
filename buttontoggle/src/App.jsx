import { useState } from 'react'

import './App.css'

function App() {
  const [data,setData]=useState(false)


  return (
    <div className='App'>
      {
        data? <h1>hello</h1> :null
      }
     {
      <button onClick={()=>setData(!data)}>toggle</button>
     }
    </div>
  )
}

export default App
