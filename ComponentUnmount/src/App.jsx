import React from 'react'
import './App.css'
import Student from './Student'
 class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:true
    }
  }
  render(){
    return(
      <>
      {
        this.state.count? <Student/> :<h1>Student removed</h1>
      }
      <button onClick={()=>this.setState({count:!this.state.count})}>Toggle</button>
      </>
    )
  }
 }


export default App
