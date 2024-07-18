
import './App.css'
import Users from './Users';
function App() {

function parent(data){
  alert(data);
}

  return (
    <>
     <Users name={parent}/>
    </>
  )
}

export default App
