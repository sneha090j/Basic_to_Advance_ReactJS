import React from 'react'

function Header(props) {
  console.log("props",props.data)
  return (
    <div>
          <div className="add-to-cart">
            <span className='cart-count'>{props.data.length}</span>
            <img src='https://plus.unsplash.com/premium_photo-1681398731280-a08c591dfc58?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="cart"/>
          </div>


    
    </div>
  )
}

export default Header



