import React from "react";
import{useState,useEffect} from "react"

function UEprops(props){

    useEffect(()=>{
        console.log("useEffect");  //same as componentDidMount and this is for props
    },[props.data])
    return(
        <div>
            <h1>data props:{props.data}</h1>
            <h1>name props: {props.name}</h1>
        </div>
    )

}
export default UEprops