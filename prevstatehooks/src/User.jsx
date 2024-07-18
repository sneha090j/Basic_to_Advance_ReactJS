import React,{useEffect,useRef} from "react";
function User(props){
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count;
    })
    const prevprop=lastVal.current;

    return (
       <>
            <h1>current val{props.count}</h1>
            <h2>previous val {prevprop}</h2>
        </>
    )
}
export default User;