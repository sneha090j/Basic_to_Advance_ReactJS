import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protect(props){
   
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
        
    })
    return (
        <div>
         
        </div>
    )
}
export default Protect;