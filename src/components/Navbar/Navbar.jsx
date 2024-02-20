import React, { useContext } from 'react'
import { useEffect, useState } from "react"
import './navbar.css'
import logo from '../Assests/footer_logo.jpg'
import cart_icon from '../Assests/cart icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    
    const [menu,setmenu] = useState("SHOP")
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navs'>
        <div className="nav_logo">
            <img src={logo} alt="advice_Logo"/>
            <p>CROCHEHATY</p>
        </div>
        <ul className='nav_menu'>
    <li onClick={()=>{setmenu("")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="SHOP"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("drugs")}}><Link style={{textDecoration:'none'}} to='/drugs'>Men</Link>{menu==="drugs"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("acces")}}><Link style={{textDecoration:'none'}} to='/acces'>Women</Link>{menu==="acces"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("skins")}}><Link style={{textDecoration:'none'}} to='/skins'>Kids</Link>{menu==="skins"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("beautys")}}><Link style={{textDecoration:'none'}} to='/beautys'>Home</Link>{menu==="beautys"?<hr/>:<></>}</li>
        </ul>
        <div className="nav_login_cart">
            <Link to='/login'><button>log in</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
