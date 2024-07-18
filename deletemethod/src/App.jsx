import React from 'react'
import { useEffect,useState } from 'react'
import './App.css'

function App() {
const [user,setUser]=useState([])
useEffect(()=>{
  getList()
},[])
function getList(){
  fetch("https://jsonplaceholder.typicode.com/comments").then((result)=>{
    result.json().then((resp)=>{
      setUser(resp)
    })
  })
}
console.log(user)
function deleteUser(id){
  fetch(`https://jsonplaceholder.typicode.com/comments/${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      getList()
    })
  })

}
  return (
    <>
      <div>
        <h1>Delete Data with API call</h1>
        <table border="1">
          <tbody>
            <tr>
              <td>ID</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Operations</td>
            </tr>
            {
              user.map((item,i)=>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
