import React from 'react'
import './relatedproducts.css'
import data_product from '../Assests/data'
import { Item } from '../Items/Item'
export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
<h4>Related Products</h4>
<hr />
<div className="relatedproducts_item">
    {data_product.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })}
</div>
    </div>
  )
}
