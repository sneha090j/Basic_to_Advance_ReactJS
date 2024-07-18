import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:"sneha"
    }
    console.log("Hello constructor")
  }
  componentDidMount(){
    console.log("Hello Component Mount")
  }
  render(){
    console.log("Hello render")
    return(
      <div>
    <h1>Hello{this.state.data}</h1>
    <button onClick={()=>{this.setState({data:"SNEHA JAISWAL"})}}>Update</button>
    </div>
    )
  }
}

 
export default App


// on making state componentdidmount will not execute again while render will execute again and again