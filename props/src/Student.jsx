function Student(props){
    return(
        <div style={{backgroundColor:"navy"}}>
            <h1>Hello {props.name}</h1>
            <h1>Email: {props.email}</h1>
        </div>
    )
}
export default Student