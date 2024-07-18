// import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
 const [name,setName]=useState("");
 const[interest,setinterest]=useState("");
 const [tnc,setTnc]=useState(false)
 function getData(e){
  console.log(name,interest,tnc);
  e.preventDefault()
 }
  return (
   <div className='App'>
    <h1>Handle Form In React</h1>
    <form onSubmit={getData}>
      <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input>
      <br/>
      <br/>
      <select onChange={(e)=> setinterest(e.target.value)}>
        <option>Select Option</option>
        <option>Marvel</option>
        <option>DC</option>
      </select>
      <br/>
      <br/>
      <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept</span>
      <br/>
      <br/>
      <button type="submit">submit</button>
    </form>
   </div>
  )
// return(
//   <Button/>
//   )
}

export default App
