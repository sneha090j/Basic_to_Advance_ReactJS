import React from "react";
import { Commoncontext } from "./Commoncontext";
class Header extends React.Component{
    render(){
        return(
          <Commoncontext.Consumer>
            {
                ({color})=>(
            <h1 style={{backgroundColor:color}}>Header Page</h1>
                )
    }
          </Commoncontext.Consumer>
        );
    }
}
export default Header;