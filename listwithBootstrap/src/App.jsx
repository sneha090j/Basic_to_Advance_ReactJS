import {Table} from 'react-bootstrap'
import './App.css'

function App() {
  const user=[
    {name:"sneha",email:"090j@gmail.com",number:"0000"},
    {name:"varsha",email:"909v@gmail.com",number:"1111"},
    {name:"sahil",email:"878s@gmail.com",number:"2222"},
    {name:"prakhar",email:"78c@gmail.com",number:"3333"}
  ]
 

  return (
    <>
   <Table>
      <tbody>
      <tr>
        <td>name</td>
        <td>email</td>
        <td>number</td>
      </tr>

    
    {
      user.map((item,i)=>
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.number}</td>
    </tr>
    )
    }
</tbody>
    </Table>
    </>
  )
}

export default App
