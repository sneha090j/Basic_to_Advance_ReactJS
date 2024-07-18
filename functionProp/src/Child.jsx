import React from "react";

function user(props){
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>Call data</button>
        </div>
    )
}
export default user