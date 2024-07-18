import React,{PureComponent,Component} from "react";


class User extends PureComponent{
    
    render(){
        console.log("re-render")
        return(
            <h1>hii{this.props.data}</h1>
            
        )
    }
}
export default User;