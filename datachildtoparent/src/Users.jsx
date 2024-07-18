function Users(props){
    const data="anil sindhu"
    return(
        
            <>
            <h1>USERS</h1>
            <button onClick={()=>props.name(data)}>clickme</button>
            </>

    )
}
export default Users