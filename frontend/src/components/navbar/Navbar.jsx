import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <h3 className="logo">SalesPro</h3>
        <ul className="navstart">
          <li
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </li>
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            Menu
          </li>
          <li
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            Mobile App
          </li>
          <li
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            Contact Us
          </li>
        </ul>
        <div className="navend">
          <FaSearch style={{ fontSize: "30px", cursor: "pointer" }} />
          <div className="cart">
            {/* <FaShoppingCart /> */}
            <TiShoppingCart style={{ fontSize: "30px", cursor: "pointer" }} />
            <div className="dot"></div>
          </div>
          <button className="login">Log in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
