
import { useState } from 'react'
import './App.css'

function App() {
let [val, setVal]=useState("");


  return (
    <>
    <h1>controlled</h1>
    <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
    <h2>value {val}</h2>
    </>
  )
}

export default App
