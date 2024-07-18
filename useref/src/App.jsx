
import './App.css'
import React ,{useRef}from 'react'
//-------------------- using class component ---------------- //in class we use createref instead of useref
// class App extends React.Component {
//   constructor(){
//     super();
//     this.inputRef=createRef();

//   }
// getVal(){
//   console.log(this.inputRef.current.value);
//   this.inputRef.current.style.color="red"
//   this.inputRef.current.style.backgroundColor="blue"
// }
// render(){
//   return(
//     <div>
//       <h1>REF</h1>
//       <input type='text' ref={this.inputRef}/>
//       <button onClick={()=>this.getVal()}>getref</button>
//     </div>
//   )
// }
// }
// export default App

//----------------------- functional component --------------

function App(){
let input=useRef(null)
function handle(){
  input.current.style.color="red"
  input.current.style.backgroundColor="blue"
  input.current.focus()
}
  return(
<div>
<h1>hello</h1>
<input type='text' ref={input}/>
<button onClick={handle}>handle</button>
</div>
  )
}
export default App




