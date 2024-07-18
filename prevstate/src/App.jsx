import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function update(){
  // setCount((prev)=>{
  //   if(prev%2==0){
  //     alert("less")
  //   }
  //   return count+1;
  // })
  for(let i=0;i<5;i++){
    setCount((prev)=>{
      return prev+1;
    })
    
  }
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={update}>update count</button>
    </>
  )
}

export default App
