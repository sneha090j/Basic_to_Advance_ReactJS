import React from 'react'
import './App.css'

 export default class App extends React.Component{
  constructor(){  //In Constructor we can call props but we cannot call APIs
    super();
    this.state={
      data:"Sneha"
    }

  }

  render(){
    return(
      <h1>hello {this.state.data}</h1>
    )
  }
}
