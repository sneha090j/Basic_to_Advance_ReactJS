import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import NavBar from './component/NavBar'
import Filter from './component/Filter'
import Users from './component/Users'
import Contact from './component/Contact'
import Channel from './component/Channel'
import Company from './component/Company'
import Other from './component/Other'
import Login from './component/Login'
import Protect from './component/Protect'
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protect component={Home}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protect component={About}/>} />
          <Route path="/Users/:name" element={<Users/>} />
          <Route path="/Filter" element={<Protect component={Filter} />} />
          <Route path="/Contact/" element={<Contact />}>
            <Route path="Channel" element={<Channel />} />
            <Route path="Company" element={<Company />} />
            <Route path="Other" element={<Other />} />
          </Route>

          <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
