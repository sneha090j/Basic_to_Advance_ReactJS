import {Link,NavLink} from "react-router-dom"

function NavBar(){
  return(
    <div>
        <ul className="nav-bar">
            <li><NavLink 
            style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link" to="/About">About</NavLink></li>
            <li><NavLink
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link" to="/Users/anil">Anil</NavLink></li>
            <li><NavLink
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link" to="/Users/peter">peters</NavLink></li>
       
            <li><NavLink 
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link"to="/">Home</NavLink></li>
            
            <li><NavLink 
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link"to="/Filter">Filter</NavLink></li>
              <li><NavLink 
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link"to="/Contact">Contact</NavLink></li>
               <li><NavLink 
             style={({isActive})=>{return{color: isActive? 'skyblue':" "}}}
            className="nav-link"to="/Login">Login</NavLink></li>
        </ul>
    </div>
  )
}
export default NavBar