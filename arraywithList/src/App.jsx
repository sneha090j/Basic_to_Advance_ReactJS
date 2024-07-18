
import './App.css'

function App() {
const friends=[
  {name:'sneha',contact:'9999',email:'jaisneha@gmail.com'},
  {name:'prakhar',contact:'0000',email:'jchaturprakhar@gmail.com'},
  {name:'varsha',contact:'8888',email:'vermaversha@gmail.com'},
  {name:'sahil',contact:'1111',email:'srisahil@gmail.com'}
]
return (
  <>
  <h1>Array with lists</h1>
  <table border="2">
    <tr>
      <td>Name</td>
      <td>contact</td>
      <td>Email</td>
    </tr>
    {
      friends.map((item)=>
      <tr>
        <td>{item.name}</td>
        <td>{item.contact}</td>
        <td>{item.email}</td>
      </tr>
      )
    }
  </table>
  </>
)
}

export default App
