
import './App.css'
import React,{useState} from 'react'
function App() {

// to add functionality or style  to our components  we use as a higher order component
  return (
    <>
    <HOCred cmp={Counter}/>
      
    </>
  )
}
function HOCred(props){
  return <h2 style={{backgroundColor:"red"}}>RED<props.cmp/></h2>
}
function Counter(){
  const [count,setCount]=useState(0)
  return(
    <div>
      <h3> counter is: {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>update</button>
    </div>
  )
}

export default App
