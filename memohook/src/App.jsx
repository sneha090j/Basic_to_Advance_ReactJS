
import './App.css'
import React,{useState,useMemo} from 'react'

function App() {
  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);
  // function render(){
  //   console.log("rendering")   // since it is rendering again and again when we are just clicking on button update data so to stop this we use usememohook

  //   return count*2;
  // }
  const multiCount=useMemo(function render(){
console.log("re-render");
    return count*2;
  },[count])

  return (
    <>
     <h1>Count is: {count}</h1>
     <h1>Data is: {data}</h1>
     <h1>{multiCount}</h1>
     <button onClick={()=>setCount(count+1)}>Updata count</button>
     <button onClick={()=>setData(data+1)}>Updata data</button>
    </>
  )
}

export default App
