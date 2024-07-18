
import './App.css'
import Users from './Users'
function App() {
 const student=[
  {name:"sneha",email:"sneha090j@gmail.com",contact:"8787228659"},
  {name:"Sahil",email:"sahil087j@gmail.com",contact:"9120398855"},
  {name:"varsha",email:"varsha063j@gmail.com",contact:"9473706918"},
  {name:"prakhar",email:"prakhar081j@gmail.com",contact:"8957337474"}
 ]

  return (
    <div>
      {
        student.map((item)=>
        <Users data={item}/>
      )
      }
    </div>
  )
}

export default App
