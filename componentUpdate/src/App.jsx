import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){

    super()
    this.state={
      data:0
      
   
    }
    console.log("Constructor")
  }
  componentDidUpdate(preprops,preSate,snapshot){
    console.log(preprops)
    console.log(preSate);
    console.log(snapshot)
    console.log("Component Update")
    // this.setState({data:this.state.data+1}) //this will go in infinite loop.......
  }
  render(){
    console.log("Render")
    return(
      <>
     <h1>Hii {this.state.data}</h1>
     <button onClick={()=>{this.setState({data:this.state.data+1})}}>Update</button>
     </>
    )
  }

}



export default App

//componentDidUpdate () will not be invoked if shouldComponentUpdate() returns false;