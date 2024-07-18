import {withRouter} from 'react-router-dom'
function User(prop){
    console.log(prop.match.params.id);
    return (
        <div>
            <h1>Hi this is user no. {prop.match.params.id}</h1>
        </div>
    )
}
export default withRouter(User)