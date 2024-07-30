import React, { useContext, useRef, useState } from 'react';
import './navbar.css';
import logo from '../Assests/footer_logo.jpg';
import cart_icon from '../Assests/cart_icon.png'; // Corrected the path for cart icon
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/dropdown-icon.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("SHOP");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        e.stopPropagation();
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className='navs'>
            <div className="nav_logo">
                <img src={logo} alt="advice_Logo" />
                <p>CROCHEHATY</p>
            </div>
            <img className='nav-dropdown' onClick={dropdownToggle} src={nav_dropdown} alt="dropdownIcon" />
            <ul ref={menuRef} className='nav_menu'>
                <li onClick={() => setMenu("SHOP")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link>
                    {menu === "SHOP" && <hr />}
                </li>
                <li onClick={() => setMenu("drugs")}>
                    <Link style={{ textDecoration: 'none' }} to='/drugs'>Men</Link>
                    {menu === "drugs" && <hr />}
                </li>
                <li onClick={() => setMenu("acces")}>
                    <Link style={{ textDecoration: 'none' }} to='/acces'>Women</Link>
                    {menu === "acces" && <hr />}
                </li>
                <li onClick={() => setMenu("skins")}>
                    <Link style={{ textDecoration: 'none' }} to='/skins'>Kids</Link>
                    {menu === "skins" && <hr />}
                </li>
                <li onClick={() => setMenu("beautys")}>
                    <Link style={{ textDecoration: 'none' }} to='/beautys'>Home</Link>
                    {menu === "beautys" && <hr />}
                </li>
            </ul>
            <div className="nav_login_cart">
                <Link to='/login'><button>log in</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav_cart_count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};
