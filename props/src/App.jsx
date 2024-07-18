
import './App.css'

// // for functional component-----------
// function App() {
  
// const [data,setData]=useState("sneha");
// function update(){
//   return (
//     setData("SNEHA")
//   )
// }

//   return (
//     <>
//      <Student name={data} email ="sneha090j@gmail.com"/>
//      <button onClick={update}>update</button>
//     </>
//   )
// }

// export default App

import React from 'react'
import Student from './Student';
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"SNEHA",
      email:"sneha090j@gmail.com"
    }
  }
  render(){
    return(
      <div className='App'>
        <h1>Props</h1>
        <Student name={this.state.name} email={this.state.email}></Student>
        <button onClick={()=>this.setState({name:"SnehaJaiswal",email:"sneha063j@gmail.com"})}>Update</button>
      </div>
    )

    
  }

}

