import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assests/right_arrow.png'
export const Breadcrum = (props) => {
  const {product} = props;
    return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="arrow_icon"/>
        Shop <img src={arrow_icon} alt="arrow_icon" /> {product.category} <img src={arrow_icon} alt="arrow_icon" /> {product.name}
        
    </div>
  )
}
export default Breadcrum ;