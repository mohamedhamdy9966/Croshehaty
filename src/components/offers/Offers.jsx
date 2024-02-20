import React from 'react'
import './offers.css'
import exclusive_img from '../Assests/exclusive_img.jpg'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
        <h1>Exclusive</h1>
        <h2>offers for you</h2>
        <p>only on best sellers</p>
        <button>check now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_img} alt="exclusive_img" />
        </div>
        </div>
  )
}
