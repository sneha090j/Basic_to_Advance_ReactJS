import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
