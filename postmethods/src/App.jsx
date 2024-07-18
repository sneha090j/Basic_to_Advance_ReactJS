import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
 
const [name,setName]=useState("");
const [email,setEmail]=useState("");


function save(){
  console.log({name,email});
  let data={name,email}
  fetch("https://jsonplaceholder.typicode.com/comments",{
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
}).then((result)=>{
  console.log(result)
})
}

  return (
    <>
      <h1>Post Method API</h1>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
      <br/>
      <br/>
      <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button type="button" onClick={save}> Save new user</button>
    </>
  )
}

export default App
