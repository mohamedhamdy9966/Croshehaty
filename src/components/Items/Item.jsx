import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="item" />
        <p>{props.name}</p></Link>
        <div className="item_prices">
        <div className="item_price_new">
        ${props.new_price}
        </div>
        <div className="item_price_old">
        ${props.old_price}
        </div>
        </div>
        </div>
  )
}
