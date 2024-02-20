import React from 'react'
import './descriptionbox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox_navigator">
            <div className="descriptionbox_nav_box">
        Description
            </div>
            <div className="descriptionbox_nav_box fade">
                Reviews (50)
            </div>
        </div>
        <div className="descriptionbox_description">
          <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nam ad officiis quo quidem sequi sunt 
            distinctio, corrupti neque 
            voluptate placeat pariatur assumenda magnam, libero 
            possimus eveniet recusandae error est eos!
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi.
        </p>
        </div>
    </div>
  )
}
