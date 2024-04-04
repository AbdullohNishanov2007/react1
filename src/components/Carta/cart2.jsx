import React from 'react'
import './cart2.css';

const cart2 = ({image, title, price }) => {
  return (
    <div className="container2">
      <div className='cart'>
        <img src={image} alt="image_product" />
        <p className="cart_name">{title}</p>
        <p className="caaart_price">{price} $</p>
        <button className='cart_add'>add to cart</button>
      </div>
    </div>
  )
}

export default cart2
