import React from "react";
import { Commoncontext } from "./Commoncontext";
function Button(){
    return(
        <Commoncontext.Consumer>
            {
                ({update})=>(
                    <div>
                    <button onClick={()=>update('blue')}>update to blue color</button>
                    <button onClick={()=>update('green')}>update to green color</button>
                    <button onClick={()=>update('orange')}>update to orange color</button>
                    </div>
                )
            }
        </Commoncontext.Consumer>
    )
}
export default Button;