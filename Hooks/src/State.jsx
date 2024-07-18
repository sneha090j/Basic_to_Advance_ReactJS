import React from "react";
import { useState } from "react";

function State(){
    const[name,setName]=useState("Sneha ")

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>setName("Sneha Jaiswal")}>Update Name</button>
        </div>
        
    )
}
export default State