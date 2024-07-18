import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state={
      data:"sneha"
    }
  }
  apple(){
    this.setState({data: "Sneha Jaiswal"})
  }
render(){
  return (
    <div className='App'>
      <h1>Hii {this.state.data}</h1>
      <button onClick={()=>this.apple()}>Update</button>
    </div>
  )
}
}


export default App
