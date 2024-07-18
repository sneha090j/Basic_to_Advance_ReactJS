import { connect } from "react-redux";
import Header from "../components/Header";
// import { addToCart } from "../Services/Action/Action";
const mapStateToProps=state=>({
    data:state.cartItems

})
const mapDispatchToProps=dispatch=>({
  
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)

// export default Home;