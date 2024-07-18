import React from "react";
 class User extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         name:"sneha"
    //     }
    // }
    render(){
        return(
            <h1>Hello Miss {this.props.name}</h1>
            /* <button onClick={()=>this.setState({name:"SNEHA"})}>Update Name</button>
            </> */
        )
    }
 }
 export default User
