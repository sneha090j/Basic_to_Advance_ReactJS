import { useLocation } from "react-router-dom"
function About(){
    const location=useLocation();
    console.log(loaction);
    return(
        <h1>About Page</h1>
    )
}
export default About