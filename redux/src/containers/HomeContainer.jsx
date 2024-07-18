import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removeToCart } from "../Services/Action/Action";
const mapStateToProps=state=>({
//    data:state.cartItems.cardData

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
   removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapDispatchToProps,mapDispatchToProps)(Home)

// export default Home;