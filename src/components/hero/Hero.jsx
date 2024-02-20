import React from 'react'
import './hero.css'
import hero_image from '../Assests/hero.jpg'
import arrow_icon from '../Assests/arrow icon.png'
import hand_icon from '../Assests/hand_icon.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_right">
        <img src={hero_image} alt="hero_image" />
        </div>
        <div className="hero_left">
        <h2>New Arrivals ONLY</h2>
        <div>
            <div className="hero_hand_icon">
                <p>
                    new
                </p>
                <img src={hand_icon} alt="hand_icon" />
            </div>
            <p>
                collections
            </p>
            <p>
                for everyone
            </p>
        </div>
        <div className="hero_latest_btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
        </div>
        </div>
    </div>
  )
}
