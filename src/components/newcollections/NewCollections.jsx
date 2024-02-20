import React from 'react'
import './newcollections.css'
import new_collection from '../Assests/newcollections'
import { Item } from '../Items/Item'
export const NewCollections = () => {
  return (
    <div className='new_collections'>
        <h2>New Collections</h2>
        <hr />
        <div className="collections">
        {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
        </div>
  )
}
