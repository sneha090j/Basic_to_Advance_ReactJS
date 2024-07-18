import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [data,setData] = useState({name:"sneha",age:22});

  return (
    <>
      <h1>State Object</h1>
      <input type="text" placeholder='your name' value={data.name}
      onChange={((e)=>{setData({...data,name:e.target.value})})} />
      <input type="number" placeholder='your age' value={data.age}
          onChange={((e)=>{setData({...data,age:e.target.value})})} />
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </>
  )
}

export default App
