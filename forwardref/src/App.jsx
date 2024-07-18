import React,{useRef} from 'react'
import './App.css'
import User from './User';
function App() {
 let input=useRef(null);
 function update(){
  input.current.value="100"
 }

  return (
    <>
    <h1>Hii</h1>
      <User ref={input}/>
      <button onClick={update}>update</button>
    </>
  )
}

export default App
