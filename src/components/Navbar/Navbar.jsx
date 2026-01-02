import { useContext, useRef, useState, useEffect } from "react";
import "./navbar.css";
import logo from "../Assests/footer_logo.jpg";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assests/dropdown-icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("SHOP");
  const [scrolled, setScrolled] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownToggle = (e) => {
    e.stopPropagation();
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        menuRef.current.classList.contains("nav-menu-visible") &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("nav-dropdown")
      ) {
        menuRef.current.classList.remove("nav-menu-visible");
        const dropdown = document.querySelector(".nav-dropdown");
        if (dropdown) dropdown.classList.remove("open");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`navs ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav_logo" onClick={() => window.scrollTo(0, 0)}>
        <img src={logo} alt="Crochehaty Logo" />
        <p>CROCHEHATY</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropdownToggle}
        src={nav_dropdown}
        alt="Menu dropdown"
        role="button"
        aria-label="Toggle navigation menu"
        tabIndex="0"
      />

      <ul ref={menuRef} className="nav_menu">
        <li
          onClick={() => setMenu("SHOP")}
          className={menu === "SHOP" ? "active" : ""}
          role="menuitem"
        >
          <Link to="/" style={{ textDecoration: "none" }} aria-label="Shop">
            SHOP
          </Link>
          {menu === "SHOP" && <hr />}
        </li>
        <li
          onClick={() => setMenu("MEN")}
          className={menu === "MEN" ? "active" : ""}
          role="menuitem"
        >
          <Link
            to="/men"
            style={{ textDecoration: "none" }}
            aria-label="Men's collection"
          >
            Men
          </Link>
          {menu === "MEN" && <hr />}
        </li>
        <li
          onClick={() => setMenu("WOMEN")}
          className={menu === "WOMEN" ? "active" : ""}
          role="menuitem"
        >
          <Link
            to="/women"
            style={{ textDecoration: "none" }}
            aria-label="Women's collection"
          >
            Women
          </Link>
          {menu === "WOMEN" && <hr />}
        </li>
        <li
          onClick={() => setMenu("KIDS")}
          className={menu === "KIDS" ? "active" : ""}
          role="menuitem"
        >
          <Link
            to="/kids"
            style={{ textDecoration: "none" }}
            aria-label="Kids collection"
          >
            Kids
          </Link>
          {menu === "KIDS" && <hr />}
        </li>
        <li
          onClick={() => setMenu("HOME")}
          className={menu === "HOME" ? "active" : ""}
          role="menuitem"
        >
          <Link
            to="/home"
            style={{ textDecoration: "none" }}
            aria-label="Home decor"
          >
            Home
          </Link>
          {menu === "HOME" && <hr />}
        </li>
      </ul>

      <div className="nav_login_cart">
        <Link to="/login" aria-label="Login to your account">
          <button type="button">
            <span>Login</span>
          </button>
        </Link>
        <Link to="/cart" aria-label="View shopping cart">
          <img src={cart_icon} alt="Shopping cart" />
          <div
            className="nav_cart_count"
            aria-label={`${getTotalCartItems()} items in cart`}
          >
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </nav>
  );
};
