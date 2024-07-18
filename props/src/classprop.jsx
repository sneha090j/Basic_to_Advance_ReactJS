import React from "react";
export default class classprop extends React.Component{
    render(){
        return(
        <div style={{backgroundColor:'navy'}}>
            <h1> Hello {this.props.name}</h1>
            <h3>Email: {this .props.email}</h3>

        </div>
        )
    }
}