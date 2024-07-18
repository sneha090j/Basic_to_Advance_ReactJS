import { Link,Outlet } from "react-router-dom"
function Contact(){
    return(
        <div>
            <h1>Contact Us </h1>
            <p>Here we have some related page</p>
            <Link to ="channel">Channel</Link>
            <Link to ="company">Company</Link>
            <Link to ="Other">Other</Link>
            <Outlet/>

        </div>
    )
}
export default Contact