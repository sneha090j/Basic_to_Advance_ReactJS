import React from "react";
import { useEffect } from "react";

function Effect(){
    useEffect(()=>
    console.log("UseEffect") //same as componentDidUpdate
)



return(
    <div>
        <h1>UseEffect</h1>
    </div>
)
}
export default Effect