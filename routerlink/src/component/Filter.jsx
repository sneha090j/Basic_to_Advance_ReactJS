
import { useSearchParams } from "react-router-dom";
function Filter(){
const[search,setSearch]=useSearchParams();
console.log(search.get('age'))
console.log(search.get('city'))
const age=search.get('age');
const city=search.get('city');
  return(
    <div>
      <h3>age is: {age}</h3>
      <h3>city is:{city}</h3>
      <button onClick={()=>setSearch({age:22,city:"Prayagraj"})}>Set</button>
    </div>
  )
}
export default Filter;