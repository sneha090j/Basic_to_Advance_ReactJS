import { useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
 function getdata(){
  alert("hello")
 }

  return (
    <>
      <div className='App'>
        <Child data={getdata}></Child>
      </div>
    </>
  )
}

export default App
