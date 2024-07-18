import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UEprops from "./UEprops";

function UEcondition(){
    const [data,setData]=useState(0)
    const [name,setName]=useState("sneha")

    // useEffect(()=>{
    //     console.log("data is called"); //componenentDidMount and this is for state
    // },[data]);
    return(
        <div>
            {/* <h1>Data:{data}</h1>
            <h1>Name:{name}</h1> */}
            <UEprops data={data} name={name}/>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setName("Sneha Jaiswal")}>Update Name</button>
        </div>
    )
}
export default UEcondition;
