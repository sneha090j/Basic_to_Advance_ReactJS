function Button(){
    function update(){
        console.log("abcd");
    }
     return(
        <button onClick={update}>click me!</button>
     )
}
export default Button;