import './App.css'
import React,{PureComponent} from 'react'
import User from './User';
class App extends PureComponent{
 constructor(){
  super();
  this.state={
    data:1
  }
 }
render(){
  console.log("check rerendering");
  return (
    <div>
  <User data={this.state.data}/>
      <button onClick={()=>this.setState({data:1})}>Update</button>
    </div>
  )
}
}

export default App
