import React from 'react'

function Home(props) {
  console.log("home",props)
  return (
    <div>
          {/* <div className="add-to-cart">
            <span className='cart-count'>{props.data.length}</span>
            <img src='https://plus.unsplash.com/premium_photo-1681398731280-a08c591dfc58?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="cart"/>
          </div> */}


      <h1>Home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww "/>
        </div>
        <div className="text-wrapper item">
          <span>I-PHONE</span>
          <span>
            Price:$10000.00
          </span>

        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler({price:1000,name:'I-phone'})}>Add to Cart</button>
          <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home



