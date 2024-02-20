import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assests/star_icon.webp'
import star_dull_icon from '../Assests/Star-dull.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay_left">
            <div className="productdisplay_img_list">
                <img src={product.image} alt="image"/>
                <img src={product.image} alt="image"/>
                <img src={product.image} alt="image"/>
                <img src={product.image} alt="image"/>
            </div>
            <div className="productdisplay_img">
            <img className='productdisplay_main_img' src={product.image} alt="product.image"/>
            </div>
        </div>
        <div className="productdisplay_right">
            <h2>{product.name}</h2>
            <div className="productdisplay_right_star">
                <img src={star_dull_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <img src={star_icon} alt="" />
                <p>(101)</p>
            </div>
            <div className="productdisplay_right_price">
                <div className="productdisplay_right_old_price">
                    ${product.old_price}
                </div>
                <div className="productdisplay_right_new_price">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay_right_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio!
            </div>
            <div className="productdisplay_right_size">
            <h3>select concentration</h3>
            <div className="productdisplay_right_sizes">
                <div>stripe</div>
                <div>pack</div>
            </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD To Cart</button>
            <p className='productdisplay_right_category'><span>category :</span>Women , T-Shirt , Crop Top</p>
            <p className='productdisplay_right_category'><span>Tags :</span>Modern , Latest</p>
        </div>
    </div>
   )
}
