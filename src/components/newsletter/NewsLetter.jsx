import React from 'react'
import './newsletter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h2>Get Exclusive offers on email</h2>
        <p>Subscribe to our newsletter</p>
        <div className="emails">
            <input type="email" placeholder='type Your Email' />
            <button>Subscribe</button>
        </div>
        </div>
  )
}
