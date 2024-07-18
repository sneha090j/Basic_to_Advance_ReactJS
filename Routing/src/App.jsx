import React from 'react'

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
function App() {


  return (
  
    <div className="App">
      <Router>
        <Link to="/Home">Home </Link>
        <Link to="/About">About</Link>
        <Route path="/Home"><Home /></Route>
        <Route path="/About"><About /></Route>
      </Router>
    </div>
       
  
  )
}
function Home(){
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
function About(){
  return(
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default App
