import React, { useContext } from 'react'
import './cartitems.css'
import remove_icon from '../Assests/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="main" key={e.id}>
              <div className="cartitems_format cartitems_format_main">
                <img src={e.image} alt="" className='carticon_product_icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems_quantity'>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className='cartitems_remove_icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems_down">
        <div className="cartitems_total">
          <h4>Cart Totals</h4>
          <div>
            <div className="cartitems_total_item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <h6>Total</h6>
              <h6>${getTotalCartAmount()}</h6>
            </div>
          </div>
          <button className='checked'>Proceed To Checkout</button>
        </div>
        <div className="cartitems_promo">
          <p>Enter Promocode Here</p>
          <div className="cartitems_promobox">
            <input type="text" placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
