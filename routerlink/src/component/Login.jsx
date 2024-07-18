import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate('/')
            console.log(navigate)
        }
    })
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="enter your name"></input>
            <br>
            </br>
            <input type="text" placeholder="enter password"></input>
            <button onClick={login}>login</button>
        </div>
    )
}
export default Login;