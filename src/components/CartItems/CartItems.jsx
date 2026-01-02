import { useContext } from "react";
import "./cartitems.css";
import remove_icon from "../Assests/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  const hasItems = all_product.some((e) => cartItems[e.id] > 0);

  return (
    <div className="cartitems">
      <div className="cartitems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {!hasItems ? (
        <div className="empty-cart-message">
          <p>✨ Your crochet cart is feeling a little empty...</p>
          <p>Add some beautiful handmade items to get started!</p>
        </div>
      ) : (
        <>
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className="main" key={e.id}>
                  <div className="cartitems_format cartitems_format_main">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="carticon_product_icon"
                    />
                    <p className="item-title">{e.name}</p>
                    <p className="item-price">${e.new_price}</p>
                    <div className="cartitems_quantity">{cartItems[e.id]}</div>
                    <p className="item-total">
                      ${e.new_price * cartItems[e.id]}
                    </p>
                    <img
                      className="cartitems_remove_icon"
                      src={remove_icon}
                      onClick={() => removeFromCart(e.id)}
                      alt="Remove item"
                      title="Remove from cart"
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
              <div className="total-details">
                <div className="cartitems_total_item">
                  <p>Subtotal</p>
                  <p className="subtotal">${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems_total_item">
                  <p>Shipping Fees</p>
                  <p className="shipping">Free ✨</p>
                </div>
                <hr />
                <div className="cartitems_total_item">
                  <h6>Total</h6>
                  <h6 className="grand-total">${getTotalCartAmount()}</h6>
                </div>
              </div>
              <button className="checked" aria-label="Proceed to checkout">
                🧶 Proceed To Checkout
              </button>
            </div>
            <div className="cartitems_promo">
              <p className="promo-title">Enter Promocode Here</p>
              <p className="promo-subtitle">
                Have a special code? Apply it here for savings!
              </p>
              <div className="cartitems_promobox">
                <input
                  type="text"
                  placeholder="Enter promocode..."
                  aria-label="Promocode input"
                />
                <button aria-label="Apply promocode">Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
