
import './App.css'
import {Table} from 'react-bootstrap'
function App() {

  const student=[
    {name:"sneha",email:"87j@gmail.com",adress:[
      {HN:"10",city:"Mirzapur",country:"India"},
      {HN:"11",city:"Prayagraj",country:"India"},
      {HN:"12",city:"Banglore",country:"India"},
    ]},
    {name:"sahil",email:"95s@gmail.com",adress:[
      {HN:"10",city:" Jaunpur",country:"India"},
      {HN:"11",city:"Prayagraj",country:"India"},
      {HN:"12",city:"Banglore",country:"India"},
    ]},
    {name:"varsha",email:"96v@gmail.com",adress:[
      {HN:"10",city:" Lucknow",country:"India"},
      {HN:"11",city:"Prayagraj",country:"India"},
      {HN:"12",city:"Banglore",country:"India"},
    ]},
    {name:"prakhar",email:"98c@gmail.com",adress:[
      {HN:"10",city:" Varansi",country:"India"},
      {HN:"11",city:"Prayagraj",country:"India"},
      {HN:"12",city:"Banglore",country:"India"},
    ]}
  ]
 

  return (
    <>
      <Table border="5">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>
        {
          student.map((item)=>
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{
            item.adress.map((data)=>
          <tr>
            <td>{data.HN}</td>
            <td>{data.city}</td>
            <td>{data.country}</td>
          </tr>)
            }
          </td>
        </tr>)
        }
      </Table>

    </>
  )
}

export default App
