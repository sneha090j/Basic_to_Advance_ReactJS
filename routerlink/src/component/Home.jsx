import { useNavigate,useLocation } from "react-router-dom"


function Home(){
    const location=useLocation();
    console.log(location);
;    const navigate=useNavigate();
    const navtopage = (url)=>{
        navigate(url)
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button on onClick={()=>{navigate('/about')}}>About Page</button>
            <button onClick={()=>navtopage('/filter')}> Filter page</button>
        </div>
    )
}
export default Home