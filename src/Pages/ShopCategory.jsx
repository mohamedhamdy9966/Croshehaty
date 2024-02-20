import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assests/dropdown-icon.png'
import { Item } from '../components/Items/Item'
export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory_indexSort">
        <p>
          <span>
            showing 1-12
          </span>
          out of 36 Products
        </p>
        <div className="shopcategory_sort">
          sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory_loadmore">
        explore more
      </div>
    </div>
  )
}
export default ShopCategory;