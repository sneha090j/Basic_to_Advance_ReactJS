import { useEffect ,useState} from 'react'
import './App.css'

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      res.json().then((resp)=>{
       
        setData(resp)
      })
    })
  },[])
  console.log(data);

  return (
    <>
   <h1>API</h1>
   <table border="2px">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Body</td>
    </tr>
    {
      data.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.body}</td>
        </tr>
    
     
      )
    }
   </table>
   
      
  
    </>
  )
}

export default App
