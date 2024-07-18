import React from 'react'
import './App.css'
import User from './User'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
    let users=[
      {id:1,name:"Sneha",email:"sneha090j@gmail.com"},
      {id:2,name:"Satyam",email:"satyam090j@gmail.com"},
      {
        id:3,name:"Shivam",email:"shivam090j@gmail.com"
      },
      {id:4,name:"Sinu",email:"sinu090j@gmail.com"},
      {id:5,name:"Anil",email:"anil090j@gmail.com"}
    ]
  return (
    <>
    <Router>
      <h1>React Dynamic Routing</h1>
      {
        users.map((item)=>
          <div>
           <Link to={"/user/"+item.id+item.name}>{item.name}</Link>
          </div>
        )
        
      }
      <Routes>
        <Route path="/user/:id/:name" element={<User/>}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
