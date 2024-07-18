import {Route,Routes} from 'react-router-dom';
import './App.css'
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Pagenot from './Pagenot';
function App() {


  return (
    <>
     <div>
      <h1>Routing Setup</h1>
    
        <Nav/>
        <Routes>
       
        
          <Route path="/About" element={<About/>}></Route>
          <Route path="/" exact={true} element={<Home/>}></Route>
          <Route path="*"element={<Pagenot/>}></Route>
         
        </Routes>
     
      
      
     </div>
    </>
  )
}



export default App
