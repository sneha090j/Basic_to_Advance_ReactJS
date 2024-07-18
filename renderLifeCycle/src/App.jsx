import React from "react";
import './App.css'
import User from './User'
function App() {
  const [name, setName] = React.useState("")

  return (
   <div className='App'>
      <h1>Hello</h1>
      <User name={name}/>
      <button onClick={()=>setName("SNEHA")}>Update Name</button>
    </div>
  )
}

export default App


// So a component get render when a change is there in state,component,props
