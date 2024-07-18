import React, { useState } from "react";


function Form(){
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [usererr,setUsererr]=useState(false)
    const [passerr,setPasserr]=useState(false)

    function logHandler(e){
        if(user.length<3 || pass.length<3){
           alert("Enter valid username or password")
        }
        else{
            alert("Form Submitted")
        }
        e.preventDefault;

    }
    function userHandler(e){
        let username=e.target.value;

        if(username.length<3){
            setUsererr(true)
        }
        else{
            setUsererr(false)
        }
    }
    function passwordHandler(e){
        let userpass= e.target.value;
        if(userpass.length<3){
            passerr(true)
        }
        else{
            passerr(false)
        }
    }
    return(
        <div>
            <form onSubmit={logHandler}>
            <input type="text" placeholder="Enter your User Name " onChange={userHandler}></input>{usererr?<span>Enter Valid user name </span>: null}
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter your Passwor" onChange={passwordHandler}></input>{passerr?<span>Enter valid Password </span>: null}
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Form