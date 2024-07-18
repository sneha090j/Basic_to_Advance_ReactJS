import React from 'react'
import { Commoncontext } from './components/Commoncontext'
import Main from './components/Main'
import Button from './components/Button'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component{
  constructor(){
    super()
    this.update=(color)=>{
      this.setState({
        color:color
      })
    }
      this.state={
        color:"red",
        update:this.update
      }
     
     
    
  }
  render(){

    return(
      <Commoncontext.Provider value={this.state}>
     <Header/>
      <h1>simple context API</h1>
     
      <Main/>
      <Button/>
     <Footer/>
      </Commoncontext.Provider>
    );
  }
}


export default App
