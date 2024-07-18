import React ,{useRef} from 'react'
import './App.css'

function App() {
// uncontrolled means a form or any field that is not controlled by state .
// it can be controlled by using use ref or id but not by using state
let userref=useRef(null)
let userref1=useRef(null)
function submitform(e){
  e.preventDefault()
  console.log("input field 1",userref.current.value)
  console.log("input field 2",userref1.current.value)
  let inpu=document.getElementById('input').value
  console.log("input field 3",inpu)

}
  return (
    <>
    <form onSubmit={submitform}>
    <input type="text" ref={userref} />
    <br/>
   

    <input type="text" ref={userref1}/>
    <br/>
    <input type="text" id="input" />
    <br></br>
    <button>submit</button>
    </form>
    </>
  )
}

export default App
