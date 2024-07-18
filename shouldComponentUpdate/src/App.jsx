import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  componentDidUpdate(){
    console.log(" Component Update");
  }
  shouldComponentUpdate(){
    console.log("Should Component Update");
    return true;
  }
  render(){
    return(
      <>
      <h1>Count is {this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count Update</button>
      </>

    )
  }
}

export default App
