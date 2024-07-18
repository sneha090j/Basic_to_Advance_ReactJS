import React from "react";
class Student extends React.Component{
    componentWillUnmount(){
        alert('stop')
    }
    render(){
        return (
            <div>
                <h1>Student</h1>
            </div>
        )
    }
}
export default Student