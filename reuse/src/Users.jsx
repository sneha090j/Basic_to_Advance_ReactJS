function Users(props){
   return(
    <div><span>{props.data.name}</span>
    &nbsp; &nbsp; &nbsp;
    <span>{props.data.email}</span>
    &nbsp; &nbsp; &nbsp;
    <span>{props.data.contact}</span>
    &nbsp; &nbsp; &nbsp;
    </div>
   )
}
export default Users